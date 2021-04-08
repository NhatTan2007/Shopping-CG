import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "@app/errors/not-found/not-found.component";
import { ManageProductsComponent } from "@app/product/manage-products/manage-products.component";
import { PageLayoutComponent } from "@app/_shared/components/page-layout/page-layout.component";

const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent,
	children:[
				{
					path:"",
					component: ManageProductsComponent
				},
				{
					path: "product",
					loadChildren: () => import("@app/product/product.module").then(p => p.ProductModule)
				},
				{
					path: "category",
					loadChildren: () => import("@app/category/category.module").then(c => c.CategoryModule)
				},
				{
					path: '**',
					component: NotFoundComponent
				}
			]
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
