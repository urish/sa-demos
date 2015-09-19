///<reference path="./lib/angular2.d.ts"/>

import {Component, View, bootstrap, FORM_DIRECTIVES, ViewQuery, QueryList} from 'angular2/angular2';

import {SaNotificationsComponent} from './saNotifications.ts';

// Defines a new component <hello-world>

@Component({
	selector: 'notifications-demo'
})
@View({
	template: `
		<label>Message: <input [(ng-model)]="message" type="text" placeholder="Message to display"></label>
    	<button (click)="showNotification()">Show Notification</button>
    	<sa-notifications></sa-notifications>
    `,
	directives: [FORM_DIRECTIVES, SaNotificationsComponent]
})
class NotificationsDemoApp {
	message:string = 'You are awesome!';
	notifiers:QueryList<SaNotificationsComponent>;

	constructor(@ViewQuery(SaNotificationsComponent) notifiers:QueryList<SaNotificationsComponent>) {
		this.notifiers = notifiers;
	}

	showNotification() {
		this.notifiers.first.notify(this.message);
	}
}

bootstrap(NotificationsDemoApp);
