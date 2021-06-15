import { RemoveNull } from './steps/RemoveNull';
import { BrewerieBuild } from './steps/BrewerieBuild';
import { OrderAndState } from './steps/OrderAndState';
import { AddRegionMap } from './steps/AddRegionMap';
import { AddRegion } from './steps/AddRegion';

const removenNull = new RemoveNull()
const buildObject = new BrewerieBuild()
const orderByState = new OrderAndState()
const addRegionEfficient = new AddRegion()
const addRegion = new AddRegionMap()
removenNull.setNext(buildObject)
buildObject.setNext(orderByState)
orderByState.setNext(addRegion)


export default removenNull