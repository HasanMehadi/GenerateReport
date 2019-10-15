import { Component, OnInit } from '@angular/core';
import {CustomerService} from "./customer.service";
import {saveAs} from "file-saver"

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  customers=[];
  totalElements: any;

  size: number = 10;
  page: number = 0;


  ngOnInit() {
    this.getCustomerPage(0);
  }

  getCustomerPage(pageNumber: any) {

    this.customerService.getAllCustomer(pageNumber, this.size).subscribe((allCustomer) => {
      this.customers = allCustomer.content;
      console.log(this.customers);
      this.totalElements = allCustomer.totalElements;
    })
  }

  pageChangeFire(page: number) {
    this.getCustomerPage(page - 1);
  }

  generateReport(){
    this.customerService.getAllCustomerPDF().subscribe((files)=>{

      console.log(files);

      saveAs(new Blob([files],{type:'application/pdf'}),'Customer')
    });
  }
}
