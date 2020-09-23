import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { INotice } from '../entities/notice';

@Injectable({ providedIn: 'root' })
export class NoticeDataService {
  constructor() {}

  public load(): Observable<INotice[]> {
    return of<INotice[]>([
      {
        id: 0,
        name: 'Pinal County',
        description: 'Clerk Of The Superior Court',
        isHeadline: true,
        image: {
          jpg: 'assets/images/az_landscape.jpg',
          webp: 'assets/images/az_landscape.webp',
        },
      },
      {
        id: 1,
        name: 'Office of the Clerk of the Superior Court',
        description: 'Florence, AZ',
        isHeadline: true,
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
        isHeadline: true,
        image: {
          jpg: 'assets/images/computer.jpg',
          webp: 'assets/images/computer.webp',
        },
      },
      {
        date: 'EFFECTIVE APRIL 1st, 2020',
        id: 4,
        name: 'Income Withholding Order Fee',
        description:
          'Obligor shall pay by Income Withholding Order a monthly handling fee which is set by rule pursuant A.R.S. § 25-510(D), and which will be increasing to $8.00 per month on April 1, 2020.',
      },
      {
        date: 'EFFECTIVE JUNE 1st, 2018',
        id: 5,
        name: 'Mandatory Efiling For Attorneys',
        description:
          'Attorneys are required to electronically file initiation and post-initiation civil case documents when filing into the Superior Court in Pinal',
      },
      {
        date: 'EFFECTIVE MAY 17th',
        id: 6,
        name: 'Legislative Change to Superior Court Filing Fees in Arizona',
        description:
          'As of May 17th our filing fees have been updated, please refer to our website for the most current filing fee schedule.',
      },
      {
        id: 7,
        name: 'New Local Rules',
        description:
          'Order approving proposed abrogation and replacement of Pinal County Superior Court local rules...',
      },
    ]);
  }
}
