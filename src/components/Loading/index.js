import React from 'react';
import { MdAssignmentInd } from 'react-icons/md';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <MdAssignmentInd />
      <span>Carregando...</span>
    </Container>
  );
}
