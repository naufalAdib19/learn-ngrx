import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BannerComponent } from '../../organism/banner/banner.component';
import { ProductSettingsComponent } from '../../molecule/product-settings/product-settings.component';
import { ListProductComponent } from '../../organism/list-product/list-product.component';
import { ProductService } from '../../../service/product.service';
import { CardModels } from '../../../models/card-models';
import { PaginationComponent } from '../../molecule/pagination/pagination.component';
import { Store, select } from '@ngrx/store';
import { Observable, finalize } from 'rxjs';
import { selectProductSettings } from '../../../state/selector';
import { GlobalState } from '../../../state/selector';
import { CommonModule } from '@angular/common';
import { productSettingsType } from '../../../state/reducers/product-settings.reducer';
import { NgxPaginationModule } from 'ngx-pagination';
import { setCurrentPages } from '../../../state/actions/product-settings.actions';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BannerComponent,
    ProductSettingsComponent,
    ListProductComponent,
    PaginationComponent,
    CommonModule,
    NgxPaginationModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  listProduct: CardModels[] = [];
  productSettings$: Observable<productSettingsType>;
  isLoading: boolean = false;
  currentPage: number = 0;
  totalProduct: number = 0;
  productPerPage: string = '10';

  constructor(
    private productService: ProductService,
    private store: Store<GlobalState>
  ) {
    this.productSettings$ = this.store.pipe(select(selectProductSettings));
  }

  ngOnInit(): void {
    this.productSettings$.subscribe({
      next: (value: productSettingsType) => {
        this.fetchData(value);
        this.currentPage = value.currentPage;
        this.productPerPage = value.totalProducts;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  fetchData(state: productSettingsType): void {
    this.isLoading = true;
    this.productService
      .getProducts(state.currentPage, state.totalProducts, state.dateProducts)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.listProduct = data.data;
        this.totalProduct = data.meta.total;
      });
  }

  get convertProductPerPage(): number {
    return parseInt(this.productPerPage);
  }

  setCurrentPages(page: number): void {
    this.store.dispatch(
      setCurrentPages({
        currentPage: page,
      })
    );
  }
}
