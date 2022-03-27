import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #dddddd;
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 220px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 313px;
  font-size: 22px;
  font-weight: bold;
  line-height: 25.78px;
  margin: 28px 0 0 32px;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 18.75px;
  font-weight: 400;
  margin: 30px 0 0 32px;
`;

export const InputSignUp = styled.input`
  width: 100%;
  max-width: 444px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #777777;
  box-sizing: border-box;
  margin: 13px 25px 0 32px;
  font-size: 14px;
  font-weight: 400;
  padding: 6px 11px;
  ::placeholder {
    color: #bbb;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 111px;
  height: 33px;
  background: #000000;
  color: #fff;
  position: absolute;
  right: 25px;
  bottom: 23px;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #FFFFFF;
    outline: 1px solid #ffffff;
    color: #FFFFFF;
    cursor: pointer;
  }
`;
