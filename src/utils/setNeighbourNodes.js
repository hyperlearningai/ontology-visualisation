import { ALGO_TYPE_NEIGHBOURHOOD } from '../constants/algorithms'
import { SIDEBAR_VIEW_GRAPHS } from '../constants/views'
import store from '../store'

/**
 * Set neighbout nodes
 * @param  {Object}   params
 * @param  {Number}   params.separationDegree          Separation degree integer
 * @param  {Function} params.setStoreState             setStoreState action
 * @param  {Function} params.updateGraphData           update graph data function
 * @return
 */
const setNeighbourNodes = ({
  separationDegree,
  setStoreState,
  updateGraphData
}) => {
  const {
    classesFromApi,
    selectedNeighbourNode,
    lastGraphIndex,
    triplesPerNode,
  } = store.getState()

  const newGraphIndex = lastGraphIndex + 1

  const newCurrentGraph = `graph-${newGraphIndex}`

  const selectedNodeId = classesFromApi[selectedNeighbourNode] ? classesFromApi[selectedNeighbourNode].id : ''
  const label = `neighbourhood-${newCurrentGraph}`

  const graphValue = {
    label,
    type: ALGO_TYPE_NEIGHBOURHOOD,
    options: {
      selectedNodeId,
      separationDegree,
      triplesPerNode
    }
  }

  updateGraphData(newCurrentGraph, graphValue)
  setStoreState('currentGraph', newCurrentGraph)
  setStoreState('lastGraphIndex', newGraphIndex)
  setStoreState('sidebarView', SIDEBAR_VIEW_GRAPHS)
}

export default setNeighbourNodes