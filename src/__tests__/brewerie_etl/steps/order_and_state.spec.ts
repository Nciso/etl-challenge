
import { OrderAndState } from '../../../brewerie/etl/steps/OrderAndState'
import { BrewerieETLContext, Brewerie } from '../../../brewerie/types/BrewerieTypes'

describe('test four step', () => {
  it('should map by region and insert in order', () => {
    const brewery1:Brewerie = {
      id: 9094,
      state:'state2',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const brewery2:Brewerie ={
      id: 9094,
      state:'state2',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2017-07-24T00:00:00.000Z',
      createdAt: '2017-07-24T00:00:00.000Z'
    }
    const brewery3:Brewerie ={
      id: 9094,
      state:'state1',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2016-07-24T00:00:00.000Z',
      createdAt: '2016-07-24T00:00:00.000Z'
    }
    const context:BrewerieETLContext = {
      states: new Map<string, Brewerie[]>(),
      current: brewery1
    }
    const breweries = [brewery2, brewery1, brewery3]
    const subject = new OrderAndState()
    for(const br of breweries){
      context.current = br
      subject.perform(context)
    }
    const map = context.states
    expect(map.get('state2')).toEqual([brewery1, brewery2])
    expect(map.get('state1')).toEqual([brewery3])
  })

  it('should skip if state is no present', ()=>{
    const brewery1:Brewerie = {
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const context:BrewerieETLContext = {
      states: new Map<string, Brewerie[]>(),
      current: brewery1
    }
    const subject = new OrderAndState()
    subject.perform(context)
    expect(context.states.size).toEqual(0)
  })
})