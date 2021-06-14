import passport from "passport";
import { Repository } from '../repositories/BaseRepository';
export abstract class BaseAuthStrategy<T> {
  protected vendor = passport
  protected strategy: passport.Strategy;
  constructor(stragegyName: string) {
    this.vendor.initialize()
  }

  abstract initStrategy(repository: Repository<T>): void

  abstract getMiddleware(): (req: any, res: any) => void

}