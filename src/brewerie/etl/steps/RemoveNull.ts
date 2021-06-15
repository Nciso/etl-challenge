
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { BrewerieETLContext, RawBrewerie } from '../../types/BrewerieTypes';



export class RemoveNull extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): boolean {
    let current = context.current as RawBrewerie
    //remove null
    let notNull:RawBrewerie = {
      id: -1,
      name:''
    }

    let k: keyof RawBrewerie;  
    for (k in current) {
      const v = current[k];  
      
      if(v !== null){
        notNull[k] = v
      }
    }
    context.current = notNull
    if(typeof this.nextHandler !== 'undefined'){
      return this.nextHandler.perform(context)
    }else {
      return false
    }
  }
}

