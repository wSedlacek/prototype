import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AboutFacade } from '@prototype/detailing/domain';

@Component({
  selector: 'detailing-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private readonly facade: AboutFacade,
    private readonly nav: NavController,
    private readonly route: ActivatedRoute
  ) {}
  public readonly headlines$ = this.facade.headlineList$;
  public readonly locations$ = this.facade.locationList$;
  public readonly people$ = this.facade.personList$;

  public load(): void {
    this.facade.load();
  }

  public ngOnInit(): void {
    this.load();
  }

  public openLocationDetails(id: number): void {
    this.nav.navigateForward(`/about/location/${id}`);
  }

  public openPersonDetails(id: number): void {
    this.nav.navigateForward(`/about/person/${id}`);
  }
}
