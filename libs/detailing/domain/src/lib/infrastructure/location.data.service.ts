import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dedent } from 'ts-dedent';

import { ILocation } from '../entities/location';

@Injectable({ providedIn: 'root' })
export class LocationDataService {
  constructor() {}

  public load(): Observable<ILocation[]> {
    return of<ILocation[]>([
      {
        id: 0,
        name: 'Main Office',
        role: dedent`971 N Jason Lopez Circle Bldg A
        Florence AZ 85132`,
        details: dedent`Child Support Phone: 520.866.5321
        Hours: Monday - Friday 8:00 am to 5:00 pm
        After Hours Drop Box Available`,
      },
      {
        id: 1,
        name: 'Apache Junction',
        role: dedent`575 N Idaho Rd Suite 109
        Apache Junction AZ 85119`,
        details: dedent`*TEMPORARILY CLOSED*
        Hours: Monday - Friday 8:00 am to 12:00 pm
        1:00 pm to 5:00 pm
        Office Closed from 12:00 pm to 1:00 pm
        After Hours Drop Box NOW Available at AJ Office
        ***Marriage Licenses and New Cases will not be accepted for filing after 11:30am (lunch hour) or 4:30pm.`,
      },
      {
        id: 2,
        name: 'Casa Grande',
        role: dedent`820 E Cottonwood Ln Bldg B
        Casa Grande AZ 85122`,
        details: dedent`*TEMPORARILY CLOSED*
        Hours: Monday - Friday 8:00 am to 12:00 pm
        1:00 pm to 5:00 pm
        Office Closed from 12:00 pm to 1:00 pm
        ***Marriage Licenses and New Cases will not be accepted for filing after 11:30am (lunch hour) or 3:00pm.
        The only payment methods accepted at this location are MasterCard, Visa, Discover and American Express. Currently not accepting cash, check or money orders.`,
      },
      {
        id: 3,
        name: 'Maricopa',
        role: dedent`19955 N Wilson Ave,
        Maricopa, AZ 85139`,
        details: dedent`*TEMPORARILY CLOSED*
        Hours: Friday Only 9:30 am to 12:00 pm
        1:00 pm to 3:30 pm
        Office Closed from 12:00 pm to 1:00 pm
        ***Marriage Licenses and New Cases will not be accepted for filing after 11:30am (lunch hour) or 3:00pm.
        The only payment methods accepted at this location are MasterCard, Visa, Discover and American Express. Currently not accepting cash, check or money orders.`,
      },
    ]);
  }
}
