import { AddRegionMap } from '../../../brewerie/etl/steps/AddRegionMap'
import { BrewerieETLContext, Brewerie } from '../../../brewerie/types/BrewerieTypes'

describe('add region step', () => {
  it('should add a region to a brewery', () => {
    const brewery1: Brewerie = {
      id: 9094,
      state: 'state2',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      latitude: '36.114647',
      longitude: '-115.172813',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const context: BrewerieETLContext = {
      states: new Map<string, Brewerie[]>().set('state2', [brewery1]),
      current: brewery1
    }
    const step = new AddRegionMap()
    step.perform(context)
    expect(context.states.get('state2')[0].region).toEqual('west')

  })

  it('should filter step if not latitude and longitude present', () => {
    const brewery1: Brewerie = {
      id: 9094,
      state: 'state2',
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const context: BrewerieETLContext = {
      states: new Map<string, Brewerie[]>().set('state2', [brewery1]),
      current: brewery1
    }
    const step = new AddRegionMap()
    step.perform(context)
    // filter out
    expect(context.states.get('state2')[0]).toEqual(undefined)
  })
})