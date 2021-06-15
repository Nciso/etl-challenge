
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { compareBreweries, insertedSorted } from '../utils/insertSorted';



export class OrderAndState extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext):boolean {
    const current = context.current
    if (!('state' in current)) {
      return this.breakChain()
    }

    const state = current.state
    if (context.states.has(state)) {
      // insert in order, worst case O(n)
      let arr = context.states.get(state)
      arr = insertedSorted<Brewerie>(arr, current as Brewerie, compareBreweries)
      context.states.set(state, arr)
    } else {
      context.states.set(state, [context.current as Brewerie])
    }
    if(typeof this.nextHandler !== 'undefined'){
      return this.nextHandler.perform(context)
    }else {
      return false
    }
  }
}


