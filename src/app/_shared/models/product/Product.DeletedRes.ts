import { NotificationStatus } from "@models/utilities/enums"

export class ProductDeletedRes{
    productId!: string
    message!: string
    success!: NotificationStatus
}