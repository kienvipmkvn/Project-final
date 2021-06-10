import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { BrandModel } from "../models/brand.model";

@Injectable({
  providedIn:'root'
})
export class BrandService{
  constructor(private http: HttpClient){}

  getAllBrand(){
    const url = environment.baseUrl + environment.common.brand.read;
    return this.http.get<{data:BrandModel[]}>(url)
    .pipe(map(res=>{
      return {data: res.data.reverse()};
    }));
  }
}