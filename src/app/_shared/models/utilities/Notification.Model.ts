import { NotificationStatus } from "@models/utilities/enums";

export interface Notification{
    message: string
    status: NotificationStatus
}