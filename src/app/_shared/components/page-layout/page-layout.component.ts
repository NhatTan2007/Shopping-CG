import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '@app/_shared/services/utilities/utilities.service';
import { Notification } from "@models/utilities/Notification.Model";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  notification?: Notification | null;
	opacity = "opacity: 0;"
	constructor(private utilitiesService: UtilitiesService){}

	ngOnInit(){
		this.utilitiesService.notification$.subscribe(noti => {
			this.notification = noti
			this.opacity = "opacity: 1;";
			setTimeout(() => {
				this.opacity = "opacity: 0;";
				setTimeout(() => {this.notification = null;}, 1 * 1000);
			}, 3 * 1000);
		})
	}

}
