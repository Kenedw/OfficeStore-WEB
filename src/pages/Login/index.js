/* eslint-disable no-restricted-globals */
import { Input } from '@rocketseat/unform';
import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Card, MyForm, TextLine } from './styles';
import Loading from '~/components/Loading';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  login: Yup.lazy(value => {
    return !isNaN(value)
      ? Yup.number()
          .min(14)
          .required('Campo obrigatorio')
      : Yup.string()
          .email('Entre com um email valido')
          .required('Campo obrigatorio');
  }),
  password: Yup.string()
    .min(3)
    .required('Campo obrigatorio'),
});

export default function App() {
  const isLoading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ login, password }) {
    const data = { password };

    if (isNaN(login)) {
      data.email = login;
    } else {
      data.cnpj = login;
    }

    dispatch(signInRequest(data));
  }

  return (
    <Container>
      <span>Bem-vindo. Conecte-se com a melhor loja para empreendedores</span>
      <Card>
        <TextLine>
          <div className="login-title">Login</div>
        </TextLine>
        <MyForm schema={schema} onSubmit={handleSubmit}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Input
                name="login"
                placeholder="exemplo@email.com/•••••••••••••"
                autoComplete="username"
                label="e-mail / cnpj"
              />
              <Input
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="•••••••••••"
                label="senha"
              />

              <button type="submit">Login</button>
              <TextLine>
                <div>Novo no Office Store?</div>
              </TextLine>
              <button type="button">
                <Link to="/signup">Crie sua conta</Link>
              </button>
            </>
          )}
        </MyForm>
      </Card>
    </Container>
  );
}
