export interface ISubscriptionLike {
  unsubscribe(): void;
}

export class Subscriptions extends Array<ISubscriptionLike> {
  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new Subscriptions();
   *   ...
   *   this.subs.sink = observable$.subscribe(
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {
    super();
  }

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  public add(...subscriptions: ISubscriptionLike[]): void {
    this.concat(subscriptions);
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  public unsubscribe(): void {
    this.forEach((sub) => sub?.unsubscribe?.());
  }

  public get sink(): ISubscriptionLike {
    throw new Error('Subscriptions: `sink` is a write only property.');
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  public set sink(subscription: ISubscriptionLike) {
    this.push(subscription);
  }
}
