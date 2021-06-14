import https from 'https'
import * as http from 'http';
export class RestClient {


  perform(options: any): any {
    return new Promise((res, rej) =>{

      
      https.request(options, (r: http.IncomingMessage): void => {
        const failureStatus = r.statusCode >= 300 && r.statusCode <= 599
        if(failureStatus){
          rej(new Error(`server responded with ${r.statusCode}`))
        }
        let data = '';
        r.on('data', (chunk: string): void => {
            
            data += chunk;
        });
        r.on('end', (): void =>{
            
            res(JSON.parse(data));
        });
        r.on('error', (err:any): void => {
           
            rej(err);
        })
    }).end();


    } )
  }
}