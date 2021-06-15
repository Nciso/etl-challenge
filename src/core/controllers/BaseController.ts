import * as express from 'express'

export abstract class BaseController {

  protected req: express.Request;
  protected res: express.Response;

  protected abstract concreteExecute(): Promise<void | any>;

  public execute(req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;

    this.concreteExecute();
  }

  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message })
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public fail(error: Error | string) {
    // tslint:disable-next-line:no-console
    console.log(error);
    return this.res.status(500).json({
      message: error.toString()
    })
  }
}