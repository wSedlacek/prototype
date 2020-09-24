import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IHeadline } from '../entities/headline';

@Injectable({ providedIn: 'root' })
export class HeadlineDataService {
  constructor() {}

  public load(): Observable<IHeadline[]> {
    return of<IHeadline[]>([
      {
        id: 0,
        name: 'Pinal County',
        description: 'Clerk Of The Superior Court',

        image: {
          jpg: 'assets/images/az_landscape.jpg',
          webp: 'assets/images/az_landscape.webp',
        },
      },
      {
        id: 1,
        name: 'Office of the Clerk of the Superior Court',
        description: 'Florence, AZ',

        image: {
          jpg: 'assets/images/courthouse_main.jpg',
          webp: 'assets/images/courthouse_main.webp',
        },
      },
      {
        id: 3,
        name: 'Public Access Terminals',
        description:
          'Available at Florence, Casa Grande and Apache Junction locations',

        image: {
          jpg: 'assets/images/computer.jpg',
          webp: 'assets/images/computer.webp',
        },
      },
    ]);
  }
}
