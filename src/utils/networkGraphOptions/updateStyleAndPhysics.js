import highlightSpiderableNodes from '../networkStyling/highlightSpiderableNodes'
import getNodeIds from '../nodesEdgesUtils/getNodeIds'
import store from '../../store'
import setNodesOverlay from '../networkStyling/setNodesOverlay'

/**
 * Node queue to avoid browser freezing
 * @param  {Object}   params
 * @param  {Function} params.setStoreState                setStoreState action
 * @return { undefined }
 */
const updateStyleAndPhysics = ({
  setStoreState,
}) => {
  const {
    network,
    isPhysicsOn,
    physicsRepulsion
  } = store.getState()

  const currentPhysicsOnState = isPhysicsOn
  const currentPhysicsRepulsionState = physicsRepulsion

  // turn physics on to scatter nodes around
  setStoreState('isPhysicsOn', true)
  setStoreState('physicsRepulsion', true)

  // perform highlight check here as nodes' edges are not fully loaded during loop
  highlightSpiderableNodes()
  setNodesOverlay()

  const displayedNodes = getNodeIds()

  // restore isPhysicsOn state
  setTimeout(() => {
    if (!currentPhysicsOnState) {
      setStoreState('isPhysicsOn', false)
    }

    if (!currentPhysicsRepulsionState) {
      setStoreState('physicsRepulsion', false)
    }

    network?.fit({
      animation: false // true
    })
  }, displayedNodes.length > 100 ? 3000 : 1000)
}

export default updateStyleAndPhysics