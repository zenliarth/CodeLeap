import styled, { keyframes }from 'styled-components';

const InfiniteRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const Spinner = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-right: 2px solid #000;
  animation: ${InfiniteRotate} 1s linear infinite;
`;
