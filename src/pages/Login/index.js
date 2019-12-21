import { Input } from '@rocketseat/unform';
import React from 'react';
import * as Yup from 'yup';

import { Container, Login, MyForm, TextLine } from './styles';

const schema = Yup.object().shape({
  login: Yup.string().required('Campo obrigatorio'),
  password: Yup.string()
    .min(4)
    .required('Campo obrigatorio'),
});

export default function App() {
  function handleSubmit() {}

  return (
    <Container>
      <span>Bem-vindo. Conecte-se com a melhor loja para empreendedores</span>
      <Login>
        <TextLine>
          <div className="login-title">Login</div>
        </TextLine>
        <MyForm schema={schema} onSubmit={handleSubmit}>
          <Input
            name="login"
            placeholder="exemplo@email.com/•••••••••••••"
            label="e-mail / cnpj"
          />
          <Input
            name="password"
            type="current-password"
            placeholder="•••••••••••"
            label="senha"
          />

          <button type="submit">Login</button>
          <TextLine>
            <div>Novo no Office Store?</div>
          </TextLine>
          <button type="submit">Crie sua conta</button>
        </MyForm>
      </Login>
    </Container>
  );
}
