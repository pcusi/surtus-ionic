/* tslint:disable:quotemark no-trailing-whitespace */
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnboardingPage implements OnInit {
  currentIndex = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor(
  ) { }

  ngOnInit() {

  }

  async getIndex(e) {
    await this.slides.getActiveIndex().then((index: number) => {

      const span = document.getElementsByClassName('swiper-pagination-bullet');
      const item = span.item(1);
      const swiper = document.getElementsByClassName('swiper-pagination');
      const sw = swiper.item(0);

      this.currentIndex = index;

      if (this.currentIndex === 1) {
        item.setAttribute('style', 'background: white; transition: 7000 ms;');
      } else {
        item.setAttribute('style', '--background: none;');
      }

      if (this.currentIndex === 2) {

        sw.setAttribute('style', 'display: none');
      } else {
        sw.setAttribute('style', 'display: block');
      }

    });
  }

}
