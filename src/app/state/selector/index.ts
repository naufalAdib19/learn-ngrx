import { createSelector } from '@ngrx/store';
import { productSettingsType } from '../reducers/product-settings.reducer';

export type GlobalState = {
  productSettings: productSettingsType;
};

const productSettings = (state: GlobalState) => state.productSettings;

export const selectProductSettings = createSelector(
  productSettings,
  (state: productSettingsType) => state
);
