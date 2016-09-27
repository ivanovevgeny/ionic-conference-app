import { Component } from '@angular/core';

import { PopoverController, ViewController, NavController } from 'ionic-angular';

import { MapPage } from '../map/map';


@Component({
    template: `
    <ion-list>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
class PopoverPage {

    constructor(
        public viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}


@Component({
    templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
    conferenceData: any;

    constructor(
        public popoverCtrl: PopoverController,
        public navCtrl: NavController) {
        this.conferenceData = {
            place: 'МГТУ, аудитория 282',
            date: '15.11.2016 10:00'
        };
    }

    openMap() {
        this.navCtrl.push(MapPage);
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    }
}
