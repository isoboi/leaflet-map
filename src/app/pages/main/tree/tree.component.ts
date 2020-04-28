import {Component, OnDestroy, OnInit} from '@angular/core';
import {ILatLng, ITree} from '../../../models';
import {MapService, TreeService} from '../../../services';
import {first, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnDestroy {

  trees: ITree[];
  private _destroy = new Subject();

  constructor(
    private _treeService: TreeService,
    private _mapService: MapService
  ) { }

  ngOnInit(): void {
    this._getTree();
    this._getDeletedCoordinates();
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }

  onTreeClick(e, tree: any) {
    e.stopPropagation();
    const coordinates = this._getCoordinates(tree);
    this._mapService.markers$.next(coordinates);
  }

  private _getTree() {
    this._treeService.getTree()
      .pipe(first())
      .subscribe((res: ITree[]) => this.trees = res);
  }

  private _getCoordinates(tree: ITree): ILatLng[] {
    const markers: ILatLng[] = [];

    const getMarkers = (coordinates: ITree) => {
      coordinates.value.forEach(item => {
        if (item.hasOwnProperty('value')) {
          return getMarkers(item);
        }
        coordinates.selected = true;
        item.selected = true;
        markers.push(item);
      });
    };

    getMarkers(tree);

    return markers;
  }

  private _getDeletedCoordinates() {
    this._mapService.deletedCoordinate$
      .pipe(takeUntil(this._destroy))
      .subscribe((res: ILatLng) => this._enableMenu(res));
  }

  private _enableMenu(coordinate: ILatLng) {
    const findCoordinate = (coordinates: any) => {
      coordinates.value.forEach((item: any) => {
        if (item.hasOwnProperty('value')) {
          return findCoordinate(item);
        }

        const getCoordinate = coordinates.value.find((c: ILatLng) => {
          return c.lat === coordinate.lat && c.lng === coordinate.lng;
        });
        if (getCoordinate) {
          getCoordinate.selected = false;
        }

        const checkCoordinate = coordinates.value.every(c => !c.selected);
        if (checkCoordinate) {
          coordinates.selected = false;
        }
      });
    };

    this.trees.forEach(tree => findCoordinate(tree));
  }
}
