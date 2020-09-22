import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BriefingDomainModule } from '@prototype/briefing/domain';
import { SharedDomainModule } from '@prototype/shared/domain';

import { ArticleComponent } from './components/article/article.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule,
    SharedDomainModule,
    BriefingDomainModule,
    NewsRoutingModule,
  ],
  declarations: [NewsComponent, ArticleComponent],
  exports: [NewsComponent],
})
export class BriefingFeatureNewsModule {}
