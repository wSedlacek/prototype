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
              path: 'news',
              loadChildren: () =>
                import('@prototype/briefing/feature-news').then(
                  (m) => m.BriefingFeatureNewsModule
                ),
            },
            {
              path: '**',
              redirectTo: 'news',
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
