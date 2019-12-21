import styled, { keyframes } from 'styled-components';

const horizontalRotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > svg {
    color: #ff5125;
    animation: ${horizontalRotate} 1s alternate-reverse infinite;
    width: 10vh;
    height: 10vh;
  }

  > span {
    font-size: 14px;
    font-weight: 500;
  }
`;
