import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Opacity = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  z-index: 999;
  margin: 0;
`;

export const Modal = styled.div`
  width: 600px;
  height: 600px;
  left: calc(50% - 300px);
  background-color: white;
  position: absolute;
  z-index: 1000;
  padding-top: 40px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .close {
    position: absolute;
    right: 30px;
  }
  p.mesage1 {
    margin-top: 45px;
    width: 330px;
    height: 48px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #706c6d;
  }

  p.mesage2 {
    margin-top: 40px;
    width: 470px;
    height: 48px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #706c6d;
  }

  button {
    width: 180px;
    margin-top: 75px;
    border-radius: 10px;
    background: #0073a9;
    color: #fff;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#0073A9' : '#fff')};
  padding: 22px 32px;
  border-radius: 15px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  border-color: #0073a9;
  border-style: solid;
  border-width: 2px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
