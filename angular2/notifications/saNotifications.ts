import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'sa-notifications',
})
@View({
	template: `
		<div *ng-if="visible" [style.opacity]="opacity" class="sa-notifications">
			{{message}}
		</div>
    `,
	styleUrls: ['saNotifications.css'],
	directives: [CORE_DIRECTIVES]
})
export class SaNotificationsComponent {
	message:string;
	opacity:number;
	visible:boolean = false;
	fadeTimer:number;

	notify(message) {
		this.reset();
		this.message = message;
		this.visible = true;
		this.fadeTimer = setInterval(this.fade.bind(this), 100);
	}

	fade() {
		this.opacity -= 0.1;
		if (this.opacity <= 0) {
			this.reset();
		}
	}

	reset() {
		this.visible = false;
		this.message = '';
		this.opacity = 1.0;
		if (this.fadeTimer) {
			clearInterval(this.fadeTimer);
			this.fadeTimer = null;
		}
	}
}
