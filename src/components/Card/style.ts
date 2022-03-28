import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 723px;
  height: 328px;
  background: #ffffff;
  border: 1px solid #999999;
  box-sizing: border-box;
  margin: 34px 38px 0 38px;
  @media screen and (max-width: 900px){
    width: 80%;
    margin: 34px auto 0 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 723px;
  margin: 0 auto;
  height: 70px;
  background-color: #151515;
`;
export const Title = styled.div`
  color: #ffffff;
  font-size: 22px;
  margin-left: 37px;
  font-weight: bold;
`;
export const ButtonBox = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 29px;
`;
export const EditButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 23px 25px 18px 30px;
`;
export const UserTitle = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
`;
export const CreatedTime = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
`;
export const Text = styled.p`
  width: 100%;
  max-width: 662px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0px 30px 30px 30px;
`;


