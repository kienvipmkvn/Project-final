import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { BrandService } from 'src/app/services/brand.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  product: ProductModel = new ProductModel();
  brand = "";
  brands = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.productService
      .getProductById(snapshot.params['id'])
      .pipe(mergeMap(res=>{
        this.product = res;
        return this.brandService.getAllBrand();
      }))
      .subscribe((res) => {
        this.brands = res.data;
        for (const brand of this.brands) {
          if(this.product.BrandID === brand.ID) {
            this.brand = brand.Name;
          } 
        }
      });
  }

  back(){
    this.router.navigate(["/admin/list-product"]);
  }

  edit(){
    this.router.navigate(["/admin/edit-product", this.product.ID]);
  }

  deleted(){
    if(confirm("Bạn có chắc chắn muốn xoá?")){
      this.productService.delete(this.product).subscribe(res=>{
        console.log(res);
        this.router.navigate(["/admin/list-product"]);
      });
    }
  }
}
