import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoticeComponent } from './pages/notice/notice.component';
import { NoticesComponent } from './pages/notices/notices.component';

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
      },
    ]),
  ],
})
export class NoticesRoutingModule {}
