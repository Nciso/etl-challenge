import { RestClient } from '../../core/http_client/RestClient'


describe('test rest client', ()=>{

  describe('when status is 200 and payload is json', ()=> {
    let client:any;
    let mockedData:any;
    beforeEach(()=>{
      client = new RestClient()
      mockedData = [{
        type: 'mocked'
      }]
      client.perform = jest.fn(()=> Promise.resolve(mockedData))

    })
    it('should return an array of objects', async () => {
      const options = {
        hostname: 'api.openbrewerydb.org',
        port: 443,
        path: '/breweries',
        method: 'GET'
      }

      const rawData = await client.perform(options)
      expect(rawData).toEqual(mockedData)
    })
  })


})