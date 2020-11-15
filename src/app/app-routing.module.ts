import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { QuantityincrementComponent } from './quantityincrement/quantityincrement.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {
    path:'',component:ViewemployeeComponent
  },
  {
    path:'editemployee',component:EditemployeeComponent
  },
  {
   path:'quantityincrement',component:QuantityincrementComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
