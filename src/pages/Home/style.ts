import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 607.5px;
  height: 167px;
`;

export const GoSignUp = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: dashed;
  padding: 10px;
  width: 100px;
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 30px;
  top: 30px;
  &:hover {
    background-color: #FFFFFF;
    outline: 1px solid #000000;
    color: #000000;
  }
`;
