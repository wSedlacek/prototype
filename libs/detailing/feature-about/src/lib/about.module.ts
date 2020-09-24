import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { DetailingDomainModule } from '@prototype/detailing/domain';
import { SharedBannerModule } from '@prototype/shared/ui-banner';
import { SharedCoreModule } from '@prototype/shared/ui-core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  imports: [
    GoogleMapsModule,
    SharedCoreModule,
    SharedBannerModule,
    DetailingDomainModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent, DetailsComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
