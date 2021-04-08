import { Injectable } from '@angular/core';
import { CategoryViewModel } from "@models/category/Category.ViewModel";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	protected API_SERVER = "https://localhost:44368"
	constructor(
		private httpCilent: HttpClient
	) { }

	getCategories(): Observable<CategoryViewModel[]>{
		return this.httpCilent.get(`${this.API_SERVER}/api/category/gets`)
			.pipe(map(res => res as CategoryViewModel[]))
	}
}
