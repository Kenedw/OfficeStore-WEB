import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  align-self: flex-end;
  position: absolute;
  right: 0;
  border: none;
  margin: 0px 10px;
  color: #3d3d3d;
  > svg {
    max-width: 20px;
    max-height: 20px;
    margin-right: 5px;
  }
`;
