
import { mocked } from 'ts-jest/utils';
import {RestClient} from '../../core/http_client/RestClient'
import { BrewerieETL } from '../../brewerie/etl/BrewerieETL'
import { raw_data } from './raw_data_fixture'
import { result as expectedResult } from './expected_transform'

jest.mock('../../core/http_client/RestClient', () => {
  return {
    RestClient: jest.fn().mockImplementation(()=> {
      return {
        perform: (options:any) => {
          return Promise.resolve(raw_data)
        }
      }
    })

  };
});


describe('BrewerieETL', () => {

  const MockedRestClient = mocked(RestClient, true);

  beforeEach(() => {
    MockedRestClient.mockClear();


  })
  it('should return a BrewerieETLDTO', async () => {
    const subject = new BrewerieETL()
    const result = await subject.perform()
    expect(result).toStrictEqual(expectedResult)
  })

})