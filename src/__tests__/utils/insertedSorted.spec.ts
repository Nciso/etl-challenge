import { Brewerie } from '../../brewerie/types/BrewerieTypes'
import { insertedSorted, compareBreweries } from '../../brewerie/etl/utils/insertSorted'

describe('test insertInorder, O(n)', () => {
  it('should insert in order and match result', () => {
    let arr:Brewerie[] =[]
    const brewerie1:Brewerie = {
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const brewerie2:Brewerie ={
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2017-07-24T00:00:00.000Z',
      createdAt: '2017-07-24T00:00:00.000Z'
    }
    const brewerie3:Brewerie ={
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2016-07-24T00:00:00.000Z',
      createdAt: '2016-07-24T00:00:00.000Z'
    }
    arr = insertedSorted<Brewerie>(arr,brewerie1, compareBreweries)
    arr = insertedSorted<Brewerie>(arr,brewerie2, compareBreweries)
    arr = insertedSorted<Brewerie>(arr,brewerie3, compareBreweries)
    expect(arr).toEqual([brewerie1, brewerie2, brewerie3])

  })

  it('should insert in order and not match result', () => {
    let arr:Brewerie[] =[]
    const brewerie1:Brewerie = {
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2018-07-24T00:00:00.000Z',
      createdAt: '2018-07-24T00:00:00.000Z'
    }
    const brewerie2:Brewerie ={
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2017-07-24T00:00:00.000Z',
      createdAt: '2017-07-24T00:00:00.000Z'
    }
    const brewerie3:Brewerie ={
      id: 9094,
      name: 'Bnaf, LLC',
      breweryType: 'planning',
      updatedAt: '2016-07-24T00:00:00.000Z',
      createdAt: '2016-07-24T00:00:00.000Z'
    }
    arr = insertedSorted<Brewerie>(arr,brewerie1, compareBreweries)
    arr = insertedSorted<Brewerie>(arr,brewerie2, compareBreweries)
    arr = insertedSorted<Brewerie>(arr,brewerie3, compareBreweries)
    expect(arr).not.toEqual([brewerie3, brewerie1, brewerie3])

  })
})