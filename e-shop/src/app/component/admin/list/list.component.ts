import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listProduct = [];
  pageIndex = 0;
  pageSize = 10;

  columnConfig: {
    displayName: string;
    field: string;
  }[];

  searchKey = '';

  list = [];

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.searchKey = '';
    this.columnConfig = [
      {
        displayName: 'Tên sản phẩm',
        field: 'Name',
      },
      {
        displayName: 'Đơn giá',
        field: 'Price',
      },
    ];
    this.productService
      .getProductsPaging(0, this.pageSize, this.searchKey)
      .subscribe((res) => {
        this.list = res.data;
      });
  }

  search(a = '') {
    this.productService
      .getProductsPaging(this.pageIndex, this.pageSize, this.searchKey)
      .subscribe((res) => {
        if (!res || !res.data || res.data.length === 0) {
          if (a === 'add') this.pageIndex--;
          else{
            this.list = [];
          }
          return;
        }
        this.list = res.data;
      });
  }

  changeLayout(value) {
    this.router.navigateByUrl('admin/list-' + value);
  }

  prev() {
    if (this.pageIndex === 0) {
      return;
    }
    this.pageIndex--;
    this.search();
  }

  next() {
    this.pageIndex++;
    this.search('add');
  }

  view(l){
    this.router.navigate(["/admin/view-product/" + l.ID])
  }

  edit(l){
    this.router.navigate(["/admin/edit-product/" + l.ID])
  }

  delete(l){
    if(confirm("Bạn có chắc chắn muốn xoá?")){
      this.productService.delete(l).subscribe(res=>{
        console.log(res);
        this.search(this.searchKey);
      });
    }
  }

  addProduct(){
    this.router.navigate(["admin/add-product"])
  }
}
