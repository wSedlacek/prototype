import { NgModule } from '@angular/core';
import { SharedDomainModule } from '@prototype/shared/domain';

import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  imports: [SharedDomainModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class SharedBannerModule {}
