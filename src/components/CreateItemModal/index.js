import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MyForm, Card, Button } from './styles';
import api from '~/services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function CreateItemModal({ isOpen, setIsOpen }) {
  const schema = Yup.object().shape({
    name: Yup.string('Entre com um nome valido').required('Campo obrigatorio'),
    value: Yup.number('entre com um valor valido').required(
      'Campo obrigatorio'
    ),
  });

  function closeModal() {
    setIsOpen('');
  }

  async function handleSubmit(data) {
    try {
      const response = await api.post(`item`, data);

      if (response.status === 200) {
        toast.done(`Sucesso ao criar o item ${response.data.id}`);
      }
    } catch (err) {
      console.error(err);
      await toast.error('Error ao tentar criar novo item');
    } finally {
      closeModal();
    }
  }

  return (
    <Card>
      <Modal
        isOpen={isOpen === 'create'}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Adicionando novo item</h2>
        <MyForm onSubmit={handleSubmit} schema={schema}>
          <Input name="name" readOnly={false} label="nome" placeholder="nome" />
          <Input
            name="value"
            readOnly={false}
            label="valor"
            placeholder="valor"
          />
          <Button>
            <button type="submit">Confirmar</button>
          </Button>
        </MyForm>
      </Modal>
    </Card>
  );
}

CreateItemModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.string.isRequired,
};
