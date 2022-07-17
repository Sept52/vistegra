import React, { useEffect } from 'react';
import { infoProducts } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import s from './Catalog.module.scss';

function Catalog() {
  const arr = [];
  const arrАdditionalСards = [];

  const info = useSelector((state) => {
    const { getInfoReducer } = state;
    return getInfoReducer.data;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(infoProducts());
  }, []);

  if (info) {
    info.map((value) => {
      if (value.SKU) {
        arr.push(value.SKU);
      }
    });
  }

  if (arr.length > 1) {
    arr.map((value) => {
      let keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        arrАdditionalСards.push(value[keys[i]]);
      }
    });
  }

  return (
    <div>
      <h2>Каталог</h2>
      <div className={s.scroll__block}>
        {info.map((product) => {
          return product.PRICE ? <Card product={product} key={product.ID} /> : '';
        })}
        {arrАdditionalСards.map((product) => {
          return <Card product={product} key={product.ID} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
