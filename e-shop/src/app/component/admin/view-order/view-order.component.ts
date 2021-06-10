import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailModel } from 'src/app/models/order-detail.model';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
})
export class ViewOrderComponent implements OnInit {
  listProduct = [];
  orderDetails: OrderDetailModel[] = [];
  order: OrderModel = new OrderModel();
  isEdit = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.order
    this.orderService
      .getOrdersbyId(snapshot.params['id'])
      .subscribe((res) => {
        this.order = res;
        this.orderService.getOrderDetailsByOrderID(this.order.ID).subscribe((res: {data: OrderDetailModel[]})=>{
          if(!res || !res.data) return;
          this.orderDetails = res.data;
          for (const od of this.orderDetails) {
            this.productService.getProductById(od.ProductID).subscribe(p=>{
              this.listProduct.push({
                product: p,
                quantity: od.Quantity
              })
            })
          }
        })
      });
  }

  save() {
    this.orderService.editStatus(this.order).subscribe(res=>{
      this.router.navigate(["/admin/list-order"]);
    });
  }

  back(){
    this.router.navigate(["/admin/list-order"]);
  }

  change(){
    this.isEdit = true;
  }
}
