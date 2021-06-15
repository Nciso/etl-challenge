import { Polygon, Point } from '../../polygons/Polygon'

describe('Polygon', () => {
  it('should mark the point as inside', () => {
    let rawPoints = [
      [-124.572773, 48.837153],
      [-123.163948, 32.162244],
      [-103.124886, 32.125035],
      [-102.280483, 40.853033],
      [-104.017696, 41.047641],
      [-104.026966, 48.999028],
      [-124.572773, 48.837153]
    ]
    let points: Point[] = rawPoints.map(p => {
      let [lon, lat] = p
      return { lat, lon }
    })
    let fence = new Polygon(points,'west')
    let lasVegas = {lat:36.114647, lon:	-115.172813}
    let result = fence.isInside(lasVegas)
    expect(result).toEqual(true)
    let newYork = {lat:40.712772, lon:-74.006058}
    result = fence.isInside(newYork)
    expect(result).toEqual(false)
  })
})