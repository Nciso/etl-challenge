import { RemoveNull } from './steps/RemoveNull';
import { BrewerieBuild } from './steps/BrewerieBuild';
import { OrderAndState } from './steps/OrderAndState';
import { AddRegion } from './steps/AddRegion';

const removenNull = new RemoveNull()
const buildObject = new BrewerieBuild()
const orderByState = new OrderAndState()
const addRegionEfficient = new AddRegion()
removenNull.setNext(buildObject)
buildObject.setNext(addRegionEfficient)
addRegionEfficient.setNext(orderByState)

export default removenNull