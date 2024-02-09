import { Component, Input } from '@angular/core';
import { CardModels } from '../../../models/card-models';
import { CardComponent } from '../../molecule/card/card.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent, CommonModule, NgxPaginationModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  @Input() products: CardModels[] = [];
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 100;
}
