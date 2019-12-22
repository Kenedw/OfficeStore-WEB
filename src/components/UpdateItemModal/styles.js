import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Card = styled.div`
  position: absolute;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  width: 40vh;

  label {
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0 5px 0;
  }

  > span {
    margin: 0;
    font-size: 12px;
    color: #4d4d4d;
  }

  input {
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px;
    background-color: #fff;
  }

  button:first-child {
    flex: 1;
    margin: 5px 0 0;
    height: 35px;
    font-weight: bold;
    background: #ff5125;
    color: #fff;
    border: 0;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#ff5125')};
    }
  }
  button {
    flex: 1;
    margin: 5px 0 0;
    height: 35px;
    font-weight: bold;
    background: #69ce98;
    color: #fff;
    border: 0;
    border-radius: 0 4px 4px 0;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#69CE98')};
    }
  }
`;
