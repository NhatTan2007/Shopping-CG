import { NotificationStatus } from "@models/utilities/enums"

export class ProductRestoredRes{
    productId!: string
    message!: string
    success!: NotificationStatus
}