import { NotificationStatus } from "@models/utilities/enums";

export class ProductCreateRes{
    productId!: string
    message!: string
    success!: NotificationStatus
}