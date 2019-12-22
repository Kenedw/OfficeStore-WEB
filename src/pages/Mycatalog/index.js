import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ProductList } from './styles';

import itemImg from '~/assets/imgs/item.png';
import api from '~/services/api';

export default function MyCatalog() {
  const [items, setItems] = useState([]);

  const page = 1;

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await api.get('item', {
          params: { page },
        });

        console.log(response);

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
      {items.map((item, key) => (
        <li key={key.toString}>
          <img src={itemImg} alt={item.name} />
          <strong>{item.name}</strong>
          <span>
            {item.value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </li>
      ))}
    </ProductList>
  );
}
