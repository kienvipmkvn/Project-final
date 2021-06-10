import { Component, OnInit } from '@angular/core';
import { OrderDetailModel } from 'src/app/models/order-detail.model';
import { OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listProduct: {
    product: ProductModel,
    quantity: number
  }[] = [];

  totalPrice;
  buySuccess = false;

  order: OrderModel = new OrderModel();

  constructor(public cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.listProduct = this.cartService.listProduct;
  }

  deleteCart(){
    this.cartService.deleteAll();
    this.listProduct = this.cartService.listProduct;
  }

  addProduct(p){
    this.cartService.addProduct(p, 1);
  }

  minusProduct(p){
    this.cartService.removeProduct(p, 1);
  }

  buy(invalid){
    if(invalid){
      return;
    }
    this.order.Amount = this.cartService.totalPrice;
    this.order.Status = "Đã đặt hàng"
    this.orderService.saveOrder(this.order, this.cartService.listProduct).subscribe((res: any)=>{
      if(!res || !res.Guid) return;
      this.orderService.getOrdersbyGuid(res.Guid).subscribe(order=>{
        if(!order) return;
        const orderID = order.ID;
        let r: OrderDetailModel[] = [];
        for (const p of this.cartService.listProduct) {
          let od = new OrderDetailModel();
          od.OrderID = orderID;
          od.ProductID = p.product.ID;
          od.Quantity = p.quantity;
          r.push(od);
          this.orderService.saveOrderDetail(od).subscribe(res2=>{
            this.cartService.deleteAll();
            this.listProduct = this.cartService.listProduct;
          });
        }
      })
    })
    this.listProduct = this.cartService.listProduct;
    this.buySuccess = true;
  }
}
