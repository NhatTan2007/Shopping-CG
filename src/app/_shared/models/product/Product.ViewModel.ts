import { ProductStatus } from "@models/utilities/enums"

export class ProductViewModel{
    productId!: string
    productName!: string
    price!: number
    categoryId!: number
    description!: string
    quantity!: number
    isDeleted!: ProductStatus
}

