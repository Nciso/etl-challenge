import { RestClient } from '../../core/http_client/RestClient';
import { BaseETL } from '../../core/etl/BaseETL';
import { Brewerie, BrewerieETLDTO, RawBrewerie, BrewerieETLContext, BrewerieETLElement } from '../types/BrewerieTypes'
import chain from './chain'
export class BrewerieETL extends BaseETL<BrewerieETLDTO>  {
  private rawData: RawBrewerie[] = []
  private resultMap: Map<string, Brewerie[]>
  constructor() {
    super()
  }
  public async perform(): Promise<BrewerieETLDTO> {
    await this.extract()
    await this.transform()
    return await this.load()
  }
  protected async extract(): Promise<void> {
    const options = {
      hostname: 'api.openbrewerydb.org',
      port: 443,
      path: '/breweries',
      method: 'GET'
    }
    const client = new RestClient()
    this.rawData = await client.perform(options)
    console.log(this.rawData)

  }
  protected transform(): void {
    const chainOfResponsability = chain
    //execute all steps, create step 
    const map = new Map<string, Brewerie[]>()
    this.rawData.forEach(raw => {
      //execute chain of responsability of all steps
      let context: BrewerieETLContext = {
        current: raw,
        states: map
      }
      chainOfResponsability.perform(context)
      
    })
    this.resultMap = map
  }
  protected load(): Promise<BrewerieETLDTO> {
    const transformedData: BrewerieETLDTO = []
    this.resultMap.forEach((value: Brewerie[], key: string) => {
      const result: BrewerieETLElement = {
        state: key,
        breweries: value
      }
      if(result.breweries.length > 0){
        transformedData.push(result)
      }
    });
    return Promise.resolve(transformedData)
  }


}