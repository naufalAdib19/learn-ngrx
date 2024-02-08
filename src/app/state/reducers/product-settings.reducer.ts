import { createReducer, on } from '@ngrx/store';
import {
  orderByDateProduct,
  orderByTotalProduct,
} from '../actions/product-settings.actions';

export type productSettingsType = {
  totalProducts: string;
  dateProducts: string;
  currentPage: number;
};

const productSettingsInitialState: productSettingsType = {
  dateProducts: 'oldest',
  totalProducts: '10',
  currentPage: 1,
};

export const productSettingsReducers = createReducer(
  productSettingsInitialState,
  on(orderByDateProduct, (state: productSettingsType, { dateProducts }) => ({
    ...state,
    dateProducts: dateProducts,
    currentPage: 1,
  })),
  on(orderByTotalProduct, (state: productSettingsType, { totalProducts }) => ({
    ...state,
    totalProducts: totalProducts,
    currentPage: 1,
  }))
);
