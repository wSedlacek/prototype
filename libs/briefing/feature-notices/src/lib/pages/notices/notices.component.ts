import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NoticesFacade } from '@prototype/briefing/domain';

@Component({
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent implements OnInit {
  constructor(
    private readonly noticesFacade: NoticesFacade,
    private readonly nav: NavController,
    private readonly route: ActivatedRoute
  ) {}

  public readonly headlines$ = this.noticesFacade.headlines$;
  public readonly notices$ = this.noticesFacade.stories$;

  public load(): void {
    this.noticesFacade.load();
  }

  public ngOnInit(): void {
    this.load();
  }

  public openNotice(id: number): void {
    this.nav.navigateForward([`./${id}`], {
      relativeTo: this.route,
    });
  }
}
