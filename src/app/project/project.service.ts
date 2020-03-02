import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from '../api-portfolio';
// import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(
    // private messageService: MessageService
  ) { }

  getProjects(): Project[] {

    // TODO: send the message _after_ fetching the projects
    // this.messageService.add('ProjectService: fetched projects');

    console.log('ProjectService - getProjects - PROJECTS',PROJECTS);

    return PROJECTS;

  }

  getProject(id: number): Project {

    console.log('ProjectService - getProject - PROJECTS',PROJECTS);
    console.log('ProjectService - getProject - PROJECT.ID',id);

    const project = PROJECTS.find(project => project.id == id);

    console.log('ProjectService - getProject - PROJECT',project);

    return project;

    // TODO: send the message _after_ fetching the project
    // this.messageService.add(`ProjectService: fetched project id=${id}`);

  }

}
