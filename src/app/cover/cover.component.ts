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
  Elastic
} from "gsap/all";


@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})

export class CoverComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    let sy = window.scrollY;
    let cH = document.getElementById('cover').clientHeight;
    if(sy>cH){return}
    let p = sy/cH;
    let y = ((cH*p)/1.8);

    const HEADLINE = document.getElementById('headline');
    TweenMax.to(HEADLINE, 0, {
      y: y,
      scale: (1-(p/2.5)),
      ease: Power4.easeInOut
    });
    const SUBHEADLINE = document.getElementById('subheadline');
    TweenMax.to(SUBHEADLINE, 0, {
      y: y/2,
      opacity: (1-(p*4)),
      ease: Power4.easeInOut
    });






    // var scrollLimit = 16*1;
    // if (window.scrollY >= scrollLimit) {
    //   this.router.navigate(['/about']);
    // }
  }

  ngOnInit() {
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

}
