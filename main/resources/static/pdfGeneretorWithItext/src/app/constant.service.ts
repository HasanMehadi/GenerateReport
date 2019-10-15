import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  //SERVER_API =window.location.protocol+"://"+window.location.hostname+":8080/";
  SERVER_API ="http://localhost:8080";
  CUSTOMER_PDF_API="/api/pdf/customers";
  ALL_CUSTOMER_API="/api/pdf/all";

  constructor() { }
}
