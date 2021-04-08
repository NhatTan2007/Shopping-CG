import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductViewModel } from "@models/product/Product.ViewModel";
import { map, tap } from "rxjs/operators";
import { ProductStatus } from "@models/utilities/enums";
import { ProductDeletedRes } from "@models/product/Product.DeletedRes";
import { ProductRestoredRes } from "@models/product/Product.RestoredRes";
import { ProductCreateReq } from "@app/_shared/models/product/Product.CreateReq";
import { ProductCreateRes } from '@app/_shared/models/product/Product.CreateRes';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
	protected API_SERVER = "https://localhost:44368"
	constructor(private httpClient: HttpClient) {  }

	getProducts(): Observable<ProductViewModel[]>{
	return this.httpClient.get("https://localhost:44368/api/Product/gets")
	.pipe(
		map(
			res => (res as ProductViewModel[])
					.map(e => ({...e, isDeleted: e.isDeleted ? ProductStatus.Deleted : ProductStatus.Active}))
			)
		)
	}

	deleteProduct(id: string): Observable<ProductDeletedRes>{
		return this.httpClient.delete(`${this.API_SERVER}/api/Product/delete/` + id)
			.pipe(map(res => res as ProductDeletedRes))
	}

	restoreProduct(id: string): Observable<ProductRestoredRes>{
		return this.httpClient.post(`${this.API_SERVER}/api/Product/restore/` + id, {})
			.pipe(map(res => res as ProductDeletedRes))
	}

	createProduct(newProduct: ProductCreateReq): Observable<ProductCreateRes>{
		return this.httpClient.post(`${this.API_SERVER}/api/Product/create`, newProduct)
			.pipe(map(res => res as ProductCreateRes))
	}
}
