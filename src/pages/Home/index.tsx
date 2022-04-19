import React from 'react';
import { Container, ImageWrapper, GoSignUp } from './style';
import logo from '../../assets/images/codeleap_logo.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Home = (): JSX.Element => {
  return (
    <Container>
      <ImageWrapper>
        <img src={logo} alt="logo" />
      </ImageWrapper>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <GoSignUp>
          Sign up
          <FaArrowRight />
        </GoSignUp>
      </Link>
    </Container>
  );
};

export default Home;
