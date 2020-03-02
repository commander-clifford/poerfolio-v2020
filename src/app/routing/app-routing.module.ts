import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route.reuse';
import { CoverComponent }   from '../cover/cover.component';
import { HomeComponent }   from '../home/home.component';
import { AboutComponent }   from '../about/about.component';
import { ResumeComponent }   from '../resume/resume.component';
import { PortfolioComponent }   from '../portfolio/portfolio.component';
import { ProjectsComponent }   from '../projects/projects.component';
import { ProjectComponent }   from '../project/project.component';

const routes: Routes = [

  // Default to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'resume', component: ResumeComponent, data: { state: 'resume' } },
  { path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio' } },
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' },
      children: [
        { path: '', redirectTo: '/', pathMatch: 'full'},
        { path: ':slug', component: ProjectComponent, data: { state: 'project' } },
      ]
  },


  // { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
