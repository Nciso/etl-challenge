interface Handler<T> {
  setNext(handler: Handler<T>): Handler<T>;
  perform(context: T): T
}

export abstract class BaseETLStep<T> implements Handler<T> {
  private nextHandler: Handler<T>;

  public setNext(handler: Handler<T>): Handler<T> {
    this.nextHandler = handler
    return handler
  }

  public breakChain(): null{
    return null
  }

  public perform(context: T): T {
    if (this.nextHandler) {
      return this.nextHandler.perform(context);
    }

    return null;
  }
}