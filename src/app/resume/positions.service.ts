import { Injectable } from '@angular/core';

import { Position } from './position';
import { POSITIONS } from './positions';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor() { }

  getPositions(): Position[] {
    return POSITIONS;
  }

  getPosition(id:number): Position {

    const position = POSITIONS.find(position => position.id == id);
    return position;
  }
}
