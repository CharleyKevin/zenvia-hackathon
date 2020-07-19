import { Router } from 'express';
import axios from 'axios';

import multer from 'multer';

import { getCustomRepository } from 'typeorm';
import formatValue from '../utils/formatValue';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const transactionsRouter = Router();

transactionsRouter.get('/balance', async (request, response) => {
  const transactionsRepository = getCustomRepository(TransactionsRepository);
  const balance = await transactionsRepository.getBalance();

  const balanceFormatted = {
    income: formatValue(balance.income),
    outcome: formatValue(balance.outcome),
    total: formatValue(balance.total),
  };

  const dataAtual = new Date().toLocaleDateString('PT-BR');

  const message = {
    from: 'trapezoidal-bear',
    to: '5511932295522',
    contents: [
      {
        type: 'text',
        text: `Olá Empresa,\nOrganiZen informa:\n\nSua posição consolidada para o dia ${dataAtual} ficou em ${balanceFormatted.total}.`,
      },
    ],
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-API-TOKEN': 'lKU8TVHUG-XfMxr8I3kckj66Y0PmK3KBSzSt',
  };

  const messageSent = await axios.post(
    'https://api.zenvia.com/v1/channels/whatsapp/messages',
    message,
    {
      headers,
    },
  );

  if (messageSent.status === 200) {
    return response.status(204).send();
  }
});

transactionsRouter.get('/', async (request, response) => {
  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const transactions = await transactionsRepository.find();
  const balance = await transactionsRepository.getBalance();

  return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
  });

  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTranscation = new DeleteTransactionService();

  await deleteTranscation.execute(id);

  return response.status(204).send();
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransactions = new ImportTransactionsService();

    const transactions = await importTransactions.execute(request.file.path);

    return response.json(transactions);
  },
);

export default transactionsRouter;
