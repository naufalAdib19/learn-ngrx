import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardModels } from '../../../models/card-models';
import { cardImage } from '../../../models/card-models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements CardModels {
  @Input() title = '';
  @Input() id = 0;
  @Input() content = '';
  @Input() created_at = new Date();
  @Input() updated_at = new Date();
  @Input() published_at = '';
  @Input() slug = '';
  @Input() small_image: cardImage[] = [
    {
      file_name: '',
      id: 0,
      mime: '',
      url: '',
    },
  ];
  @Input() medium_image: cardImage[] = [
    {
      file_name: '',
      id: 0,
      mime: '',
      url: '',
    },
  ];

  get dateConvert() {
    return new Date(this.published_at).toDateString();
  }
}
