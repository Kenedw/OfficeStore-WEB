import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  border-bottom: 1px solid #d3d3d3;

  > a {
    margin: auto;
    img {
      max-width: 150px;
    }
  }
`;

export const SignOut = styled.button`
  position: absolute;
  display: flex;
  align-self: flex-end;
  align-items: center;
  border: none;
  flex-direction: column;
  margin: 0 10px 0 auto;
  color: #3d3d3d;

  @media (max-width: 630px) {
    position: relative;
    margin: 0 10px;
    align-self: center;
  }

  img {
    border-radius: 40%;
    margin: 5px;
  }

  > div {
    display: flex;
    flex-direction: row;

    svg {
      max-width: 20px;
      max-height: 20px;
      margin-right: 5px;
    }
  }
`;
