import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent,
      },
      {
        path: 'articles/:id',
        component: ArticleComponent,
      },
    ]),
  ],
})
export class NewsRoutingModule {}
