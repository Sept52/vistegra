import { GET_INFO } from './types';

const initialState = {
  data: [],
};

export const getInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
