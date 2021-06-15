
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { proxyBuilder} from '../../../core/Builder'
import { camalize } from '../utils/camelize';


export class BrewerieBuild extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {
    let current = context.current 
    let builder = proxyBuilder<Brewerie>()
    let k: keyof typeof current;
    for(k in current){
      let camelCase = camalize(k) as keyof Brewerie
      builder[camelCase](current[k])
    }
    const brewerie = builder.build()
    context.current = brewerie

    if(typeof this.nextHandler !== 'undefined'){
      return this.nextHandler.perform(context)
    }else {
      return false
    }
  }
}


