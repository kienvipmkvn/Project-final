import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  login(username, password) {
    const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
    const url = environment.login;

    return this.http.post(
      url,
      {
        Phone: username,
        Password: password,
      },httpOptions
    )
    .pipe(tap((res:any)=>{
      if(res && res.result === 1){
        this.isAuth.next(true);
      }
    }))
  }
}
