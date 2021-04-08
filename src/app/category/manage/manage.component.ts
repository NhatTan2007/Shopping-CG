import { Component, OnInit } from '@angular/core';
import { CategoryViewModel } from "@models/category/Category.ViewModel";
import { CategoryService } from "@services/category/category-service.service";

@Component({
	selector: 'app-manage',
	templateUrl: './manage.component.html',
	styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
	categories = new Array<CategoryViewModel>()
	constructor(
		private categoryService: CategoryService
	) { }

	ngOnInit(): void {
		this.getCategories();
	}

	getCategories(): void{
		this.categoryService.getCategories()
			.subscribe(res => this.categories = res)
	}

}
