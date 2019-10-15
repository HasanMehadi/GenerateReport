import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [{
  path: '',
  component: CustomerComponent,
  data: {
    title: 'Customers'
  }
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
