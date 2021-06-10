import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BrandModel } from 'src/app/models/brand.model';
import { ProductModel } from 'src/app/models/product.model';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  snapshot: ActivatedRouteSnapshot;
  product: ProductModel = new ProductModel();
  brands: BrandModel[] = [];
  isEdit = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private router: Router
  ) {
    this.snapshot = this.route.snapshot;
  }

  ngOnInit(): void {
    if (this.snapshot.params['id']) {
      this.productService
        .getProductById(this.snapshot.params['id'])
        .subscribe((res) => {
          if (res){
            this.product = res;
            this.isEdit = true;
          } 
        });
    }
    else{
      this.isEdit = false;
    }
    this.brandService.getAllBrand().subscribe(res=>{
      this.brands = res.data;
    })
  }

  cancel(){
    if(this.isEdit){
      this.router.navigate(['/admin/view-product', this.product.ID]);
    }
    else this.home();
  }

  save(){
    if(this.isEdit){
      this.productService.edit(this.product).subscribe(res=>{
        this.router.navigate(['admin/list-product']);
      })
    }
    else{
      this.productService.add(this.product).subscribe(res=>{
        this.router.navigate(['admin/list-product']);
      })
    }
  }

  home(){
    this.router.navigate(['admin/list-product']);
  }
}
