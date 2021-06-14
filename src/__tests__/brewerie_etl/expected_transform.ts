import { BrewerieETLDTO } from '../../brewerie/types/BrewerieTypes';

export const result: BrewerieETLDTO = [{
  state: 'Texas',
  breweries: [{
    id: 9094,
    obdbId: 'bnaf-llc-austin',
    name: 'naf, LLC',
    brewerieType: 'planning',
    city: 'Austin',
    state: 'Texas',
    postalCode: '78727-7602',
    country: 'United States',
    region: 'south',
    longitude: -97.733330,
    latitude: 30.266666,
    updatedAt: '2018-07-24T00:00:00.000Z',
    createdAt: '2018-07-24T00:00:00.000Z'
  }]
}, {
  state: 'Colorado',
  breweries: [{
    id: 9180,
    obdbId: 'boulder-beer-co-boulder',
    name: 'Boulder Beer Co',
    brewerieType: 'regional',
    street: '2880 Wilderness Pl',
    city: 'Boulder',
    state: 'Colorado',
    postalCode: '80301-5401',
    country: 'United States',
    region: 'west',
    longitude: -105.2480158,
    latitude: 40.026439,
    updatedAt: '2018-08-24T00:00:00.000Z',
    createdAt: '2018-07-24T00:00:00.000Z'
  }]
}]