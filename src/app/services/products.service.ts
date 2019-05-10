import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  get getProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }
  getProduct(id: string) {
    return this.http.get(`http://localhost:3000/api/product/${id}`);
  }
}
