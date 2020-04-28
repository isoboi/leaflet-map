import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

import { MAIN_ROUTES } from './main-routes';
import { MapComponent } from './map/map.component';
import { TreeComponent } from './tree/tree.component';
import { RightBlockComponent } from './right-block/right-block.component';
import {MapService, TreeService} from '../../services';


@NgModule({
  declarations: [
    MainComponent,
    MapComponent,
    TreeComponent,
    RightBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  providers: [
    TreeService,
    MapService
  ]
})
export class MainModule { }
