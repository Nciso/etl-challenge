import {BaseController} from '../../core/controllers/BaseController'
import { IETLProcess } from '../../core/etl/BaseETL';
import {BrewerieETLDTO} from '../types/BrewerieTypes'
import { BrewerieETL } from '../etl/BrewerieETL';

export class BrewerieController extends BaseController {
  private etl: IETLProcess<BrewerieETLDTO>;
  constructor () {
    super();
    this.etl = new BrewerieETL();
  }
  async concreteExecute (): Promise<any> {

    try {
      const result = await this.etl.perform();

      return this.ok(this.res, result);

    } catch (err) {
      return this.fail(err)
    }
  }
}