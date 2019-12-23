import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
  justify-items: center;

  button {
    border: 0;
    max-width: 212px;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d3d3d3;
    padding: 20px;
    object-fit: cover;

    img {
      align-self: center;
      max-width: 150px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0;
    }
  }
`;

export const ToolsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  > button {
    font-weight: 600;
    padding: 6px;
    border: 0;
    border-radius: 4px;
    background-color: #d3d3d3;
    color: #ff5125;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.06, '#d3d3d3')};
    }
  }
`;
