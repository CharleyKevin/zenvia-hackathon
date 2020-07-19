import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo-novo-zenvia.svg';

import api from '../../services/api';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory();
  async function handleUpload(): Promise<void> {
    try {
      await api.get('transactions/balance');

      alert('enviado');
    } catch (err) {
      console.log(err.response.error);
    }
  }
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="">Tour</Link>
          <Link to="">
            <button type="button" onClick={handleUpload}>
              Fechar Caixa
            </button>
          </Link>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
