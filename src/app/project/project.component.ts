import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ProjectsRoutingService } from '../projects/projects-routing.service';
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  // project: Project;
  // projectService;
  // nextProjectId;
  // prevProjectId;

  public isDataAvailable: boolean = false;
  public project: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects
  private projectPrev: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects
  private projectNext: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects

  constructor(

    private route: ActivatedRoute,
    // private projectService: ProjectService,
    private projectsRouting: ProjectsRoutingService,
    private contentfulApiService: ContenfulApiService,

  ) {

    const { slug } = route.snapshot.params;
    console.log('Define ID',slug);

    // this.project = projectService.getProject(id);
    // console.log('project.component loading',this.project.name);

    // projectsRouting.projectChange$.next(+id);

    // this.nextProjectId = id -1;
    // this.prevProjectId = id +1;

    this.getProject(slug);



  }

  getProject(slug): void {
    console.log('-- go get',slug);
    this.contentfulApiService.getProjectBySlug(slug)
      .then(project => this.project = project)
      .then(project => console.log('GOT',this.project))
      .then(project => console.log('GOT',this.project.fields.displayOrder))
      // .then(() => this.getPrevProject(this.project.fields.displayOrder-1))
      // .then(() => this.getNextProject(this.project.fields.displayOrder+1))
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
    }.bind(this), 400*2);
  }


}



//
//
//
//
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
// import { slideInOutAnimation } from '../router.animations';
// import { ProjectService }  from '../project.service';
// import { Project } from '../project';
// import { Router } from '@angular/router';
//
//
// @Component({
//   selector: 'app-project',
//   animations: [ slideInOutAnimation ],
//   templateUrl: './project.component.html',
//   styleUrls: ['./project.component.scss']
// })
//
// export class ProjectComponent implements OnInit {
//
//   project: Project;
//   projects: Project[];
//   nextProjectId: number;
//   prevProjectId: number;
//   mainState;
//
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private projectService: ProjectService,
//     private location: Location
//   ) {}
//
//   ngOnInit(): void {
//     this.getProject();
//     this.getProjects();
//
//     this.mainState = 'next';
//     var delayAnim = setTimeout(() => {
//       this.mainState = 'new';
//     },3000);
//
//   }
//
//   private navigateProjects(dir): void {
//     if(dir === 'next'){
//       // alert('next');
//       // this.mainState = 'next';
//       this.router.navigate(["/projects/" + this.nextProjectId ]);
//     } else {
//       // alert('prev');
//       // this.mainState = 'prev';
//       this.router.navigate(["/projects/" + this.prevProjectId ]);
//     }
//   }
//
//
//
//   getProject(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.projectService.getProject(id)
//       .subscribe(project => this.project = project);
//
//     this.nextProjectId = id -1;
//     this.prevProjectId = id +1;
//
//   }
//
//   getProjects(): void {
//     this.projectService.getProjects()
//         .subscribe(projects => this.projects = projects);
//     console.log('PROJECTS LENGTH',this.projects.length);
//   }
//
//   goBack(): void {
//     this.location.back();
//   }
//
// }
