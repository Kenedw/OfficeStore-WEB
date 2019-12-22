import React from 'react';
import { Link } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, SignOut } from './styles';

import logo from '~/assets/imgs/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.signed);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} from="" alt="Home" />
      </Link>
      {isAuth && (
        <SignOut type="button" onClick={handleSignOut}>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="avatar"
          />
          <div>
            <GoSignOut />
            SignOut
          </div>
        </SignOut>
      )}
    </Container>
  );
}
