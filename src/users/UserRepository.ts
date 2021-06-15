import { BaseRepository, Repository } from "../core/repositories/BaseRepository";
import {UserType} from "./UserType";
import {users} from './users'

export class UserRepository extends BaseRepository<UserType> {
  private users:UserType[];
  constructor(){
    super()
    this.users = (users as UserType[])

  }

  getByName(name:string): UserType {
    return this.users.find(u => u.name === name)
  }
}