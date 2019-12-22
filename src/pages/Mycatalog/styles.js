import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 20vh;
    }
  }

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
