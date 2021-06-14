export interface IETLProcess<T> {
  extract():void 
  transform():void
  load():Promise<T>
  perform():Promise<T>
}

export abstract class BaseETL<T> implements IETLProcess<T> {
  abstract perform():Promise<T>
  abstract extract():void
  abstract transform():void
  abstract load():Promise<T>
}