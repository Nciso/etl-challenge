


type UsRegions = 'west' | 'midwest' |'northeast' | 'south'

interface BrewerieETLElement {
  state: string,
  breweries: Brewerie[]
}

export type BrewerieETLDTO = BrewerieETLElement[]

export interface BrewerieETLContext {
  region: Map<UsRegions, Brewerie[]>
  current: Brewerie | RawBrewerie 
}

export interface Brewerie {
  id: number,
  obdbId?: string,
  name: string,
  brewerieType: string,
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


export interface RawBrewerie {
  id: number,
  obdb_id?: string,
  name: string,
  brewerie_type: string,
  street?: string,
  address_2?: string,
  address_3?: string,
  city?: string,
  state?: string,
  country_province?: string,
  postal_code?: string,
  country?:string,
  region?: string,
  longitude?: number,
  latitude?: number,
  phone?: string,
  website_url?:string,
  updated_at?: string,
  created_at?: string
}