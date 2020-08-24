import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})

export class BlogSectionComponent implements OnInit {

  @Input() section: Entry<any>;
  public bodyHTML;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {

    console.log("SECTION:",this.section.fields);

    let content = this.section.fields.content;
    let options = {
      renderNode: {
        'embedded-asset-block': (node) => {
          let file = node.data.target.fields.file;
          let markup = this.renderMedia(file);
          return markup
        }
      }
    }
    this.bodyHTML = content ? documentToHtmlString(content, options) : 'loading';

  }

  // TODO: make this modular, it's own service or part or ctflApi
  private renderMedia(file): any {

    // Is it an MP4 video?
    if (file.contentType === 'video/mp4') {
      return (
        `<div className='embed-responsive embed-responsive-16by9' style={vidStyle}>
          <video controls>
            <source src={file.url} type='video/mp4'/>
            <p>Your browser doesnt support HTML5 video.</p>
          </video>
        </div>`
      )
    }

    // Is it some kind of image?
    else if (file.contentType === 'image/png' || file.contentType === 'image/jpg' || file.contentType === 'image/gif') {
      console.log(file);
      return (
        `<img class="img-fluid" src=`+file.url+` alt=`+file.fileName+`/>`
      )
    }

    // Oops, what kind of content is it?
    // TODO: Add more content types
    else {
      return (
        `<p>Unknown content type</p>`
      )
    }

  }

}
