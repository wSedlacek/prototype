import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoticeComponent } from './pages/notice/notice.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { NoticeGuard } from './router/notices/notice.guard';
import { NoticeResolver } from './router/notices/notice.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NoticesComponent,
      },
      {
        path: ':id',
        component: NoticeComponent,
        canActivate: [NoticeGuard],
        resolve: { details: NoticeResolver },
      },
    ]),
  ],
})
export class NoticesRoutingModule {}
