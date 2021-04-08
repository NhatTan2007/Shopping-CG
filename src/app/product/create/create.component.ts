import { Component, OnInit } from '@angular/core';
import { ProductCreateReq } from '@app/_shared/models/product/Product.CreateReq';
import { UtilitiesService } from '@app/_shared/services/utilities/utilities.service';
import { ProductService } from "@app/_shared/services/product/product-service.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from "@services/category/category-service.service";
import { CategoryViewModel } from "@models/category/Category.ViewModel";
// import { SharedModule } from "@shared/shared/shared.module";


@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
	categories: CategoryViewModel[] = [];
	formCreate!: FormGroup;
	constructor(
		private route: Router,
		private productSerivce: ProductService,
		private utilitiesService: UtilitiesService,
		private categoryService: CategoryService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.formCreate = this.formBuilder.group({
			productName: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9\' .]")]],
			price: ['', [Validators.required, Validators.min(0)]],
			description: [''],
			quantity: ['', [Validators.min(1)]],
			categoryId: ['', [Validators.required]]
		})
		this.categoryService.getCategories().subscribe(res => this.categories = res);
	}

	createProduct(): void{
		this.productSerivce.createProduct(this.formCreate.value as ProductCreateReq)
			.subscribe(
				res => 
				{
					this.utilitiesService.emitNotification({message: res.message, status: res.success})
					this.route.navigate([""])
				}
			)
	}

}
