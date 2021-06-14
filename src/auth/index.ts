
import {BasicAuthStrategy} from './BasicStrategy'

const basicStrategy = new BasicAuthStrategy()
basicStrategy.initStrategy()
const authMiddlewere = basicStrategy.getMiddleware()

export { authMiddlewere }