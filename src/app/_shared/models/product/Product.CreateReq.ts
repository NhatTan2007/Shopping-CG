import { DecimalPipe } from "@angular/common"

export class ProductCreateReq{
    productName!: string
    categoryId!: number
    price!: number | DecimalPipe
    description?: string
    quantity!: number
}