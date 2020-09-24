import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dedent } from 'ts-dedent';

import { IPerson } from '../entities/person';

@Injectable({ providedIn: 'root' })
export class PersonDataService {
  constructor() {}

  public load(): Observable<IPerson[]> {
    return of<IPerson[]>([
      {
        id: 0,
        name: 'Amanda Stanford',
        role: 'Clerk Of The Superior Court',

        image: {
          jpg: 'assets/avatars/amanda-stanford.jpg',
        },
        details: dedent`Amanda Stanford brings the seasoned experience of years of public service to the office of the Clerk of the Superior Court. Clerk Stanford was the primary point of contact for all financial operations within the Clerk’s office for several years. She has over thirteen years of experience in Government/ Public Sector Finance. She wishes to serve as a collaborative support system to Pinal Superior and Lower Jurisdiction Courts and also implement cost effective business practices that are able to respond in scale with the continued and expected population growth in Pinal County. She is committed to using current technology and innovative approaches to modernizing the workplace she manages.

        Although it is still early in her first term, Clerk Stanford has identified areas of need and areas to improve. She wishes to expand services to those areas in Pinal County that are currently underserved. Future goals include utilizing current Information Systems technology to deliver real-time reporting benchmarks, and to add extra measures of accountability and accuracy within court records. Security is a huge and overriding concern to Clerk Stanford, and she, and her team, are dedicated to working closely to ensure that the hundreds of thousands of documents within the Clerk’s care are safe and secure.

        Clerk Stanford has set high standards for her office of almost 100 staff. She is a state-recognized certified trainer for other counties in Arizona in Minimum Accounting Standards (MAS). To the public, the bench, the bar and all justice partners, Clerk Stanford is committed to excellence in service delivery.

        Clerk Stanford has earned her Bachelor of Science of Accounting from the University of Phoenix, and is finishing her Masters in Science of Accounting this year. She is a proud alumnus of the Dodie Londen Excellence in Public Service Series, an honor accorded to just eight women chosen from across the state.

        Recommended by the Administrative Office of the Courts (AOC), she has provided statewide training to newly appointed Finance Managers and was a key collaborator in process improvement including the enabling of probation staff to take payments in the field. She was also a key collaborator in the conceptual development of Regional Court and, overall, continues to strive for the highest principles of integrity, professionalism, accountability and transparency in her office. Clerk Stanford took her oath of office in January of 2015, and looks forward to many years of service to the citizens of Pinal County, the county with the third highest population in the State of Arizona.

        The Clerk was a longtime resident of Florence, Arizona. She currently resides in San Tan Valley with her husband and three beautiful children.`,
      },
    ]);
  }
}
