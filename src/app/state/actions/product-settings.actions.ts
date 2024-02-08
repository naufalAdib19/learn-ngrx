import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const orderByTotalProduct = createAction(
  '[ProductSettings Component] setTotalPoducts',
  props<{ totalProducts: string }>()
);
export const orderByDateProduct = createAction(
  '[ProductSettings Component] setDateProducts',
  props<{ dateProducts: string }>()
);
