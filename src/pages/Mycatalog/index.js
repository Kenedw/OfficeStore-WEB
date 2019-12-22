import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ProductList } from './styles';

import itemImg from '~/assets/imgs/item.png';
import api from '~/services/api';
import ItemModal from '~/components/UpdateItemModal';

export default function MyCatalog() {
  const [itemModal, setItemModal] = useState({ any: null });
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const page = 1;

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await api.get('item', {
          params: { page },
        });

        if (response.status !== 200) {
          throw Error;
        }

        if (response.data.length > 0) {
          setItems(response.data);
        }
      } catch (err) {
        toast.error('Falha ao carregar dados!');
        console.error(err);
      }
    }

    loadItems();
  }, [page]);

  return (
    <ProductList>
      <ItemModal isOpen={isOpen} setIsOpen={setIsOpen} item={itemModal} />
      {items.map((item, key) => (
        <button
          type="button"
          key={key.toString}
          onClick={() => {
            setItemModal(item);
            setIsOpen(true);
          }}
        >
          <li>
            <img src={itemImg} alt={item.name} />
            <strong>{item.name}</strong>
            <span>
              {item.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </li>
        </button>
      ))}
    </ProductList>
  );
}
