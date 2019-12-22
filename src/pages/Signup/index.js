import React from 'react';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '~/components/Loading';
import { Container, Login, MyForm, TextLine } from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatorio'),
  email: Yup.string()
    .email()
    .required('Campo obrigatorio'),
  cnpj: Yup.number()
    .typeError('Digite apenas numeros')
    .test('len', 'Digite um cnpj valido', len => len.toString().length === 14)
    .required('Campo obrigatorio'),
  password: Yup.string()
    .min(3)
    .required('Campo obrigatorio'),
  confirmPassword: Yup.string()
    .min(3)
    .oneOf([Yup.ref('password'), null], 'Senhas não são iguais')
    .required('Campo obrigatorio'),
});

export default function App() {
  const isSignup = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ confirmPassword, ...data }) {
    dispatch(signUpRequest(data)); // login and password
  }

  return (
    <Container>
      <span>
        Só mais um pouco, e você se conectará com a melhor loja para
        empreendedores.
      </span>
      <Login>
        <TextLine>
          <div className="login-title">Cadastro</div>
        </TextLine>
        <MyForm schema={schema} onSubmit={handleSubmit}>
          {isSignup ? (
            <Loading />
          ) : (
            <>
              <Input name="name" placeholder="exemplo" label="nome" />
              <Input name="cnpj" placeholder="••••••••••••••" label="cnpj" />
              <Input
                name="email"
                autoComplete="username"
                placeholder="exemplo@email.com"
                label="e-mail"
              />
              <Input
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••"
                label="senha"
              />
              <Input
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••"
                label="confirme a senha"
              />

              <button type="submit">Cadastrar</button>
            </>
          )}
        </MyForm>
      </Login>
    </Container>
  );
}
