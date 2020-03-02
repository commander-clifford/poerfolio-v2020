import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProjectsRoutingService {
  projectChange$ = new BehaviorSubject<number>(0);
}
