import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {ConstantService} from "../constant.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  headers =new HttpHeaders({'Access-Control-Allow-Origin':'*'});
  constructor(private http: HttpClient, private constantService:ConstantService) { }

  public getAllCustomer(page:any,size:any): Observable<any>{
    return this.http.get(this.constantService.SERVER_API+this.constantService.ALL_CUSTOMER_API, {headers: this.headers,params: {page: page.toString(),size:size.toString()}});

  }

  public getAllCustomerPDF(): Observable<any>{
    return this.http.get(this.constantService.SERVER_API+this.constantService.CUSTOMER_PDF_API,{headers: this.headers,responseType: 'arraybuffer'});

  }
}
