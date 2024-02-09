import { Component, Input, SimpleChanges } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import {
  orderByDateProduct,
  orderByTotalProduct,
} from '../../../state/actions/product-settings.actions';
import { productSettingsType } from '../../../state/reducers/product-settings.reducer';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-settings',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './product-settings.component.html',
  styleUrl: './product-settings.component.css',
})
export class ProductSettingsComponent {
  productSettings$: Observable<productSettingsType>;
  totalProducts: string = '10';
  dateProduct: string = 'published_at';

  constructor(private store: Store<{ productSettings: productSettingsType }>) {
    this.productSettings$ = store.select('productSettings');
  }

  setProductByTotalProducts(): void {
    this.store.dispatch(
      orderByTotalProduct({ totalProducts: this.totalProducts })
    );
  }

  setProductByDateProducts(): void {
    this.store.dispatch(orderByDateProduct({ dateProducts: this.dateProduct }));
  }
}
