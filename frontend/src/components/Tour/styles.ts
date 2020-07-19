import styled from 'styled-components';

export const Opacity = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 999;
  margin: 0;
`;

export const Popup = styled.div`
  width: 500px;
  height: 200px;
  top: calc(50% - 100px);
  left: 20px;
  position: absolute;
  z-index: 1000;
  padding-top: 10px;
  padding-left: 5px;
  border-radius: 10px;
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const PopupImport = styled.div`
  width: 500px;
  height: 200px;
  top: 45px;
  left: calc(100% - 500px);
  position: absolute;
  z-index: 1000;
  padding-top: 10px;
  padding-left: 5px;
  border-radius: 10px;
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const PopupImportCloseBox = styled.div`
  width: 500px;
  height: 200px;
  bottom: 100px;
  left: calc(100% - 500px);
  position: absolute;
  z-index: 1000;
  padding-top: 10px;
  padding-left: 5px;
  border-radius: 10px;
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const MessagePopup = styled.div`
  .close {
    position: absolute;
    right: 40px;
    top: 15px;
  }
  .actionNext {
    position: absolute;
    right: 40px;
    bottom: 75px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
  }
  button.tuor {
    width: 175px;
    margin-top: 10px;
    border-radius: 10px;
    background: #0073a9;
    color: #fff;
  }
  p.mesage1 {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    text-align: left;

    color: #ffffff;
  }
  background-color: #7d1e78;
  padding-left: 10px;
  height: 120px;
  width: 227px;
  border-radius: 10px;
  padding-right: 10px;
`;

export const MessagePopupImport = styled.div`
  .close {
    position: absolute;
    right: 240px;
    top: 15px;
  }
  .actionNext {
    position: absolute;
    right: 240px;
    bottom: 75px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
  }
  button.tuor {
    width: 175px;
    margin-top: 10px;
    border-radius: 10px;
    background: #0073a9;
    color: #fff;
  }
  p.mesage1 {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    text-align: left;

    color: #ffffff;
  }
  background-color: #7d1e78;
  padding-left: 10px;
  height: 120px;
  width: 227px;
  border-radius: 10px;
  padding-right: 10px;
`;

export const MessagePopupCloseBox = styled.div`
  .close {
    position: absolute;
    right: 240px;
    top: 15px;
  }
  .actionNext {
    position: absolute;
    right: 240px;
    bottom: 75px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
  }
  button.tuor {
    width: 175px;
    margin-top: 10px;
    border-radius: 10px;
    background: #0073a9;
    color: #fff;
  }
  p.mesage1 {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    text-align: left;

    color: #ffffff;
  }
  background-color: #7d1e78;
  padding-left: 10px;
  height: 120px;
  width: 227px;
  border-radius: 10px;
  padding-right: 10px;
  bottom: 40px;
`;

export const Container = styled.div`
  width: 600px;
  height: 600px;
  top: calc(50% - 300px);
  left: calc(50% - 300px);
  background-color: white;
  position: absolute;
  z-index: 1000;
  padding-top: 40px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .none {
    display: none;
  }

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

  button.tuor {
    width: 180px;
    margin-top: 75px;
    border-radius: 10px;
    background: #0073a9;
    color: #fff;
  }
`;
