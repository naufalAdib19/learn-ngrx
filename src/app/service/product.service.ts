import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(
    currentPages: number,
    totalProducts: string,
    dateProduct: string
  ): Observable<any> {
    return this.http.get<any>(
      `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPages}&page[size]=${totalProducts}&append[]=small_image&append[]=medium_image&sort=${dateProduct}`
    );
  }
}
