import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INotice } from '@prototype/briefing/domain';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  public readonly article$ = this.route.data.pipe(
    map(({ details }) => details as INotice)
  );

  public ngOnInit(): void {}
}
