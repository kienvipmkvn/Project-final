import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderDetailModel } from '../models/order-detail.model';
import { OrderModel } from '../models/order.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrdersPaging(pageIndex, pageSize, keySeach = '', status = '') {
    const url = environment.getOrderPaging + `?pageIndex=${pageIndex + 1}&pageSize=${pageSize}&name=${keySeach}&status=${status}`;
    return this.http.get<any>(url);
  }

  getOrdersbyId(id) {
    const url = environment.getOrdersbyId + '?id=' + id;
    return this.http.get<any>(url);
  }

  getOrderDetailsByOrderID(orderID){
    const url = environment.getProductByOrderID + '?orderID=' + orderID;
    return this.http.get<any>(url);
  }

  getOrdersbyGuid(guid) {
    const url = environment.getOrdersbyGuid + '?Guid=' + guid;
    return this.http.get<any>(url);
  }

  saveOrder(order: OrderModel, listProduct:{
    product: ProductModel,
    quantity: number
  } []) {
    const url = environment.addOrder;
    return this.http.post(url, order);
  }

  saveOrderDetail(orderDetail: OrderDetailModel){
    const url = environment.addOrderDetail;
    return this.http.post(url, orderDetail);
  }

  editStatus(order){
    const url = environment.editStatus;
    return this.http.post(url, order);
  }
}
