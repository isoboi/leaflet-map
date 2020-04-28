import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ITree} from '../models';
import {treeData} from '../content';

@Injectable()
export class TreeService {

  constructor() { }

  getTree(): Observable<ITree[]> {
    return of(treeData);
  }
}
