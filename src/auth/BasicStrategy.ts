
import passportHttp from 'passport-http'
import { UserType } from '../users/UserType';
import { Repository } from '../core/repositories/BaseRepository';
import { UserRepository } from '../users/UserRepository';
import { BaseAuthStrategy } from '../core/auth/BaseAuthStrategy';
const BasicStrategy = passportHttp.BasicStrategy;


export class BasicAuthStrategy extends BaseAuthStrategy<UserType> {
  constructor() {
    super('basic');
  }

  initStrategy(repository: Repository<UserType> = new UserRepository()) {
    this.strategy = new BasicStrategy(
      (username: string, password: string, done) => {
        let user = repository.getByName(username)
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
