import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { NguCarouselConfig } from '@ngu/carousel'; // https://www.npmjs.com/package/@ngu/carousel

@Component({
  selector: 'app-whirligig',
  templateUrl: './whirligig.component.html',
  styleUrls: ['./whirligig.component.scss']
})

export class WhirligigComponent implements OnInit {

  @Input() projects_cda;

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    slide: 1,
    speed: 1200,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    loop: true,
    interval: { timing: 8000 },
    animation: 'lazy',
  };

  constructor() {}

  ngOnInit() {}

}
