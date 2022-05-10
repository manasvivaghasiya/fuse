import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { switchMap, take } from 'rxjs/operators';
import { studentProduct } from './student.type';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  take:any;

  private _product: BehaviorSubject<studentProduct | null> = new BehaviorSubject(null);
  private _products: BehaviorSubject<studentProduct[] | null> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

  get product$(): Observable<studentProduct>
  {
      return this._product.asObservable();
  }

  /**
   * Getter for products
   */
  get products$(): Observable<studentProduct[]>
  {
      return this._products.asObservable();
  }
  createProduct(): Observable<studentProduct>
  {
      return this.products$.pipe(
          take(1),
          switchMap(products => this._httpClient.post<studentProduct>(`${environment.apiProduct}/product/add`,{}).pipe(
              map((newProduct) => {

                  // Update the products with the new product
                  this._products.next([newProduct, ...products]);

                  // Return the new product
                  return newProduct;
              })
          ))
      );
  }
}

