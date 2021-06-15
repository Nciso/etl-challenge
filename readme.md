# ETL + Express + Typescript + Jest

A simple rest server that produces an especific ETL job


## To run the project

The project is based on docker, to be able to run the project run the following

`$ docker build -t autocloud-etl .`

`$ docker run -it -p 8080:8080 autocloud-etl`

## To fetch data

Make the following request to this endpoint

```
GET http://localhost:8080/api/v1//breweries

Response
[
  {
    "state": "Colorado",
    "breweries": [
      {
        "id": 9180,
        "name": "Boulder Beer Co",
        "obdbId": "boulder-beer-co-boulder",
        "breweryType": "regional",
        "street": "2880 Wilderness Pl",
        "city": "Boulder",
        "state": "Colorado",
        "postalCode": "80301-5401",
        "country": "United States",
        "longitude": "-105.2480158",
        "latitude": "40.026439",
        "updatedAt": "2018-08-24T00:00:00.000Z",
        "createdAt": "2018-07-24T00:00:00.000Z",
        "region": "west"
      }
    ]
  },
  {
    "state": "Pennsylvania",
    "breweries": [
      {
        "id": 11039,
        "name": "Goose Island Philadelphia",
        "obdbId": "goose-island-philadelphia-philadelphia",
        "breweryType": "brewpub",
        "street": "1002 Canal St",
        "city": "Philadelphia",
        "state": "Pennsylvania",
        "postalCode": "19123",
        "country": "United States",
        "longitude": "-75.13506341",
        "latitude": "39.9648491",
        "updatedAt": "2018-08-24T00:00:00.000Z",
        "createdAt": "2018-07-24T00:00:00.000Z",
        "region": "northeast"
      }
    ]
  },
  {
    "state": "Michigan",
    "breweries": [
      {
        "id": 11767,
        "name": "Ironbark Brewery",
        "obdbId": "ironbark-brewery-jackson",
        "breweryType": "micro",
        "street": "2610 Kibby Rd",
        "city": "Jackson",
        "state": "Michigan",
        "postalCode": "49203-4908",
        "country": "United States",
        "longitude": "-84.43762976",
        "latitude": "42.2188971",
        "phone": "5177487988",
        "updatedAt": "2018-08-24T00:00:00.000Z",
        "createdAt": "2018-07-24T00:00:00.000Z",
        "region": "midwest"
      }
    ]
  }
]
```


## To add more steps into the ETL process

There is a base class `BaseETL` this class is the template for any ETL process. The steps are performed using the [chain of responsability pattern](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern), every single step should inherit from `BaseETLStep`. The chain is performed inside the `transform` method.

This configuration makes it easy to add any step into the chain.

Also I want to point out that `BaseController` is ready to be used as an express controller that could process an ETL process.

**Example**

Inside the ETL process

```
import chain from './chain'
class BrewerieETL extends BaseETL<BrewerieETLDTO>  {
  
  //rest of the class skiped for demostration
  
  protected transform(): void {
    const chainOfResponsability = chain
    // execute all steps, create step
    const map = new Map<string, Brewerie[]>()
    this.rawData.forEach(raw => {
      // execute chain of responsability of all steps
      const context: BrewerieETLContext = {
        current: raw,
        states: map
      }
      chainOfResponsability.perform(context)

    })
    this.resultMap = map
  }
 
}
```

Chain of responsibility example

```
import { RemoveNull } from './steps/RemoveNull';
import { BrewerieBuild } from './steps/BrewerieBuild';
import { OrderAndState } from './steps/OrderAndState';
import { AddRegionMap } from './steps/AddRegionMap';
import { AddRegion } from './steps/AddRegion';

const removenNull = new RemoveNull()
const buildObject = new BrewerieBuild()
const orderByState = new OrderAndState()
const addRegionEfficient = new AddRegion()
const addRegion = new AddRegionMap()
removenNull.setNext(buildObject)
buildObject.setNext(orderByState)
orderByState.setNext(addRegion)


export default removenNull
```