import { SELECTED_NODE_COLOR } from '../../constants/graph'
import addNode from '../nodesEdgesUtils/addNode'
import getNode from '../nodesEdgesUtils/getNode'
import getSpiralCoordinates from './getSpiralCoordinates'
import store from '../../store'

let step = 0

/**
 * Add node to arrays/objects
 * @param  {Object}   params
 * @param  {Array}    params.addedNodes               Array of nodes IDs being added
 * @param  {String}   params.nodeId                   Node ID
 * @param  {Object}   params.nodeIdObject             Node ID object
 * @param  {Array}    params.shortestPathNodes        Array of nodes IDs in shortest path
 * @return { undefined }
 */
const appendNode = ({
  addedNodes,
  nodeId,
  nodeIdObject,
  shortestPathNodes,
  circleMax,
  padding,
  angle
}) => {
  const {
    isNodeOverlay,
    highlightedNodes,
  } = store.getState()

  if (!addedNodes.includes(nodeId)
  && getNode(nodeId) === null
  && nodeIdObject.label
  && nodeIdObject.label !== ''
  ) {
    const extendedNodeObject = JSON.parse(JSON.stringify(nodeIdObject))

    if (highlightedNodes.includes(nodeId)) {
      extendedNodeObject.color = {
        background: SELECTED_NODE_COLOR
      }
    } else if (isNodeOverlay && !shortestPathNodes.includes(nodeId)) {
      extendedNodeObject.opacity = 0.1
    }

    const { x, y } = getSpiralCoordinates({
      circleMax,
      padding,
      step,
      angle
    })
    extendedNodeObject.x = x
    extendedNodeObject.y = y
    step += 1

    addNode(extendedNodeObject)
    addedNodes.push(nodeId)
  }
}

export default appendNode
