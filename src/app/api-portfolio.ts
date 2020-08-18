import { Project } from './project/project';

export const PROJECTS: Project[] = [


  // Blank

  // {
  //   id: 17,
  //   name: 'Template',
  //   thumbnail: {
  //     url: './assets/template--thumbnail.png',
  //     alt: 'thumbnail name',
  //   },
  //   brief: 'This is a project template',
  //   url: 'http://clifford.codes/',
  //   githubUrl: 'https://github.com/commander-clifford/',
  //   codepenUrl: 'https://codepen.io/commander-clifford/',
  //   buttonText: null,
  //   demo: {
  //     url: '',
  //     width: 320,
  //     height: 480,
  //   },
  //   hero: null,
  //   sections: [
  //     {
  //       title: 'Section 1',
  //       img: null,
  //       description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //       list: [
  //         `list item 1`,
  //         `list item 2`,
  //         `list item 3`,
  //         `list item 4`,
  //         `list item 5`,
  //       ],
  //     },
  //     {
  //       title: 'Section 2',
  //       img: {
  //         url: './assets/mobile-device.png',
  //         alt: 'Horizontal Tablet',
  //         width: 375,
  //         height: 764,
  //       },
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //       list: null,
  //
  //     },
  //     {
  //       title: 'Section 3',
  //       img: {
  //         url: './assets/tablet--horz.png',
  //         alt: 'Horizontal Tablet',
  //         width: 1024,
  //         height: 768,
  //       },
  //       description: 'Lorem ipsum dolor sit amet',
  //       list: null,
  //
  //     },
  //     {
  //       title: 'Section 4',
  //       img: null,
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  //       list: null,
  //     },
  //   ],
  //   tile: {
  //     cols: 1,
  //     rows: 3,
  //     color: '#DD0031'
  //   },
  // },

  // Google Search

  {
    id: 16,
    name: '!Doodle Space',
    thumbnail: {
      url: './assets/hp-1.png',
      alt: 'Google homepage prototype',
    },
    brief: '!Exploring the Google Doodle universe',
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/hp.png',
      alt: 'Google homepage prototype',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Overview',
        img: null,
        description: 'While working with the Doodle team, at Google, I helped explore new ideas on how to evolve the Doodle platform.',
        list: null,
      },
      {
        title: 'Prototyping',
        img: {
          url: './assets/hp-1.png',
          alt: 'this is just a prototype',
          width: 375,
          height: null,
        },
        description: 'To help explore and express these ideas, I built a faux Google ecosystem. This includes, but is not limited too, the homepage, the search results page, and gmail. ',
        list: null,
      },
      {
        title: 'Delightful',
        img: {
          url: './assets/google-search-transition.gif',
          alt: 'google-search-transition',
          width: 1024,
          height: null,
        },
        description: 'In this project I was given plenty of creative freedom. These transitions were not a requirement for any of the explorations we ran, but they are certainly delightful.',
        list: [
          `I am not responsible for creating the artwork`,
        ],
      },
      {
        title: 'Summary',
        img: null,
        description: 'I used Angular, Material, GSAP and a pinch of magic to create these experiences.',
        list: null,
      },
    ],
    tile: {
        cols: 2,
        rows: 2,
        color: '#C3002F'
      },
  },

  // Windshield Wipers

  {
    id: 15,
    name: 'Windshield Wipers Game',
    thumbnail: {
      url: './assets/windshield-wipers-hero.png',
      alt: 'Windshield Wipers Game',
    },
    brief: 'Prototyping for playability',
    url: 'http://clifford.codes/windshield-wipers/',
    githubUrl: null,
    codepenUrl: null,
    buttonText:'Play game',
    demo: null,
    // {
    //   url: 'http://clifford.codes/windshield-wipers/',
    //   width: 1024,
    //   height: 768,
    // },
    hero: {

      url: './assets/windshield-wipers-hero2.png',
      alt: 'windshield wipers poster',
      width: 512,
      height: null,
    },
    sections: [
      {
        title: 'Requirements',
        img: null,
        description: `How might we make windshield wipers a game for an upcoming Doodle to celebrate the inventor of windshield wipers.`,
        list: null,
      },
      {
        title: 'Interaction',
        img: {
          url: './assets/wwindicator.gif',
          alt: 'Horizontal Tablet',
          width: 280,
          height: 280,
        },
        description: `How can we encourage the user to sparingly use the windshield wipers. It won't be very fun if the user just continually blasts the spacebar. This is how the power indicator was conceptualized. Too many activations too quickly will drain the power and leave the player momentarily defenseless against the oncoming rain particles.`,
        list: null,
      },
      {
        title: 'Motivators',
        img: {
          url: './assets/windshield-wipers-points.png',
          alt: 'windshield wiper points',
          width: 512,
          height: 369,
        },
        description: 'How might we encourage the player to wait till the last moment to swipe. To increase excitement, the longer the spot is on screen the more the spot is worth.',
        list: null,
      },
      {
        title: 'Iterations',
        img: {
          url: './assets/windshield-wiper-2.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'This was an exercise of prototyping for playability, several ideas were iterated through.',
        list: null,
      },

    ],
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },
  },

  // TurboTax

  {
    id: 14,
    name: 'Intuit TurboTax',
    thumbnail: {
      url: './assets/turbotax__hero.png',
      alt: 'Turbo Tax 2016',
    },
    brief: 'Front-End Development and Design',
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/turbotax__hero.png',
      alt: 'Turbo Tax 2016',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'While contracting with Intuit from 2014-2016 I was on a team responsible for the TurboTax homepage and then on the Design Studio Team as a Prototyper.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'While contracting with Intuit from 2014-2016 I was on a team responsible for the TurboTax homepage and then on the Design Studio Team as a Prototyper.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],

    tile: {
      cols: 3,
      rows: 2,
      color: '#C3002F'
    },




      // ./assets/turbotax__sup-1.png

            //
            // "While contributing as a developer to the marketing team for TurboTax.com I learned a lot about large team agile development and how to use GitFlow on a large scale",
            // "Be sure to ask me about my contributions to the navigation menu in this design.",
            // "Having a natural thirst for design I helped with the UI/UX of a in-house tool called Starboard that took data from our Jira board and our GitHub and presented info about project status and risk from team and individual perspectives.",
            // "But that thirst for design lead to to apply to transfer to the Design Studio at Intuit. In the Design Studio I got to help bring ideas to life in several projects, especially in the 'self employed', 'humanizing', 20 year vision projects.",
            // "Most of my focus went to the Prototyping frame work appropriately dubbed TurboTax Prototyping Platform or TTPF. This was setup with an Angular framework and simulated the entire TurboTax experience end to end. It had an emulated homepage and a Hi-fidelity click though of the app with no real data - just inputs passed between screens.",
            // "Most of this code was considered scrappy, and that was celebrated because scrappy meant quick iterations. The only code in TTPF that was typically strait copy/pasted into production was the animation code written in GSAP. A lot of effort was put into the motion of those animations and our GSAP was robust enough to translate directly to product in most cases.",
            // "It wasnt all code. One story telling exercise quickly became to big for our TTPF. So we used Apple's Keynote to do some really neat animations that emulated things like talking to your car and TV about your finances.",


  },

  // UberEats

  {
    id: 13,
    name: 'Food Pic Automator',
    thumbnail: {
      url: './assets/uber-eats__hero.jpg',
      alt: 'Food Pic Automator',
    },
    brief: 'A front-end image editor for anyone to use.',
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/uber-eats__hero.jpg',
      alt: 'Food Pic Automator',
      width: 320,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 1,
      rows: 2,
      color: '#C3002F'
    },

        // "The goal of this project was to create a solution for restaurant marketers to brand their marketing content a.k.a. 'food pics'",
        // "The solution is a front end tool, built as a widget for the content management system (CMS). A user can upload a single food pic and the system will automatically process 7 images in specific formats of size width and logo/assets overlay.",
        // "The system automatically centered and zoomed the images based on common needs, but the user was also empowered to customize the pan/zoom: similar to, but different from, a FaceBook avatar editor when an overlay is applied. Once the solution was adapted to a CMS the output configuration could be fully customized with new assets and sizes. The output of the system was downloadable as a group zip file or individual JPG/PNG"

  },

  // Slider

  {
    id: 12,
    name: 'Uber Slider',
    thumbnail: {
      url: './assets/uber-slider__hero.png',
      alt: 'Uber Slider',
    },
    brief: 'A skills assessment in design and engineering',
    url: 'http://clifford.codes/uber-slider/',
    githubUrl: 'https://github.com/commander-clifford/uber_slider_test',
    codepenUrl: null,
    buttonText: null,
    demo: {
      url: 'http://clifford.codes/uber_slider/',
      width: 360,
      height: 480,
    },
    hero: null,
    sections: [
      {
        title: 'Requirements',
        img: null,
        description: 'Translate a Framer motion design composition into a deliverable asset.',
        list: [
          `Render animation/motion as closely as possible`,
          `Use React framework`,
          `Build as a reusable component`,
          `Build mobile first`,
          `Should swipe able interactions and keyboard activation`
        ],
      },
      {
        title: 'Mobile First',
        img: {
          url: './assets/uber-slider-mobile.png',
          alt: 'Tablet',
          width: 375,
          height: 764,
        },
        description: 'The design comp was delivered as a mobile layout',
        list: null,
      },
      {
        title: 'Tablet',
        img: {
          url: './assets/uber-slider-tablet-horz.png',
          alt: 'Tablet',
          width: 1024,
          height: 715,
        },
        description: 'Tablet layout interpretation',
        list: null,
      },
      {
        title: 'Notes',
        img: null,
        description: null,
        list: [
          `Designed for full screen`,
          `The motion in the demo above is skewed because it's calculating the entire window width`,
          `This could be updated to calculate the parent container instead`,
        ],
      },
    ],
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    },
  },

  // Music Browser

  {
    id: 11,
    name: 'Music Browser',
    thumbnail: {
      url: './assets/template--thumbnail.png',
      alt: 'thumbnail name',
    },
    brief: 'A skills assessment in responsive and fluid web design',
    url: 'http://clifford.codes/music-browser/',
    githubUrl: 'https://github.com/commander-clifford/music_browser',
    codepenUrl: null,
    buttonText: null,
    demo: {
      url: 'http://clifford.codes/music-browser/',
      width: 1024,
      height: 768,
    },
    hero: null,
    sections: [
      {
        title: 'Requirements',
        img: null,
        list: [
          `No libraries, frameworks, or plugins`,
          `No bootstrap or foundation grids`,
          `Use .scss precompiler`,
          `Use JS to build function for changing viewports`,
          `Completely fluid and responsive`,
        ],
        description: 'Translate a PSD design comp into a screen responsive experience.',
      },
      {
        title: 'Mobile',
        img: {
          url: './assets/music-browser__mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        list: null,
        description: 'Nearly pixel perfect render of design at this size.',
      },
      {
        title: 'Tablet',
        img: {
          url: './assets/music-browser__ipad-device.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        list: null,
        description: '',
      },
      {
        title: 'Horizontal Tablet',
        img: {
          url: './assets/music-browser__ipad-device--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 715,
        },
        list: null,
        description: 'The visual design compositions were delivered in full desktop and mobile, it was up to me to translate for everything in between',
      },
      {
        title: 'Full Desktop',
        img: {
          url: './assets/music-browser__full.png',
          alt: 'Horizontal Tablet',
          width: 1366,
          height: 768,
        },
        list: null,
        description: 'The full desktop version matched the PSD nearly exactly',
      },
    ],
    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },
  },

  // Simon Says

  {
    // './assets/simon-says__hero.gif',

    id: 10,
    name: 'Simon Says',
    thumbnail: {
      url: './assets/simon-says__hero.gif',
      alt: 'alt',
    },
    brief: 'This, for fun, project\'s goal was to emulate a classic electronic game that would be easily recognizable and easy to play. This game was mostly built in 2015 while passing the time donating blood and platelets.',
    url: 'http://clifford.codes/simon-says/',
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: {
      url: 'http://clifford.codes/simon-says/',
      width: 320,
      height: 500,
    },
    hero: null,
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],

        // 'The majority of this project is vanilla Javascript and jQuery with some CSS3 visuals.',
        // 'Like most of my side projects: no image pixels were used to create these visuals.',

    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },
  },

  // Fundraisr

  {
    id: 9,
    name: 'Fundraisr',
    thumbnail: {
      url: './assets/fundraisr__hero.jpg',
      alt: 'Fundraisr',
    },
    brief: "Fundraisr, or 'Fund Raiser',",
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/fundraisr__hero.jpg',
      alt: 'Google homepage prototype',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 3,
      rows: 3,
      color: '#DD0031'
    },

    // "Fundraisr is a product of a small start up company, CMSCODE, aimed at revolutionizing the non-profit donations industry from with-in. ",
    // "My role in this project has been creating a marketing front door for the product, the product administrator's user work-flow, and a template system for device responsive and user friendly donation forms."

    // './assets/fundraisr__sup-1.png',
    // './assets/fundraisr__sup-2.png',

  },

  // Responsive Forms

  {
    id: 8,
    name: 'Responsive Forms',
    thumbnail: {
      url: './assets/donationform__hero.png',
      alt: 'Responsive Forms',
    },
    brief: "Retrofitting donation forms to fit on mobile screens.",
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/donationform__hero.png',
      alt: 'Responsive Forms',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 2,
      rows: 3,
      color: '#DD0031',
    }
  },

  // Parallax Portfolio

  {
    id: 7,
    name: 'Parallax Microsite',
    thumbnail: {
      url: './assets/parallax__hero.png',
      alt: 'Parallax Microsite',
    },
    brief: 'A Web Design Template with parallax backgrounds, custom photography, and some use of cool CSS',
    url: "http://clifford.codes/microsite/",
    githubUrl: null,
    codepenUrl: null,
    buttonText:'Visit live site',
    demo: {
      url: "http://clifford.codes/microsite/",
      width: 1024,
      height: 768,
    },
    hero: null,
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],

    tile: {
      cols: 1,
      rows: 3,
      color: '#DD0031'
    },

  // "This was a fun project I did on the side in school. I was really excited about parallax when I learned how to make it work, I think this was my best mix of using it very heavily without totally over doing it.",
  // "This project is mostly jQuery/CSS3/HTML5",

  },

  // Lights Out

  {
    id: 6,
    name: 'Lights Out',
    thumbnail: {
      url: './assets/lightsout__hero.png',
      alt: 'Lights Out',
    },
    brief: 'The final project in intro to Javascript for Designers',
    url: 'http://clifford.codes/lights-out/',
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: {
      url: 'http://clifford.codes/lights-out/',
      width: '320',
      height: '480',
    },
    hero: null,
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 1,
      rows: 3,
      color: '#C3002F'
    },

    // './assets/lightsout__sup-1.jpg',
    // './assets/lightsout__sup-2.jpg',
    // './assets/lightsout__sup-3.png',
    // "Press the start button and try to turn off all the lights - every tap toggles itself and those adjacent.",
    // "Almost the entire class was focused on the final project: which was to create a game using Javascript. I choose to emulate a classic electronic game. I tried to stay true to the original design - hence the power button - but added a few improvements.",
    // "This was my very first javascript endeavor, but the use of CSS3 really steal the show. The visuals are 100% CSS3 gradients, shadows, and other tricks."

  },

  // Starboard

  {
    id: 5,
    name: 'Starboard',
    thumbnail: {
      url: './assets/starboard__hero.png',
      alt: 'Starboard',
    },
    brief: "in-house developer tool",
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/starboard__hero.png',
      alt: 'Starboard',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 2,
      rows: 2,
      color: '#C3002F'
    },
    // "By developers for developers is the common theme amongst in-house developer tools. With this project I worked with the Source Control Manager on out team to layout user workflows and theme.",
  },

  // Bike Genre Illustrations

  {
    id: 4,
    name: 'Bike Genre Illustrations',
    thumbnail: {
      url: './assets/bike_bmx.png',
      alt: 'Bike Genre Illustrations',
    },
    brief: 'Illustrations of the different Mountain Bike Genres',
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/bike_bmx.png',
      alt: 'Bike Genre Illustrations',
      width: 256,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    },




        // "I love working in illustrator, especially abstracting objects into their simplest form. In this project I blended my love of mountain biking with my love of vector art and made these illustrations to suggest the differences between the genres.",
        // "Each bike has it's own unique characteristics to set it apart from it's very similar neighbor. 'All Mountain', 'Bicycle MotoCross', 'Down Hill', 'Free Ride' and 'Cross Country' are all very similar disciplines from afar - but up close they are quite different"
        // './assets/bike_am.png',
        // './assets/bike_bmx.png',
        // './assets/bike_dh.png',
        // './assets/bike_fr.png',
        // './assets/bike_xc.png',



  },

  // Morphing Icons

  {
    id: 3,
    name: 'Morphing Icons',
    thumbnail: {
      url: './assets/morph__hero.png',
      alt: 'Morphing Icons',
    },
    brief: 'Just how far can we go with CSS3?',
    url: null,
    githubUrl: null,
    codepenUrl: 'https://codepen.io/commander-clifford/pen/XXXGWB',
    buttonText: null,
    demo: {
      url: '//codepen.io/commander-clifford/embed/XXXGWB/?height=400&theme-id=29267&default-tab=result"',
      width: 480,
      height: 400,
    },
    hero: null,
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 1,
      rows: 2,
      color: '#DD0031'
    },

    //
    // "I love changing something simple and boring into something simple and delightful! This is the inspiration that lead to the 2016 TurboTax website menu solution",
    // "Click at your hearts desire 😇",
    // "Check out more on my CSS3 collection at <a href='https://codepen.io/collection/AYygQO/' target='_blank'>Codepen.io</>",
  },

  // Style Tile

  {
    id: 2,
    name: 'Style Tile',
    thumbnail: {
      url: './assets/styletile__hero.jpg',
      alt: 'Style Tile',
    },
    brief: 'Web design and dev for a tile company',
    url: 'http://clifford.codes/style-tile/',
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/styletile__hero.jpg',
      alt: 'Style Tile',
      width: 680,
      height: null,
    },
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },

    // "To help support a tile installation company I created a website and shot a video.",
    // "The owner only wanted the ability to update photos - nothing more or less. The simplified solution was accomplished with PHP to mirror a directory and search for valid image files to load into the experience.",
    // "Note the large amount of slide show images on the home page carousel. It was by request that this not be limited."

  },

  // Loading Indicators

  {
    id: 1,
    name: 'Loading Indicators',
    thumbnail: {
      url: './assets/loading-indicators__hero.png',
      alt: 'Loading Indicators',
    },
    brief: 'So much fun with CSS3',
    url: null,
    githubUrl: null,
    codepenUrl: '//codepen.io/commander-clifford/pen/yJKRJz/',
    buttonText: null,
    demo: {
      url: '//codepen.io/commander-clifford/embed/yJKRJz/?height=480&theme-id=29267&default-tab=result',
      width: 480,
      height: 400,
    },
    hero: null,
    sections: [
      {
        title: 'Section 1',
        img: null,
        description: 'Description of project Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
          `list item 1`,
          `list item 2`,
          `list item 3`,
          `list item 4`,
          `list item 5`,
        ],
      },
      {
        title: 'Section 2',
        img: {
          url: './assets/mobile-device.png',
          alt: 'Horizontal Tablet',
          width: 375,
          height: 764,
        },
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        list: null,

      },
      {
        title: 'Section 3',
        img: {
          url: './assets/tablet--horz.png',
          alt: 'Horizontal Tablet',
          width: 1024,
          height: 768,
        },
        description: 'Lorem ipsum dolor sit amet',
        list: null,

      },
      {
        title: 'Section 4',
        img: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        list: null,
      },
    ],
    tile: {
      cols: 2,
      rows: 3,
      color: '#DD0031'
    },

    // "These lightweight CSS loaders are as delightful to make as they are to watch.",
    // "Check out more on my CSS3 collection at <a href='https://codepen.io/collection/AYygQO/' target='_blank'>Codepen.io</>"

  },

  // IBM

  {
    id: 0,
    name: 'An IBM Project',
    thumbnail: {
      url: './assets/logistics__hero.png',
      alt: 'Military Logistics Landing Page',
    },
    brief: 'A landing page, or \'Portal Page\', for Military logistics tools ',
    url: null,
    githubUrl: null,
    codepenUrl: null,
    buttonText: null,
    demo: null,
    hero: {
      url: './assets/logistics__hero.png',
      alt: 'Army Logistics Prototyping',
      width: 640,
      height: null,
    },
    sections: [
      {
        title: 'Overview',
        img: null,
        description: 'While working with IBM on two Military logistics projects I had influence on several aspects of design and development. ',
        list: null,
      },
      {
        title: 'Design',
        // img: {
        //   url: './assets/mobile-device.png',
        //   alt: 'Horizontal Tablet',
        //   width: 375,
        //   height: 764,
        // },
        description: 'In this project I took a page that had one row of visually identical buttons and made it more intuitive. The first and most obvious modification was to break the utility functions out into their own utility navigation bar to symbolize their difference from the application navigation options.',
        list: null,

      },
      {
        title: 'Develop',
        // img: {
        //   url: './assets/tablet--horz.png',
        //   alt: 'Horizontal Tablet',
        //   width: 1024,
        //   height: 768,
        // },
        description: '',
        list: null,

      },
      // {
      //   title: 'Section 4',
      //   img: null,
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      //   list: null,
      // },
    ],
    tile: {
      cols: 2,
      rows: 2,
      color: '#DD0031'
    },

    // and a simple low-fi prototype built from a projects functional requirements
    // "This is a prototype built for a logistics widget",
    // "While working with IBM on two Military logistics projects I had influence on several aspects of design and development. In this project I took a page that had one row of visually identical buttons and made it more intuitive. The first and most obvious modification was to break the utility functions out into their own utility navigation bar to symbolize their difference from the application navigation options."
    // './assets/logistics__sup-1.png',

  },
];
