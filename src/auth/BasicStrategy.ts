
import passportHttp from 'passport-http'
import { UserType } from '../repositories/UserType';
import { Repository } from '../repositories/BaseRepository';
import { UserRepository } from '../repositories/UserRepository';
import { BaseAuthStrategy } from './BaseAuthStrategy';
const BasicStrategy = passportHttp.BasicStrategy;


export class BasicAuthStrategy extends BaseAuthStrategy {
  constructor() {
    super('basic');
  }

  initStrategy(repository: Repository = new UserRepository()) {
    this.strategy = new BasicStrategy(
      (username: string, password: string, done) => {
        let user = repository.getByName(username) as UserType
        if (user && user.password === password) {
          return done(null, {
            user_name: 'autocloud'
          });
        }
        return done(null, false);

      }
    )
  }

  getMiddleware() {
    this.vendor.use(this.strategy)
    const basicAuthMiddleware = this.vendor.authenticate('basic', { session: false })
    return basicAuthMiddleware
  }
}
