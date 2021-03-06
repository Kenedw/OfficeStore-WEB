import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

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

export default function MyModal({ isOpen, setIsOpen, item }) {
  function closeModal() {
    setIsOpen('');
  }

  async function handleSubmit({ name, value }) {
    const data = item;

    if (name) {
      data.name = name;
    }
    if (value) {
      data.value = value;
    }
    try {
      const response = await api.put(`item/${data.id}`, data);

      if (response.status === 200) {
        await toast.done(`Sucesso ao atualizar o item ${data.id}`);
      }
    } catch (err) {
      console.error(err);
      await toast.error('Error ao tentar atualizar o item');
    } finally {
      closeModal();
    }
  }

  async function handleDeleteItem() {
    const { id: itemId } = item;
    try {
      const response = api.delete(`item/${itemId}`);
      if (response.status === 200) {
        await toast.done(`Sucesso ao deletar o item ${itemId}`);
      }
    } catch (err) {
      console.error(err);
      await toast.error('Error ao tentar deletar o item');
    } finally {
      closeModal();
    }
  }
  return (
    <Card>
      <Modal
        isOpen={isOpen === 'update'}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Editando item {item.id}</h2>
        <MyForm onSubmit={handleSubmit}>
          <Input
            name="name"
            readOnly={false}
            label="nome"
            placeholder={item.name}
          />
          <Input
            name="value"
            readOnly={false}
            label="valor"
            placeholder={item.value}
          />
          <Button>
            <button type="button" onClick={handleDeleteItem}>
              Excluit item
            </button>
            <button type="submit">Confirmar</button>
          </Button>
        </MyForm>
      </Modal>
    </Card>
  );
}

MyModal.propTypes = {
  item: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.string.isRequired,
};
