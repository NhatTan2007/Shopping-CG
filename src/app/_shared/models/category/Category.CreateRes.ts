import { NotificationStatus } from "@models/utilities/enums";

export class CategoryCreateRes{
    categoryId!: number
    message!: string
    success!: NotificationStatus
}