export interface IETLProcess<T> {
  perform():Promise<T>
}

export abstract class BaseETL<T> implements IETLProcess<T> {
  abstract perform():Promise<T>
  protected abstract extract():void
  protected abstract transform():void
  protected abstract load():Promise<T>
}