import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ManageProductsComponent } from "./manage-products/manage-products.component";

const routes: Routes = [
	{
		path:'',
		component: ManageProductsComponent
	},
	{
		path:'create',
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
