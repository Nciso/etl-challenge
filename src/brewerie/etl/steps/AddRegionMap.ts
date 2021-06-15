
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { usRegions } from '../../../polygons/us_regions';
import { Point } from '../../../polygons/Polygon';


export class AddRegionMap extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {

    const map = context.states
    for (const key of map.keys()) {
      const breweries = map.get(key).filter(this.isValid)
      const breweriesWithRegion = breweries.map(this.assingRegion)
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


    const regions = usRegions
    const position: Point = {
      lat: +current.latitude,
      lon: +current.longitude
    }

    const regionName = regions.find((region) => region.isInside(position)).name
    current.region = regionName
    return current
  }
}


