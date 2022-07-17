import { SET_ITEM_IN_CART, DELETE_ITEM_IN_CART, ADD_ITEM_COUNT } from './types';

const initialState = {
  itemsInCart: [],
  idItem: 0,
};

export const itemInCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_IN_CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
        idItem: false,
      };

    case DELETE_ITEM_IN_CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart.filter((item) => item.ID !== action.payload)],
        idItem: false,
      };

    case ADD_ITEM_COUNT:
      return {
        ...state,
        idItem: action.payload,
      };

    default:
      return state;
  }
};
