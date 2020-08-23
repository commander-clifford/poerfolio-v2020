import { Component, OnInit, HostListener , ViewEncapsulation} from '@angular/core';
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

// Contentful Dependancies
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CoverComponent implements OnInit {

  public isDataAvailable: boolean = false; // logic to know if content is available yet
  public cover_cda: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects
  private spicy = "this is my text";
  private mySplitText:any;
  public briefHTML;

  constructor(
    private location: Location,
    public router: Router,
    public contentfulApiService: ContenfulApiService,
  ) {}

  getCover(): void {

    // the contenful way
    this.contentfulApiService.getCover()
      .then(cover_cda => this.cover_cda = cover_cda[0])
      .then(cover_cda => console.log('** Cover Content:',cover_cda))
      .then(() => this.loadPage());;
  }

  loadPage(){
    this.isDataAvailable = true;
    setTimeout(function(){


      this.animation();


    }.bind(this),40);
  }

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

    this.getCover();




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

    let content = this.cover_cda.fields.brief;
    let options = {
      renderNode: {
        'embedded-asset-block': (node) => {
          let file = node.data.target.fields.file;
          let markup = this.renderMedia(file);
          return markup
        }
      }
    }
    this.briefHTML = content ? documentToHtmlString(content, options) : 'loading';



    let headline = document.getElementById('cover__headline');

    this.mySplitText = new SplitTextJS(headline);

    console.log('Split Text Animation',this.mySplitText);
    console.log('Split Text Animation',this.mySplitText.chars);

    var tl = new TimelineMax({
      delay: 0.8,
    });

    // tl.to('p.fade-in', 0, {visibility: 'hidden', opacity: 0})

    tl.to('.cover__intro', 0.1, {
      opacity: 1,
    });


    tl.from('.cover__greeting', 0.1, {
      opacity: 0,
    });

    tl.staggerFromTo(this.mySplitText.chars, 0.5,
      {
        opacity: 0,
        top: -20,
        scale: 1.2,
        ease: Back.easeOut.config(1.8),
      },
      {
        opacity: 1,
        top: 0,
        scale: 1,
        ease: Back.easeOut.config(1.8),
      },
      0.05
    );

    tl.staggerFrom('.cover__deets', 0.5, {
      opacity: 0,
    }, 0.5);

  }

}
