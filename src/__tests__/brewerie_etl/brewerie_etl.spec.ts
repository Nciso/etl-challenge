import { RestClient } from '../../core/http_client/RestClient'
import { BrewerieETL } from '../../brewerie/etl/BrewerieETL'
import { raw_data } from './raw_data_fixture'
import { result as expectedResult } from './expected_transform'
describe('BrewerieETL', () => {

  beforeEach(() => {
    // mock rest client to return a single brewerie or two

    const client = new RestClient()
    client.perform = jest.fn(() => Promise.resolve(raw_data))

  })
  it('should return a BrewerieETLDTO', async () => {
    let subject = new BrewerieETL()
    let result = await subject.perform()
    expect(result).toBe(expectedResult)
  })

})