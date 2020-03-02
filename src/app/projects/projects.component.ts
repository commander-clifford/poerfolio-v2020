import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, share, pairwise, startWith } from 'rxjs/operators';
import { routerTransition } from '../router.animations';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { ProjectsRoutingService } from './projects-routing.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsRoutingService],
  animations: [
    routerTransition
  ]
})

export class ProjectsComponent {

  public isDataAvailable: boolean = false;
  public project: Entry<any>;
  public projectPrev: Entry<any>;
  public projectNext: Entry<any>;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectsRouting: ProjectsRoutingService,
    private contentfulApiService: ContenfulApiService,

  ) {

    let url = router.routerState.snapshot.url;
    let sub = url.lastIndexOf('/');
    let slug = url.substring(sub + 1);

    this.getProject(slug);

  }

  getProject(slug): void {
    console.log('-- go get',slug);
    this.contentfulApiService.getProjectBySlug(slug)
      .then(project => this.project = project)
      .then(project => console.log('GOT',this.project))
      .then(project => console.log('SGOT',this.project.fields.displayOrder))
      .then(() => this.getPrevProject(this.project.fields.displayOrder-1))
      .then(() => this.getNextProject(this.project.fields.displayOrder+1))
      .then(() => this.loadPage())
  }

  getPrevProject(id): void {
    console.log('getPrevProject',id);
    this.contentfulApiService.getProjectByOrderId(id)
    .then(projectPrev => this.projectPrev = projectPrev)
    .then(projectPrev => console.log('GOT-',this.projectPrev))

  }

  getNextProject(id): void {
    console.log('getNextProject',id);
    this.contentfulApiService.getProjectByOrderId(id)
    .then(projectNext => this.projectNext = projectNext)
    .then(projectNext => console.log('GOT+',this.projectNext))
  }

  loadPage(){
    setTimeout(function(){
      this.isDataAvailable = true;
    }.bind(this), 400*0);
  }

  ngOnInit(){}

  getState(outlet) {
    let state = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }

}
