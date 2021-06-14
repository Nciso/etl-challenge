import { RestClient } from '../../core/http_client/RestClient';
import { BaseETL } from '../../core/etl/BaseETL';
import {BrewerieETLDTO, RawBrewerie} from '../types/BrewerieTypes'
export class BrewerieETL extends BaseETL<BrewerieETLDTO>  {
  private rawData:RawBrewerie[] = []
  constructor(){
    super()
  }
  async perform(): Promise<BrewerieETLDTO> {
    await this.extract()
    throw new Error('Method not implemented.');
    return Promise.resolve([
      {
        state: 'hola',
        breweries: [
          
        ]
      }
    ])
  }
  async extract(): Promise<void> {
    const options = {
      hostname: 'api.openbrewerydb.org',
      port: 443,
      path: '/breweries',
      method: 'GET'
    }
    const client = new RestClient()
    this.rawData = await client.perform(options)
    console.log(this.rawData[0])
  }
  transform(): void {
    //execute all steps, create step 
    //const map = new Map<>
    this.rawData.forEach(raw =>{
        //execute chain of responsability of all steps
    })
    throw new Error('Method not implemented.');
  }
  load(): Promise<BrewerieETLDTO> {
    throw new Error('Method not implemented.');
  }
  

}