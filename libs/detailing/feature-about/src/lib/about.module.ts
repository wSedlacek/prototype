import { NgModule } from '@angular/core';
import { DetailingDomainModule } from '@prototype/detailing/domain';
import { SharedBannerModule } from '@prototype/shared/ui-banner';
import { SharedCoreModule } from '@prototype/shared/ui-core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  imports: [
    SharedCoreModule,
    SharedBannerModule,
    DetailingDomainModule,
    AboutRoutingModule,
  ],
  declarations: [AboutComponent, DetailsComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
