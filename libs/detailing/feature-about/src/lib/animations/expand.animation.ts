import { animate, style, transition, trigger } from '@angular/animations';

export const EXPANSION_PANEL_ANIMATION_TIMING =
  '300ms cubic-bezier(0.4,0.0,0.2,1)';

export const expandAnimation = trigger('expand', [
  transition(':enter', [
    style({ height: '0px', visibility: 'hidden' }),
    animate(
      EXPANSION_PANEL_ANIMATION_TIMING,
      style({ height: '*', visibility: 'visible' })
    ),
  ]),
]);
