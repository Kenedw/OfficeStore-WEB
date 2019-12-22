import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

import api from '~/services/api';
import ItemModal from '~/components/UpdateItemModal';
import SearchBar from '~/components/SearchBar';

import { ProductList } from './styles';

import itemImg from '~/assets/imgs/item.png';

export default function MyCatalog() {
  const [itemModal, setItemModal] = useState({ any: null });
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState({ page: 1 });
  const [dispatch, setDispatch] = useState(1);

  useEffect(() => {
    async function loadItems() {
      console.log(params);
      try {
        const response = await api.get('item', {
          params,
        });

        if (response.status === 200 && response.data.length !== 0) {
          if (params.page === 1) {
            setItems(response.data);
          } else {
            setItems(items.concat(response.data));
          }
        }
      } catch (err) {
        toast.error('Falha ao carregar dados!');
        console.error(err);
      }
    }

    loadItems();
  }, [dispatch]);

  function handleMoreData() {
    const auxParams = params;
    auxParams.page += 1;

    setParams(auxParams);
    setDispatch(Math.random() * 100);
  }

  return (
    <>
      <SearchBar setParams={setParams} setDispatch={setDispatch} />
      <InfiniteScroll dataLength={items.length} next={handleMoreData} hasMore>
        <ProductList>
          <ItemModal isOpen={isOpen} setIsOpen={setIsOpen} item={itemModal} />
          {items.map((item, key) => (
            <button
              type="button"
              key={key.toString()}
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
      </InfiniteScroll>
    </>
  );
}
