import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  ModalBox,
  Title,
  Text,
  InputSignUp,
  Button,
} from './style';

const SignUp = (): JSX.Element => {
  const [username, setUserName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  const insertToLocalStorage = () => {
      if(username.length >= 3){
        localStorage.setItem('username', username);
        navigate('/main');
      }
  };

  return (
    <Container>
      <ModalBox>
        <Title>Welcome to CodeLeap network!</Title>
        <Text>Please enter your username</Text>
        <InputSignUp
          type="text"
          placeholder="Jhon Doe"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
            setDisabled(e.target.value.length > 0 ? false : true);
          }}
        />
        <Button
          onClick={insertToLocalStorage}
          disabled={disabled}
          style={{
            backgroundColor: disabled ? '#ddd' : '#000',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          ENTER
        </Button>
      </ModalBox>
    </Container>
  );
};

export default SignUp;
