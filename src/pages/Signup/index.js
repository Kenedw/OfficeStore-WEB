import { Input } from '@rocketseat/unform';
import React from 'react';
import * as Yup from 'yup';

import { Container, Login, MyForm, TextLine } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatorio'),
  email: Yup.string()
    .email()
    .required('Campo obrigatorio'),
  cnpj: Yup.number()
    .typeError('Digite apenas numeros')
    .min(14)
    .max(14)
    .required('Campo obrigatorio'),
  confirmPassword: Yup.string()
    .min(4)
    .required('Campo obrigatorio'),
  password: Yup.string()
    .min(4)
    .required('Campo obrigatorio'),
});

export default function App() {
  function handleSubmit() {}

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
          <Input name="nome" placeholder="exemplo" label="nome" />
          <Input name="cnpj" placeholder="••••••••••••••" label="cnpj" />
          <Input name="email" placeholder="exemplo@email.com" label="e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="••••"
            label="senha"
          />
          <Input
            name="confirmPassword"
            type="confirm-password"
            placeholder="••••"
            label="confirme a senha"
          />

          <button type="submit">Cadastrar</button>
        </MyForm>
      </Login>
    </Container>
  );
}
