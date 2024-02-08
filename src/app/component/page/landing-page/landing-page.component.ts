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
import { MatPaginatorModule } from '@angular/material/paginator';

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
    MatPaginatorModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  listProduct: CardModels[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts(1, '10', 'published_at')
      .subscribe((data) => {
        this.listProduct = data.data;
      });
  }
}
