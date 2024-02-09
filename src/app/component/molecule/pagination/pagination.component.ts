import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { productSettingsType } from '../../../state/reducers/product-settings.reducer';
import { Observable, pipe } from 'rxjs';
import { Store } from '@ngrx/store';
import { setCurrentPages } from '../../../state/actions/product-settings.actions';
import { selectProductSettings } from '../../../state/selector';
import { GlobalState } from '../../../state/selector';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() pageSize: string = '10';
  @Input() totalProduct: number = 100;
  @Input() currentPage: number = 0;
  productSettings$: Observable<productSettingsType>;

  constructor(private store: Store<GlobalState>) {
    this.productSettings$ = this.store.select(pipe(selectProductSettings));
  }

  get page() {
    const listNumber: number[] = [];
    for (let i = 1; i <= this.totalProduct / parseInt(this.pageSize); i++) {
      listNumber.push(i);
    }
    return listNumber;
  }

  onNumberClick(pages: number): void {
    this.store.dispatch(
      setCurrentPages({
        currentPage: pages,
      })
    );
  }
}
