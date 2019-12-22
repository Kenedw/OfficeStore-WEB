import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > span {
    margin: 15px 0;
    font-size: 19px;
    text-align: center;
    color: #4d4d4d;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  background-color: #fff;
  padding: 30px 40px 25px 40px;
`;

export const TextLine = styled.div`
  margin-top: 50px;
  border-top: 1px solid #d1d1d1;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 100%;

  div {
    background-color: #fff;
    color: #4d4d4d;
    margin: -10px auto 0 auto;
    width: fit-content;
    padding: 0 15px;
  }

  .login-title {
    font-size: 24px;
    color: #ff5125;
    font-weight: bold;
    margin: -17px auto 0 auto;
  }
`;

export const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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

  button {
    margin: 5px 0 0;
    height: 35px;
    font-weight: bold;
    background: #ff5125;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#ff5125')};
    }
  }

  button:last-child {
    background-color: #d3d3d3;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#d3d3d3')};
    }
    a {
      color: #3d3d3d;
    }
  }
`;
