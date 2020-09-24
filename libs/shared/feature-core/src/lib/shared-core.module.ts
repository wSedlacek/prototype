import { NgModule } from '@angular/core';
import { SharedDomainModule } from '@prototype/shared/domain';
import { SharedUiBannerModule } from '@prototype/shared/ui-banner';

@NgModule({
  exports: [SharedDomainModule, SharedUiBannerModule],
})
export class SharedCoreModule {}
