
import { BaseETLStep } from '../../../core/etl/BaseETLStep';
import { Brewerie, BrewerieETLContext } from '../../types/BrewerieTypes';
import { compareBreweries, insertedSorted } from '../utils/insertSorted';



export class OrderAndState extends BaseETLStep<BrewerieETLContext>{
  public perform(context: BrewerieETLContext): BrewerieETLContext {
    let current = context.current
    if (!('state' in current)) {
      return this.breakChain()
    }
   
    let state = current.state
    if (context.states.has(state)) {
      // insert in order, worst case O(n)
      let arr = context.states.get(state)
      arr = insertedSorted<Brewerie>(arr, current as Brewerie, compareBreweries)
      context.states.set(state, arr)
    } else {
      context.states.set(state, [context.current as Brewerie])
    }
    return super.perform(context)
  }
}

