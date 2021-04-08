import { Injectable } from '@angular/core';
import { Notification } from "@models/utilities/Notification.Model";
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
	notificationSubject: Subject<Notification> = new Subject<Notification>();
	constructor() { }
	get notification$(): Observable<Notification>{
		return this.notificationSubject.asObservable();
	}

	emitNotification(notification: Notification): void{
		this.notificationSubject.next(notification);
	}

}
