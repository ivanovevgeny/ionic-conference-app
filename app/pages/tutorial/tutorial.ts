import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Добро пожаловать на конференцию!',
        description: 'Компания Sike.Software рада приветствовать Вас на нашей конференции',
        image: 'img/ica-slidebox-img-1.png',
      },
      {
        title: 'Для кого?',
        description: 'Конференция проводится для студентов и всех желающих окунуться в удивительный мир разработки программного обеспечения',
        image: 'img/ica-slidebox-img-2.png',
      },
      {
        title: 'О чем?',
        description: 'Будут затронуты различные темы: от разработки под мобильные ОС до лучших практик в управлении проектами',
        image: 'img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
