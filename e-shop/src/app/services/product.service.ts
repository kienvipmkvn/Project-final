import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // // product: ProductModel = {
  // //   ID: 1,
  // //   ProductName: 'IP12',
  // //   Price: 35000000,
  // //   ImageUrl: 'assets/images/IP12.jpg',
  // //   Description: 'Chính hãng VN/A '
  // // };
  // // product2: ProductModel = {
  // //   ID: 2,
  // //   ProductName: 'Samsung Galaxy Note 20 Ultra 5G',
  // //   Price: 20000000,
  // //   ImageUrl: 'assets/images/Samsung Galaxy Note 20 Ultra 5G.jpg',
  // //   Description: 'Chính hãng VN/A '
  // // };
  // productList = [this.product, this.product2];
  constructor(private http: HttpClient) {}

  getProductsPaging(pageIndex, pageSize, searchKey = "", brand = -1) {
    const url = environment.searchProduct + `?page=${pageIndex + 1}&size=${pageSize}&name=${searchKey}&bid=${brand}`;
    return this.http.get<{data:ProductModel[]}>(url);
  }

  getProductById(id){
    const url = `${environment.baseUrl + environment.common.product.show}?id=${id}`;
    return this.http.get<ProductModel>(url);
  }

  edit(p){
    const url = environment.editProduct + "?ID=" + p.ID;
    return this.http.put(url, p);
  }

  add(p){
    const url = environment.addProduct;
    return this.http.post(url, p);
  }

  delete(p){
    const url = environment.deleteProduct;
    return this.http.post(url, {
      ID: p.ID
    });
  }
}
