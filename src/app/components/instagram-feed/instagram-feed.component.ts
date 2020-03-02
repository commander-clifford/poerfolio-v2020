import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as Instafeed from 'instafeed.js'; // https://www.npmjs.com/package/instafeed.js

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InstagramFeedComponent implements OnInit {

  @Input() sort: string;

  constructor() {}

  ngOnInit() {

    var feed = new Instafeed({
      get: 'user',
      userId: '3530247962',
      clientId: '1c4b30b17e6140078e906c8437ec2eee',
      accessToken: '3530247962.1c4b30b.93182a17404b4aaaaae2f852c2f04086',
      target: 'instagram-feed--'+this.sort,
      sortBy: this.sort,
      limit: 20,
      template: "<a class=\"instagram-feed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\"></a>",
      onSuccess: function() {},
      onError: function(message) { console.log(message); }
    });
    feed.run();

  }

}
