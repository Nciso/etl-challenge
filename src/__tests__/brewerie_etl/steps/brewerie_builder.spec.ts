import { BrewerieBuild } from '../../../brewerie/etl/steps/BrewerieBuild'
import { BrewerieETLContext } from '../../../brewerie/types/BrewerieTypes'

describe('step 2', () => {
  it('should create a brewerie', () => {
    let step2 = new BrewerieBuild()
    let context:BrewerieETLContext = {
      states: new Map(),
      current: {
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
      }
    }
    step2.perform(context)
    expect(context.current).toMatchObject({
      id: 9094,
      obdbId: 'bnaf-llc-austin',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      city: 'Austin',
      state: 'Texas',
      postalCode: '78727-7602',
      country: 'United States',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    })
  })
})