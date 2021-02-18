import getEdgeObject from './getEdgeObject'
import showEdgeCheck from './showEdgeCheck'
import addConnections from './addConnections'
import store from '../../store'
import appendNode from './appendNode'
import clearNodes from '../nodesEdgesUtils/clearNodes'
import clearEdges from '../nodesEdgesUtils/clearEdges'
import countNodes from '../nodesEdgesUtils/countNodes'
import countEdges from '../nodesEdgesUtils/countEdges'
import setElementsStyle from '../networkStyling/setElementsStyle'

/**
 * Update store and graph based on node IDs to display
 * @param  {Object}   params
 * @param  {Function} params.setStoreState           setStoreState action
 * @return { undefined }
 */
const addElementsToGraph = ({
  setStoreState,
}) => {
  const {
    classesFromApi,
    edgesIdsToDisplay,
    nodesIdsToDisplay,
    objectPropertiesFromApi,
    triplesPerNode,
    stylingNodeCaptionProperty,
    isPhysicsOn
  } = store.getState()

  const currentPhysicsOnState = isPhysicsOn

  // turn physics off to speed up loading time when restoring large graphsa
  if (currentPhysicsOnState) {
    setStoreState('isPhysicsOn', false)
  }

  // reset nodes/edges (display at the end of the function)
  clearEdges()
  clearNodes()

  const addedNodes = []
  const addedEdges = []
  const nodesConnections = {}
  const edgesConnections = {}

  if (!nodesIdsToDisplay || nodesIdsToDisplay.length === 0) return false

  for (let i = 0; i < nodesIdsToDisplay.length; i++) {
    const nodeId = nodesIdsToDisplay[i]
    const nodeIdObject = classesFromApi[nodeId]
    const triples = triplesPerNode[nodeId]
    nodeIdObject.id = nodeId
    nodeIdObject.label = nodeIdObject[stylingNodeCaptionProperty]
      ? nodeIdObject[stylingNodeCaptionProperty].replace(/ /g, '\n') : ''

    appendNode({
      addedNodes,
      nodeId,
      nodeIdObject,
    })

    if (triples && triples.length > 0) {
      triples.map((triple) => {
        const {
          from,
          predicate,
          to
        } = triple

        if (!objectPropertiesFromApi[predicate]) return false

        const {
          id,
          edgeConnection,
          edge,
          fromObject,
          toObject
        } = getEdgeObject({
          from,
          predicate,
          to
        })

        const isEdgeDisplayable = showEdgeCheck({
          addedEdges,
          id,
          predicate,
          from,
          to,
          edgesIdsToDisplay,
          nodesIdsToDisplay
        })

        if (isEdgeDisplayable) {
          addConnections({
            addedEdges,
            id,
            edge,
            edgesConnections,
            edgeConnection,
            predicate,
            from,
            to,
            nodesConnections,
            nodesIdsToDisplay,
            edgesIdsToDisplay,
          })

          appendNode({
            addedNodes,
            nodeId: to,
            nodeIdObject: toObject,
          })

          appendNode({
            addedNodes,
            nodeId: from,
            nodeIdObject: fromObject,
          })
        }

        return true
      })
    }
  }

  setStoreState('availableNodesCount', countNodes())
  setStoreState('availableEdgesCount', countEdges())
  setStoreState('nodesConnections', JSON.parse(JSON.stringify(nodesConnections)))
  setStoreState('edgesConnections', JSON.parse(JSON.stringify(edgesConnections)))

  // set styles
  setElementsStyle()

  // turn physics on to scatter nodes around
  setStoreState('isPhysicsOn', true)

  // restore isPhysicsOn state
  setTimeout(() => {
    if (!currentPhysicsOnState) {
      setStoreState('isPhysicsOn', false)
    }
  }, 3000)
}

export default addElementsToGraph
