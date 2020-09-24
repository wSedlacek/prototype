import { NgModule } from '@angular/core';
import { SharedDomainModule } from '@prototype/shared/domain';

import { ParagraphsPipe } from './paragraph/paragraphs.pipe';

@NgModule({
  imports: [SharedDomainModule],
  declarations: [ParagraphsPipe],
  exports: [ParagraphsPipe],
})
export class SharedPipesModule {}
