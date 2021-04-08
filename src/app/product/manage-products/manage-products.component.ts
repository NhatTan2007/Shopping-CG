import { Component, OnInit } from '@angular/core';
import { ProductViewModel } from "@models/product/Product.ViewModel";
import { ProductService} from "@app/_shared/services/product/product-service.service";
import { UtilitiesService } from "@services/utilities/utilities.service";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
	products: Array<ProductViewModel> = []
	constructor(
		private productService: ProductService,
		private utilitiesService: UtilitiesService
	) { }

	ngOnInit(): void {
		this.getProducts();
	}
	getProducts(): void{
		this.productService.getProducts()
		.subscribe(result => this.products = result);
	}
	deleteProduct(id: string): void{
		this.productService.deleteProduct(id)
		.subscribe(result => 
			{
				this.utilitiesService.emitNotification({message: result.message, status: result.success});
				this.getProducts();
			})
	}
	restoreProduct(id: string): void{
		this.productService.restoreProduct(id)
		.subscribe(result => 
			{
				this.utilitiesService.emitNotification({message: result.message, status: result.success});
				this.getProducts();
			})
	}
}
