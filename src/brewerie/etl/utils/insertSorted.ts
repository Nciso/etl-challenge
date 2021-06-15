import { Brewerie } from '../../../brewerie/types/BrewerieTypes';


export function compareBreweries(a:Brewerie, b:Brewerie) {
  return Date.parse(a.createdAt) > Date.parse(b.createdAt)
}

export function insertedSorted<T>(arr:T[], current:T, compare: (a:T, b:T)=>boolean):T[] {
  arr.push(current);
  let i = arr.length - 1;
  let item = arr[i];
  while (i > 0 && compare(item, arr[i-1])) {
      arr[i] = arr[i-1];
      i -= 1;
  }
  arr[i] = item;
  return arr;
}