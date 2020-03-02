import {trigger, animate, style, group, query as q, transition, stagger,} from '@angular/animations';
import { query } from './router.animationsQuery.js';

// export function query = ( s,a,o ={optional:true} ) => q(s,a,o);

export const routerTransition = trigger('routerTransition', [

  transition('home => resume', [
    query(':enter', style({ position: 'fixed', width:'100%', left: 0, right: 0, }),{ optional: true }),
    query(':leave', style({ position: 'fixed', width:'100%', left: 0, right: 0, }),{ optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('400ms 0ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('400ms 0ms ease-in-out', style({ opacity: 0, transform: 'translateX(20%)' }))
      ], { optional: true }),
    ])
  ]),

  transition('* => home', [

      group([
        // query(':leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
        query(':enter', style({ opacity: 1, position: 'fixed', width:'100%' }),{ optional: true }),
        query(':enter .ara__cover-headline', style({ opacity: 1, transform: 'translateY(40px) scale(1)' }),{ optional: true }),
        query(':enter .ara__fall-in', style({ opacity: 0, transform: 'translateY(-100px) scale(0.4)' }),{ optional: true }),
        query(':enter .ara__fade-in', style({ opacity: 0 }),{ optional: true }),
        query(':enter .main', style({ opacity: 0, position: 'absolute', width: '100%', transform: 'translateY(50%)' }),{ optional: true }),
      ]),

      // query(':leave', [
      //   animate('200ms cubic-bezier(0,0,.5,1)',
      //     style({ opacity: 0 })
      //   )
      // ], { optional: true }),

      group([

        // query(':enter .main', [
        //   style({}),
        //   animate('800ms 0ms cubic-bezier(0.25,-0.6,0.6,1.6)',
        //     style({ transform: 'translateY(0%)' })
        //   )
        // ], { optional: true }),

        query(':enter', [
          animate('1800ms 00ms cubic-bezier(0,0,.5,1)',
            style({ opacity: 1 })
          )
        ], { optional: true }),

        query(':enter .ara__cover-headline', stagger(100, [
          animate('800ms 800ms cubic-bezier(0,0,.5,1)',
            style({
              opacity: 1,
            })),
          ]), { optional: true }),

        query(':enter .ara__cover-headline', stagger(100, [
          animate('800ms 800ms cubic-bezier(0.85,3,0.5,-0.5)',
            style({
              transform: 'translateY(0px) scale(1)',
            })),
          ]), { optional: true }),

        query(':enter .ara__fall-in', stagger(100, [
          animate('250ms 1300ms cubic-bezier(0,0,.5,1)',
            style({
              transform: 'translateY(0px) scale(1)',
              opacity: 1,
            })),
          ]), { optional: true }),

      ]),

      query(':enter .ara__fade-in', stagger(100, [
        animate('800ms 00ms cubic-bezier(0,0,.5,1)',
          style({
            opacity: 1,
          })),
        ]), { optional: true }),

      query(':enter', [
        style({ position: 'static' }),
      ], { optional: true }),

    ]),

  transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0.9, transform: 'translateY(12px)' }),
          animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('400ms ease-in-out', style({ opacity: 0.4, transform: 'translateY(-12px)' }))
        ], { optional: true }),
      ])
    ]),

  transition('projects => about', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-20%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(20%)' }))
      ], { optional: true }),
    ])
  ]),

  transition('project => projects', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-20%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(20%)' }))
      ], { optional: true }),
    ])
  ]),

////////
  // transition('project <=> project', [
  //   query(':enter, :leave', style({ position: 'fixed', width:'100%' })
  //     , { optional: true }),
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(-20%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(20%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),

  // transition('* => project', [
  //   query(':enter, :leave', style({ position: 'fixed', width:'100%' })
  //     , { optional: true }),
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(-20%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(20%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),

  /**

  transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(20%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-20%)' }))
        ], { optional: true }),
      ])
    ]),

    */

]);

export const slideInOutAnimation = trigger('slideInOutAnimation', [

  // state('new', style({
    // position: 'absolute',
    // width: '100%'
  // })),

  transition('* => next', [

    // query(':enter, :leave', style({  })
    //   , { optional: true }),

    group([

      query(':leave', [
        style({ transform: 'scale(1)', opacity: 1, transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'scale(0)', opacity: 0, transform: 'translateX(-50%)' }))
      ], { optional: true }),

      query(':enter', [
        style({ transform: 'scale(0)', opacity: 0, transform: 'translateX(50%)' }),
        animate('0.5s ease-in-out', style({ transform: 'scale(1)', opacity: 1, transform: 'translateX(0%)' }))
      ], { optional: true }),

    ])
  ]),

]);
