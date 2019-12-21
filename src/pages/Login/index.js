import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Login, TextLine, MyForm } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email incorreto')
    .required('Campo obrigatorio'),
  cnpj: Yup.string().required('Campo obrigatorio'),
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
          <Input name="email" placeholder="exemplo@email.com" label="e-mail" />
          <Input name="cnpj" label="cnpj" placeholder="•••••••••••••" />
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
