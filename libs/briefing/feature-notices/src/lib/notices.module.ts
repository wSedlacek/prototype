import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BriefingDomainModule } from '@prototype/briefing/domain';
import { SharedDomainModule } from '@prototype/shared/domain';

import { BannerComponent } from './components/banner/banner.component';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticeComponent } from './pages/notice/notice.component';
import { NoticesComponent } from './pages/notices/notices.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDomainModule,
    BriefingDomainModule,
    NoticesRoutingModule,
  ],
  declarations: [NoticesComponent, NoticeComponent, BannerComponent],
  exports: [NoticesComponent],
})
export class NoticesModule {}
