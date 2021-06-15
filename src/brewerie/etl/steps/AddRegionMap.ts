
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { usRegions } from '../../../polygons/us_regions';
import { Point } from '../../../polygons/Polygon';


export class AddRegionMap extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {

    let map = context.states
    for (let key of map.keys()) {
      console.log(key)
      let breweries = map.get(key).filter(this.isValid)
      let breweriesWithRegion = breweries.map(this.assingRegion)
      map.set(key, breweriesWithRegion)
    }


    if (typeof this.nextHandler !== 'undefined') {
      return this.nextHandler.perform(context)
    } else {
      return false
    }
  }

  private isValid(current: Brewerie): boolean {
    return (('latitude' in current) && ('longitude' in current))
  }

  private assingRegion(current: Brewerie): Brewerie {


    let regions = usRegions
    let position: Point = {
      lat: +current.latitude,
      lon: +current.longitude
    }

    const regionName = regions.find((region) => region.isInside(position)).name
    current.region = regionName
    return current
  }
}


