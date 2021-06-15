
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { proxyBuilder} from '../../../core/Builder'
import { camalize } from '../utils/camelize';


export class BrewerieBuild extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {
    const current = context.current
    const builder = proxyBuilder<Brewerie>()
    let k: keyof typeof current;
    for(k in current){
      const camelCase = camalize(k) as keyof Brewerie
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


