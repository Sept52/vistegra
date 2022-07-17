import React from 'react';
import s from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCount, setItemInCart } from '../../../redux/action';

function Card({ product }) {
  const { itemsInCart } = useSelector((state) => state.itemInCartReducer);
  const disptach = useDispatch();
  const onClick = (e) => {
    if (itemsInCart.find((item) => item.ID === product.ID)) {
      disptach(addItemCount(product.ID));
    } else {
      disptach(setItemInCart(product));
    }
  };
  return (
    <div className={s.card}>
      <div className={s.img}>{product.PICTURE}</div>
      <div className={s.name}>
        {product.NAME} {product.LENGTH && `Длина: ${product.LENGTH} мм`}
      </div>
      <div className={s.price}>{Math.round(product.PRICE)} руб.</div>
      <div className={s.btn__block}>
        <button onClick={onClick} className={s.button} role="button">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default Card;
