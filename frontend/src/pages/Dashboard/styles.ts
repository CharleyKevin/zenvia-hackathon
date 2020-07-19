import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Alert = styled.div`
  .alerts {
    right: 0;
    bottom: 150px;
    position: fixed;
    display: flex;
    flex-flow: column;
    font-family: 'Montserrat', sans-serif;
    overflow-y: auto;
    padding: 30px;
    width: auto;
    .alert {
      display: flex;
      flex-flow: row;
      margin: 10px 0;
      width: 250px;
      min-height: 90px;
      height: auto;
      background-color: #cecece;
      border-radius: 4px;
      color: #fff;
      box-shadow: 0px 10px 46px -21px rgba(#000, 0.75);
      transition: all 0.3s cubic-bezier(0, 0, 0.3, 1);
      cursor: pointer;
      &:hover {
        box-shadow: 0px 10px 60px -21px rgba(#000, 0.8);
      }
      &.sucess {
        background-color: #3db56e;
      }
      &.request {
        background-color: #67a4c0;
      }
      &.wait {
        background-color: #c3d2d9;
      }
      &.failed {
        background-color: #c84346;
      }
      &-icon {
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: rgba(#000, 0.2);
      }
      &-content {
        position: relative;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-flow: column;
        width: 100%;
        .alert {
          &-close {
            position: absolute;
            font-size: 0.7em;
            top: 7px;
            right: 10px;
            cursor: pointer;
          }
          &-title {
            padding-right: 12px;
            font-size: 0.7em;
            font-weight: 700;
          }
          &-subtitle {
            display: flex;
            flex-flow: column;
            margin-top: 5px;
            font-size: 0.4em;
            font-weight: 300;
            .little-list {
              display: none;
              padding: 0 10px;
            }
          }
        }
      }
    }
  }
`;

export const Whatsapp = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  button {
    background-color: Transparent;
    outline: none;
    border: none;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #706c6d;
  }
  img {
    width: 60px;
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
