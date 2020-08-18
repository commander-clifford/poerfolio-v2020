import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit { 

  public projects_cda: Entry<any>[] = []; // define a private class property to the class which defines that this component will include a collection of several projects
  private projects: object;
  private selectedProject: Project;
  public isDataAvailable: boolean = false;

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    private projectService: ProjectService,
    private contentfulApiService: ContenfulApiService,
  ) {
    this.getProjects();
  }

  ngOnInit() {}

  getProjects(): void {

    // the fake way
    this.projects = this.projectService.getProjects();

    // the contenful way
    this.contentfulApiService.getAllProjects()
      .then(projects_cda => this.projects_cda = projects_cda)
      .then(projects_cda => console.log('Portfolio pieces',projects_cda))
      .then(() => this.loadPage());
  }

  loadPage(){

    setTimeout(function(){
      this.isDataAvailable = true;
    }.bind(this), 400*4);

  }

}
