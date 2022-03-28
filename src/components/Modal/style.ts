import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
`;

export const ModalBody = styled.div`
  position: relative;
  top: 150px;
  background-color: #ffffff;
  width: 100%;
  max-width: 723px;
  height: 349px;
  margin: 44px 38px 0 38px;
  border: 1px solid #999999;
  @media screen and (max-width: 900px) {
    width: 80%;
    margin: 34px auto 0 auto;
  }
  @media screen and (max-width: 390px) {
    height: 370px;
  }
`;

export const ModalQuestion = styled.h1`
  width: 100%;
  max-width: 299px;
  margin: 23px 0 0 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
`;
export const ModalTitle = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 31px;
`;
export const ModalInput = styled.input`
  width: 100%;
  max-width: 659px;
  height: 28px;
  margin-left: 31px;
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 6px 10px;
  ::placeholder {
    color: #bbb;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0 auto 0 31px;
  }
  @media screen and (max-width: 700px) {
    width: 85%;
  }
  @media screen and (max-width: 430px) {
    width: 80%;
  }
`;
export const ModalContent = styled.textarea`
  width: 100%;
  max-width: 659px;
  height: 74px;
  margin-left: 31px;
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  ::placeholder {
    color: #bbb;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0 auto 0 31px;
  }
  @media screen and (max-width: 700px) {
    width: 85%;
  }
  @media screen and (max-width: 430px) {
    width: 80%;
  }
`;

export const ButtonSave = styled.button`
  width: 100%;
  max-width: 111px;
  height: 33px;
  background: #000000;
  color: #fff;
  position: absolute;
  right: 32px;
  bottom: 30px;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ffffff;
    outline: 1px solid #000000;
    color: #000000;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    right: 32px;
  }
  @media screen and (max-width: 430px) {
    right: 40px;
  }
  @media screen and (max-width: 390px) {
    bottom: 60px;
    right: 90px;
  }
  
`;
export const ButtonCancel = styled.button`
  width: 100%;
  max-width: 111px;
  height: 33px;
  background: #fff;
  color: #000;
  position: absolute;
  right: 152px;
  bottom: 30px;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  outline: 1px solid #000000;
  &:hover {
    background-color: tomato;
    color: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    right: 148px;
  }
  @media screen and (max-width: 430px) {
    right: 158px;
  }
  @media screen and (max-width: 390px) {
    bottom: 20px;
    right: 90px;
  }
  
`;