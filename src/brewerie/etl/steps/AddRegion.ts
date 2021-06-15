
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { BrewerieETLContext } from '../../types/BrewerieTypes';
import { usRegions } from '../../../polygons/us_regions';
import { Point } from '../../../polygons/Polygon';


export class AddRegion extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {
    const current = context.current
    if (!('latitude' in current) || !('longitude' in current)) {
      return false
    }

    const regions = usRegions
    const position: Point = {
      lat: +current.latitude,
      lon: +current.longitude
    }

    const regionName = regions.find((region) => region.isInside(position)).name
    context.current.region = regionName
    if (typeof this.nextHandler !== 'undefined') {
      return this.nextHandler.perform(context)
    } else {
      return false
    }
  }
}


