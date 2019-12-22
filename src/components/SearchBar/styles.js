import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const MyForm = styled(Form)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  width: 40vh;

  input {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
    padding: 5px;
    background-color: #fff;
  }

  button {
    padding: 6px;
    font-weight: bold;
    color: #ff5125;
    background: #d3d3d3;
    border: 0;
    border-radius: 0 4px 4px 0;
    font-size: 16px;
    transition: background 0.2s;
    transition: color 0.2s;
    &:hover {
      background: ${darken(0.06, '#ff5125')};
      color: ${darken(0.06, '#d3d3d3')};
    }
    > svg {
      width: 15px;
      height: 15px;
    }
  }
`;
