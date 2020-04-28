import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {LatLng} from 'leaflet';
import {ILatLng} from '../models';

@Injectable()
export class MapService {

  markers$ = new Subject<ILatLng[]>();
  deletedMarkers$ = new Subject<LatLng[]>();
  deletedCoordinate$ = new Subject<ILatLng>();

  constructor() { }
}
