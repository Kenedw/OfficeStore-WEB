import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/imgs/logo.png';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} from="" alt="Home" />
      </Link>
    </Container>
  );
}
