


type UsRegions = 'west' | 'midwest' |'northeast' | 'south'

export interface BrewerieETLElement {
  state: string,
  breweries: Brewerie[]
}

export type BrewerieETLDTO = BrewerieETLElement[]

export interface BrewerieETLContext {
  states: Map<string, Brewerie[]>
  current: Brewerie | RawBrewerie
}

export interface Brewerie {
  id: number,
  obdbId?: string,
  name: string,
  breweryType: string,
  street?: string,
  address2?: string,
  address3?: string,
  city?: string,
  state?: string,
  countryProvince?: string,
  postalCode?: string,
  country?:string,
  region?: string,
  longitude?: number,
  latitude?: number,
  phone?: string,
  websiteUrl?:string,
  updatedAt?: string,
  createdAt?: string
}


export type RawBrewerie = {
  id: number,
  obdb_id?: string,
  name: string,
  [key: string]: any
}