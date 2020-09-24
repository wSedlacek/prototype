import { NgModule } from '@angular/core';
import { BriefingDomainModule } from '@prototype/briefing/domain';
import { SharedCoreModule } from '@prototype/shared/ui-core';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticeComponent } from './pages/notice/notice.component';
import { NoticesComponent } from './pages/notices/notices.component';

@NgModule({
  imports: [SharedCoreModule, BriefingDomainModule, NoticesRoutingModule],
  declarations: [NoticesComponent, NoticeComponent],
  exports: [NoticesComponent],
})
export class NoticesModule {}
