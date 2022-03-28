import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
  @media screen and (max-width: 375px){
    min-width: 375px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-size: 22px;
  margin-left: 37px;
  font-weight: bold;
  @media screen and (max-width: 375px){
    font-size: 18px;
  }
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 80px;
  min-height: 80px;
  background-color: #151515;
  @media screen and (max-width: 375px){
    min-width: 320px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  padding-bottom: 30px;
`;
export const ModalBody = styled.div`
  position: relative;
  width: 100%;
  max-width: 723px;
  height: 349px;
  min-height: 349px;
  margin: 44px 38px 0 38px;
  border: 1px solid #999999;
  @media screen and (max-width: 900px) {
    width: 80%;
    margin: 44px auto 0 auto;
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
  @media screen and (max-width: 500px) {
    margin: 23px 0 0 20px;
  }
`;
export const ModalTitle = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 31px;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
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
    width: 85%;
    margin: 0 auto 0 31px;
  }
  @media screen and (max-width: 500px) {
    margin: 0 auto 0 20px;
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
    width: 85%;
    margin: 0 auto 0 31px;
  }
  @media screen and (max-width: 500px) {
    margin: 0 auto 0 20px;
  }
`;

export const Button = styled.button`
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
    color: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    right: 10%;
  }
`;
export const ButtonLink = styled.button`
  width: 100%;
  max-width: 111px;
  height: 33px;
  background: #ffffff;
  color: #000000;
  position: absolute;
  right: 160px;
  bottom: 25px;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000000;
    outline: 1px solid #999999;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 525px) {
    max-width: 80px;
    font-size: 12px;
    right: 28%;
  }
  @media screen and (max-width: 440px) {
    top: 42.5px;
    right: 40px;
    height: 25px;
  }
`;

export const ButtonLinkHome = styled.button`
  width: 100%;
  max-width: 111px;
  height: 33px;
  background: #ffffff;
  color: #000000;
  position: absolute;
  right: 40px;
  bottom: 25px;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000000;
    outline: 1px solid #999999;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 525px) {
    max-width: 80px;
    font-size: 12px;
  }
  @media screen and (max-width: 440px) {
    top: 12.5px;
    height: 25px;
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  max-width: 659px;
  margin: 0 auto;
  background: #ffffff;
  color: #ff0000;
  right: 31px;
  border: none;
  margin-top: 5px;
  transition: all 0.3s ease-in-out;
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 723px;
  margin: 30px 32px 0 30px;
`;
