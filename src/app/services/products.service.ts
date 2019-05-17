import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  get getProducts() {
    return this.http.get(
      'https://hidden-refuge-81494.herokuapp.com/api/products'
    );
  }
  getProduct(id: string) {
    return this.http.get(
      `https://hidden-refuge-81494.herokuapp.com/api/product/${id}`
    );
  }

  // SEARCH PRODUCTS
  searchProducts(term) {
    return this.http.get(
      `https://hidden-refuge-81494.herokuapp.com/api/products/search/${term}`
    );
  }

  // CETOGERYS
  // // get apparel
  get getApparel() {
    return this.http.get(
      'https://hidden-refuge-81494.herokuapp.com/api/products/apparel'
    );
  }
  get getBeauty() {
    return this.http.get(
      'https://hidden-refuge-81494.herokuapp.com/api/products/beauty'
    );
  }

  get getShoes() {
    return this.http.get(
      'https://hidden-refuge-81494.herokuapp.com/api/products/shoes'
    );
  }
}
