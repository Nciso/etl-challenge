import { Polygon, Point } from './Polygon'

let westRawPoints = [
  [-124.572773, 48.837153],
  [-123.163948, 32.162244],
  [-103.124886, 32.125035],
  [-102.280483, 40.853033],
  [-104.017696, 41.047641],
  [-104.026966, 48.999028],
  [-124.572773, 48.837153]
]

let southRawPoints =[
  [-106.486359, 32.072247],
  [-103.278351, 29.007089],
  [-97.433624, 25.966842],
  [-76.05835, 24.958203],
  [-75.299778, 39.632267],
  [-82.788162, 39.600795],
  [-90.858994, 36.312635],
  [-94.695282, 36.850642],
  [-101.446209, 37.156623],
  [-102.655907, 36.880444],
  [-103.01897, 32.133466],
  [-106.486359, 32.072247]
]

let midWestRawPoint =[
  [-104.022675, 48.89339],
  [-104.110565, 41.012807],
  [-102.00222, 40.699121],
  [-102.822075, 36.907078],
  [-90.671883, 36.25341],
  [-83.077583, 39.37571],
  [-80.643768, 39.740722],
  [-80.871391, 49.85193],
  [-104.022675, 48.89339]
]

let northEastRawPoints = [
  [-80.980568, 49.965135],
  [-60.279922, 50.983289],
  [-58.533096, 45.341287],
  [-75.363121, 37.32212],
  [-75.406723, 39.715902],
  [-80.547638, 39.728313],
  [-80.980568, 49.965135]
]
const regionsNames = ['west', 'south', 'midwest', 'northeast']
const rawPoints = [westRawPoints, southRawPoints, midWestRawPoint, northEastRawPoints]

export const usRegions = rawPoints.map((raw, idx) => {
  let points: Point[] = raw.map(p => {
    let [lon, lat] = p
    return { lat, lon }
  })
  return new Polygon(points, regionsNames[idx])
})


