interface Handler<T> {
  setNext(handler: Handler<T>): void
  perform(context: T): boolean
}

export abstract class BaseETLStep<T> implements Handler<T> {
  protected nextHandler: Handler<T>;

  public setNext(handler: Handler<T>): void {
    this.nextHandler = handler
  }

  public breakChain(): null{
    return null
  }

  public perform(context: T): boolean {
    if (typeof this.nextHandler !== undefined) {
      return this.nextHandler.perform(context);
    }else {
      return false
    }
  }
}