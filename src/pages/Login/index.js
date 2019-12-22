import { Input } from '@rocketseat/unform';
import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Container, Card, MyForm, TextLine } from './styles';

const schema = Yup.object().shape({
  login: Yup.string().required('Campo obrigatorio'),
  password: Yup.string()
    .min(3)
    .required('Campo obrigatorio'),
});

export default function App() {
  function handleSubmit() {}

  return (
    <Container>
      <span>Bem-vindo. Conecte-se com a melhor loja para empreendedores</span>
      <Card>
        <TextLine>
          <div className="login-title">Login</div>
        </TextLine>
        <MyForm schema={schema} onSubmit={handleSubmit}>
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
        </MyForm>
      </Card>
    </Container>
  );
}
