import { GET_INFO, SET_ITEM_IN_CART, DELETE_ITEM_IN_CART, ADD_ITEM_COUNT } from './types';
import products from '../json/product.json';

export const infoProducts = () => {
  return {
    type: GET_INFO,
    payload: products,
  };
};

export const setItemInCart = (action) => {
  return {
    type: SET_ITEM_IN_CART,
    payload: action,
  };
};

export const deleteItemInCart = (action) => {
  return {
    type: DELETE_ITEM_IN_CART,
    payload: action,
  };
};

export const addItemCount = (action) => {
  return {
    type: ADD_ITEM_COUNT,
    payload: action,
  };
};
