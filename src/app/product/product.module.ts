import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CreateComponent } from './create/create.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
// import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
      CreateComponent,
      ManageProductsComponent
    ],
    imports: [
      CommonModule,
      ProductRoutingModule,
      // MatFormFieldModule,
      ReactiveFormsModule
    ]
})
export class ProductModule { }
