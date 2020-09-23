import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: TabsComponent,
          children: [
            {
              path: 'notices',
              loadChildren: () =>
                import('@prototype/briefing/feature-notices').then(
                  (m) => m.NoticesModule
                ),
            },
            {
              path: '**',
              redirectTo: 'notices',
            },
          ],
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
