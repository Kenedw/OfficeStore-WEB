import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

import api from '~/services/api';
import UpdateItemModal from '~/components/UpdateItemModal';
import CreateItemModal from '~/components/CreateItemModal';
import SearchBar from '~/components/SearchBar';

import { ProductList, ToolsBar } from './styles';

import itemImg from '~/assets/imgs/item.png';

export default function MyCatalog() {
  const [itemModal, setItemModal] = useState({ any: null });
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState('');
  const [params, setParams] = useState({ page: 1 });
  const [dispatch, setDispatch] = useState(1);

  useEffect(() => {
    async function loadItems() {
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
      <ToolsBar>
        <SearchBar setParams={setParams} setDispatch={setDispatch} />
        <button
          type="button"
          onClick={() => {
            setIsOpen('create');
          }}
        >
          Add novo Item
        </button>
      </ToolsBar>
      <CreateItemModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <UpdateItemModal isOpen={isOpen} setIsOpen={setIsOpen} item={itemModal} />
      <InfiniteScroll dataLength={items.length} next={handleMoreData} hasMore>
        <ProductList>
          {items.map((item, key) => (
            <button
              type="button"
              key={key.toString()}
              onClick={() => {
                setItemModal(item);
                setIsOpen('update');
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
