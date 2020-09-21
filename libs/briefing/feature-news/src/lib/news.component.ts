import { Component, OnInit } from '@angular/core';
import { NewsFacade } from '@prototype/briefing/domain';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private readonly newsFacade: NewsFacade) {}

  public readonly headlineOptions = {
    autoplay: true,
    delay: 10 * 1000,
    loop: true,
  };

  public readonly headlines$ = this.newsFacade.headlines$;
  public readonly stories$ = this.newsFacade.stories$;

  public load(): void {
    this.newsFacade.load();
  }

  public ngOnInit(): void {
    this.load();
  }
}
