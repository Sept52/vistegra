import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';

function Cart() {
  const [check, setCheck] = useState(0);
  const { itemsInCart } = useSelector((state) => state.itemInCartReducer);

  const handleInput = () => {
    const interval = setInterval(() => {
      const items = document.querySelectorAll('.cart__item');
      let totalPrice = 0;
      items?.forEach((item) => {
        const priceEl = item.querySelector('[data-counter]');
        totalPrice += parseInt(priceEl.innerText.replace(' руб.', ''));
      });
      setCheck(totalPrice);
    });
    return () => clearInterval(interval);
  };

  return (
    <div className={s.cart}>
      <h2>Корзина</h2>
      <div className={s.cart__block}>
        <table>
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '1%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>Наименование</th>
              <th scope='col'>Кол-во</th>
              <th scope='col'>Цена/шт</th>
              <th scope='col'>Сумма</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {itemsInCart.map((i) => {
              return <CartItem item={i} key={i.ID} onChange={handleInput} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Итого</td>
              <td></td>
              <td></td>
              <td>{check} руб.</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
