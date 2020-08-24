import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Contentful Dependancies
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public isDataAvailable: boolean = false;
  public blogPosts_cda: Entry<any>[] = []; // define a private class property to the class which defines that this component will include a collection of several projects

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public contentfulApiService: ContenfulApiService,
  ) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {

    this.contentfulApiService.getBlogPosts()
      .then(blogPosts_cda => this.blogPosts_cda = blogPosts_cda)
      .then(blogPosts_cda => console.log('** Blog Posts:',blogPosts_cda))
      .then(() => this.loadPage());

  }

  loadPage(){
    setTimeout(function(){
      this.isDataAvailable = true;
    }.bind(this), 40);
  }

}
