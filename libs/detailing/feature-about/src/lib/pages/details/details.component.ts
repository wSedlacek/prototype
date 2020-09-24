import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { expandAnimation } from '../../animations/expand.animation';

import { IDetails } from './models/details.interface';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [expandAnimation],
})
export class DetailsComponent implements AfterViewInit {
  constructor(private readonly route: ActivatedRoute) {}

  public readonly details$ = this.route.data.pipe(
    map(({ details }) => details as IDetails)
  );

  public loaded$ = new BehaviorSubject<boolean>(false);
  public loadedAnimation$ = this.loaded$.pipe(
    map((loaded) => (loaded ? 'expanded' : 'collapsed'))
  );

  public readonly location$ = this.details$.pipe(
    map(({ location }) => location),
    filter(<T>(location: T | undefined): location is T => !!location)
  );

  @ViewChild(GoogleMap, { static: false }) public map?: GoogleMap;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded$.next(true);
    }, 300);
  }
}
