import React, { useState } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

import api from '~/services/api';
import Loading from '~/components/Loading';

import { Container, Login, MyForm, TextLine } from './styles';

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
  const [isSignup, setSignup] = useState(false);
  const history = useHistory();

  async function handleSubmit({ confirmPassword, ...data }) {
    setSignup(true);

    try {
      const response = await api.post('user', data);
      if (response.status === 200) {
        alert('Cadastro realizado com sucesso');
        setSignup(false);
        history.push('/');
      }
    } catch (e) {
      console.error(e);
      alert('Falha ao realizar cadatro, confira seus dados e tente novamente');
    } finally {
      setSignup(false);
    }
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
        <MyForm schema={schema} onSubmit={data => handleSubmit(data)}>
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
