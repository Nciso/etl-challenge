import { BaseETL } from '../../core/etl/BaseETL';
import {BrewerieETLDTO} from '../types/BrewerieTypes'
export class BrewerieETL extends BaseETL<BrewerieETLDTO>  {
  constructor(){
    super()
  }
  async perform(): Promise<BrewerieETLDTO> {
    throw new Error('Method not implemented.');
    return Promise.resolve([
      {
        state: 'hola',
        breweries: [
          
        ]
      }
    ])
  }
  extract(): void {
    throw new Error('Method not implemented.');
  }
  transform(): void {
    throw new Error('Method not implemented.');
  }
  load(): Promise<BrewerieETLDTO> {
    throw new Error('Method not implemented.');
  }
  

}