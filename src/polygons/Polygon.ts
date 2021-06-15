export interface Point {
  lat: number,
  lon: number
}

interface Segment {
  start: Point
  finish: Point
}

function createRayCast(p: Point): Segment {
  return {
    start: p,
    finish: { lat: p.lat + 100000, lon: p.lon }
  }
}

export class Polygon {
  private points: Point[];
  private segments: Segment[]
  private _name: string;
  constructor(points: Point[], name: string) {
    this.points = points
    this._name = name
    this.segments = []
    this.calculateSegments()
  }

  public get name() {
    return this._name;
  }

  private calculateSegments() {
    for (let i = 1; i < this.points.length; i++) {
      const start = this.points[i - 1]
      const finish = this.points[i]
      this.segments.push({ start, finish })
    }
  }

  /* Uses produc X between points, ref=https://www.youtube.com/watch?v=4bIsntTiKfM */
  private intersect(segment1: Segment, segment2: Segment): boolean {
    const a = segment1.start;
    const b = segment1.finish;
    const c = segment2.start;
    const d = segment2.finish;
    const cmp = { lon: c.lon - a.lon, lat: c.lat - a.lat };
    const r = { lon: b.lon - a.lon, lat: b.lat - a.lat };
    const s = { lon: d.lon - c.lon, lat: d.lat - c.lat };

    const cmpxr = cmp.lon * r.lat - cmp.lat * r.lon;
    const cmpxs = cmp.lon * s.lat - cmp.lat * s.lon;
    const rxs = r.lon * s.lat - r.lat * s.lon;
    if (cmpxr === 0)
      return ((c.lon - a.lon < 0) !== (c.lon - b.lon < 0))
        || ((c.lat - a.lat < 0) !== (c.lat - b.lat < 0));
    if (rxs === 0)
      return false;

    const rxsr = 1 / rxs;
    const t = cmpxs * rxsr;
    const u = cmpxr * rxsr;
    return (t >= 0) && (t <= 1) && (u >= 0) && (u <= 1);
  }

  public isInside(p: Point): boolean {
    const rayCast = createRayCast(p)
    let count = 0
    for (const s of this.segments) {
      if (this.intersect(s, rayCast)) {
        count++
      }
    }
    return (count % 2 !== 0)

  }
}