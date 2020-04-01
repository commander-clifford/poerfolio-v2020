import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import $ from "jquery";
import {
  Draggable,
  TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  Linear,
  Power1,
  Power2,
  Power3,
  Power4,
  Elastic,
  Back,
} from "gsap/all";

import SplitTextJS from 'split-text-js';




@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

export class CoverComponent implements OnInit {

  private spicy = "this is my text";
  private mySplitText:any;

  constructor(
    private location: Location,
    public router: Router,
  ) {}

  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    // let sy = window.scrollY;
    // let cH = document.getElementById('cover').clientHeight;
    // if(sy>cH){return}
    // let p = sy/cH;
    // let y = ((cH*p)/1.8);

    // const HEADLINE = document.getElementById('headline');
    // TweenMax.to(HEADLINE, 0, {
    //   y: y,
    //   scale: (1-(p/2.5)),
    //   ease: Power4.easeInOut
    // });
    // const SUBHEADLINE = document.getElementById('subheadline');
    // TweenMax.to(SUBHEADLINE, 0, {
    //   y: y/2,
    //   opacity: (1-(p*4)),
    //   ease: Power4.easeInOut
    // });






    // var scrollLimit = 16*1;
    // if (window.scrollY >= scrollLimit) {
    //   this.router.navigate(['/about']);
    // }
  }

  ngOnInit() {

    let headline = document.getElementById('cover__headline');
    this.mySplitText = new SplitTextJS(headline);

    console.log('000000000',this.mySplitText);
    console.log('000000000',this.mySplitText.chars);

    this.animation();


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



  }

  ngAfterViewInit() {
  //   this.mySplitText = new SplitText(this.spicy, {type:"words"});
  //   console.log('000000000',this.spicy)
    // @ViewChild('text', {static: true, read: NgGxSplitTextDirective}) text: NgGxSplitTextDirective;
    // @ViewChild('text', {static: true, read: NgGxSplitTextDirective}) text: NgGxSplitTextDirective;
    // @ViewChild('text', { static: true, read: NgGxSplitTextDirective }) text: NgGxSplitTextDirective;


    // console.log('this.text',this.text);
    // console.log('this.text.words',this.text.words);
  }

  animation() {

    var tl = new TimelineMax({
      delay: 0.8,
    });

    // tl.to('p.fade-in', 0, {visibility: 'hidden', opacity: 0})


    tl.from('.cover__greeting', 0.1, {
      opacity: 0,
    });

    tl.staggerFromTo(this.mySplitText.chars, 0.5,
      {
        opacity: 0,
        bottom: -80,
        ease: Back.easeOut.config(1.7),
      },
      {
        opacity: 1,
        bottom: 0,
        ease: Back.easeOut.config(1.7),
      },
      0.05
    );

    tl.staggerFrom('.cover__deets', 0.5, {
      opacity: 0,
    }, 0.5);

  }

}
