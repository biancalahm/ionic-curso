import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed.page';

import { Router } from '@angular/router';


@Component({
  templateUrl: 'intro.page.html'
})
export class IntroPage {
  
  constructor(private router: Router) { }  

  slides = [
    {
      image: "assets/img/slide1.png",
    },
    {
      image: "assets/img/slide2.png",
    },
    {
      image: "assets/img/slide3.png",
    }
  ];
 public goToTabsPage(){
  this.router.navigateByUrl('/feed');
  }
}
