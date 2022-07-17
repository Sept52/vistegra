import { combineReducers } from 'redux';
import { getInfoReducer } from './getInfoReducer';
import { itemInCartReducer } from './itemInCartReducer';

export const rootReducer = combineReducers({
  getInfoReducer,
  itemInCartReducer,
});
