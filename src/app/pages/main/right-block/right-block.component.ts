import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapService} from '../../../services';
import {ILatLng} from '../../../models';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.scss']
})
export class RightBlockComponent implements OnInit, OnDestroy {

  coordinates: ILatLng[];
  private _destroy$ = new Subject();

  constructor(
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getCoordinates();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  deleteCoordinate(coordinate: ILatLng, index: number) {
    this._mapService.deletedCoordinate$.next(coordinate);
    this.coordinates.splice(index, 1);
  }

  private _getCoordinates() {
    this._mapService.deletedMarkers$
      .pipe(takeUntil(this._destroy$))
      .subscribe((res: ILatLng[]) => this.coordinates = res);
  }
}
