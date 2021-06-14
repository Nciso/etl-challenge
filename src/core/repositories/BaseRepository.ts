export abstract class BaseRepository<T> implements Repository<T> {
  abstract getByName(name:string):T | undefined;
}

export interface Repository<T> {
  getByName(name:string):T | undefined;
}