import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IArticle } from '../entities/article';

@Injectable({ providedIn: 'root' })
export class ArticleDataService {
  constructor() {}

  public load(): Observable<IArticle[]> {
    return of<IArticle[]>([
      { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 4,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
        isHeadline: true,
        headline: {
          image: 'https://unsplash.it/800?random',
        },
      },
      {
        id: 5,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
        isHeadline: true,
        headline: {
          image: 'https://unsplash.it/801?random',
        },
      },
    ]);
  }
}
