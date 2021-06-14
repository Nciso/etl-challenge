import { RestClient } from '../../core/http_client/RestClient'


describe('test rest client', ()=>{
  
  describe('when status is 200 and payload is json', ()=> {
    var client:any;
   
    it('should return an array of objects', async () => {
      const options = {
        hostname: 'api.openbrewerydb.org',
        port: 443,
        path: '/breweries',
        method: 'GET'
      }
      client = new RestClient()
      const rawData = await client.perform(options)
      expect(typeof rawData).toEqual('object')
    })
  })


})