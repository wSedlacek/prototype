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
              path: 'about',
              loadChildren: () =>
                import('@prototype/detailing/feature-about').then(
                  (m) => m.AboutModule
                ),
            },
            {
              path: '**',
              redirectTo: 'about',
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
