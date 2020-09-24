import { NgModule } from '@angular/core';
import { SharedDomainModule } from '@prototype/shared/domain';
import { SharedPipesModule } from '@prototype/shared/ui-pipes';

import { LinkCardComponent } from './components/link-card/link-card.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';

@NgModule({
  imports: [SharedDomainModule, SharedPipesModule],
  declarations: [LinkCardComponent, PictureCardComponent],
  exports: [LinkCardComponent, PictureCardComponent],
})
export class SharedCardsModule {}
