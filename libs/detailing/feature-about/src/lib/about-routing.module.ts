import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { LocationGuard } from './router/location/location.guard';
import { LocationResolver } from './router/location/location.resolver';
import { PersonGuard } from './router/person/person.guard';
import { PersonResolver } from './router/person/person.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'person/:id',
        resolve: { details: PersonResolver },
        canActivate: [PersonGuard],
        component: DetailsComponent,
      },
      {
        path: 'location/:id',
        resolve: { details: LocationResolver },
        canActivate: [LocationGuard],
        component: DetailsComponent,
      },
    ]),
  ],
})
export class AboutRoutingModule {}
