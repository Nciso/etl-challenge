import { RemoveNull } from '../../../brewerie/etl/steps/RemoveNull'
import { BrewerieETLContext } from '../../../brewerie/types/BrewerieTypes'

describe('step 1 of etl',()=>{
  it('should remove nulls', () => {
    let remove = new RemoveNull()
    let context:BrewerieETLContext = {
      region: new Map(),
      current: { 
        id: 9094,
        obdb_id: 'bnaf-llc-austin',
        name: 'Bnaf, LLC',
        brewery_type: 'planning',
        street: null,
        address_2: null,
        address_3: null,
        city: 'Austin',
        state: 'Texas',
        county_province: null,
        postal_code: '78727-7602',
        country: 'United States',
        longitude: null,
        latitude: null,
        phone: null,
        website_url: null,
        updated_at: '2018-07-24T00:00:00.000Z',
        created_at: '2018-07-24T00:00:00.000Z'
      }
    }
    remove.perform(context)
    expect(context.current).toMatchObject({
      id: 9094,
      obdb_id: 'bnaf-llc-austin',
      name: 'Bnaf, LLC',
      brewery_type: 'planning',
      city: 'Austin',
      state: 'Texas',
      postal_code: '78727-7602',
      country: 'United States',
      updated_at: '2018-07-24T00:00:00.000Z',
      created_at: '2018-07-24T00:00:00.000Z'
    })
  })

})