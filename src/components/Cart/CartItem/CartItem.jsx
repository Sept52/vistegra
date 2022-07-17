import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCount, deleteItemInCart } from '../../../redux/action';

function CartItem({ item, onChange }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.itemInCartReducer);
  const isItemInCart = itemsInCart.some((itemInCart) => itemInCart.ID === item.ID);
  const { idItem } = useSelector((state) => state.itemInCartReducer);

  useEffect(() => {
    setPrice(count * Math.round(item.PRICE));
    onChange();
  }, [count]);

  useEffect(() => {
    if (idItem === item.ID) {
      setCount(count + 1);
      dispatch(addItemCount(0));
    }
  }, [idItem]);

  const handleDelete = () => {
    if (isItemInCart) {
      dispatch(deleteItemInCart(item.ID));
    }
    onChange();
  };

  const handleInput = (e) => {
    if (count >= 1) {
      setCount(+e.target.value);
    } else {
      dispatch(deleteItemInCart(item.ID));
    }
  };

  return (
    <tr className="cart__item">
      <td>
        {item.NAME} {item.LENGTH && `Длина: ${item.LENGTH} мм`}
      </td>
      <td>
        <input
          type="number"
          style={{ width: "100px" }}
          value={count}
          onChange={handleInput}
          onClick={handleInput}
        />
      </td>
      <td>{Math.round(item.PRICE)} руб.</td>
      <td data-counter>{price} руб.</td>
      <td>
        <button onClick={handleDelete} style={{ border: "none", background: "none" }}>
          ❌
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
