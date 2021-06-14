import passport from "passport";
import { Repository } from '../repositories/BaseRepository';
export abstract class BaseAuthStrategy {
  protected vendor = passport
  protected strategy: passport.Strategy;
  constructor(stragegyName: string) {
    this.vendor.initialize()
  }

  abstract initStrategy(repository: Repository): void

  abstract getMiddleware(): (req: any, res: any) => void

}