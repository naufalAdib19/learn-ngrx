import { Component, Input } from '@angular/core';
import { CardModels } from '../../../models/card-models';
import { CardComponent } from '../../molecule/card/card.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  @Input() products: CardModels[] = [];
}
