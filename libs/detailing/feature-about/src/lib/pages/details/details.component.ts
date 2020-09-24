import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '@prototype/detailing/domain';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  public readonly person$ = this.route.data.pipe(
    map(({ details }) => details as IPerson)
  );

  public ngOnInit(): void {}
}
