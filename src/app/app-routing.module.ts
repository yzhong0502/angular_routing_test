import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { ContactComponent } from "./contact/contact.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Product/:id', component: ProductDetailComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Back' , redirectTo: 'Product', pathMatch: 'full'},
  {path: '**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
