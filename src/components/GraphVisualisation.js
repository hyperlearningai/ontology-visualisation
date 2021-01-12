import { useRef, useEffect } from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import actions from '../store/actions'
import serialiseNodesEdges from '../utils/serialiseNodesEdges'
import setNetwork from '../utils/setNetwork'
import setNetworkMethods from '../utils/setNetworkMethods'
// import filterNodesToDisplay from '../utils/filterNodesToDisplay'

const GraphVisualisation = ({
  availableNodes,
  availableEdges,
  // searchFilter,
  setStoreState,
  addToArray,
  classesFromApi,
  objectPropertiesFromApi,
  nodesIdsToDisplay,
  // edgesToIgnore,
  physicsHierarchicalView,
  physicsRepulsion,
  physicsEdgeLength,
  triplesPerNode,
  // deletedNodes,
  isNodeSelectable,
  network,
  // selectedNodes,
  // selectedEdges,
  isEdgeSelectable
}) => {
  const visJsRef = useRef(null)

  // update available nodes/edges according to view
  useEffect(() => serialiseNodesEdges({
    nodesIdsToDisplay,
    triplesPerNode,
    classesFromApi,
    objectPropertiesFromApi,
    setStoreState,
    // edgesToIgnore,
    // deletedNodes
  }), [
    nodesIdsToDisplay,
    // edgesToIgnore,
    // deletedNodes
  ])

  // set new Network
  useEffect(() => setNetwork({
    setStoreState,
    visJsRef,
    availableNodes,
    availableEdges,
    physicsHierarchicalView,
    physicsRepulsion,
    physicsEdgeLength
  }), [
    visJsRef,
    availableNodes,
    availableEdges,
    physicsHierarchicalView,
    physicsRepulsion,
    physicsEdgeLength
  ])

  // useEffect(() => {
  //   filterNodesToDisplay({
  //     classesFromApi,
  //     setStoreState,
  //     searchFilter
  //   })
  // }, [searchFilter])

  useEffect(() => setNetworkMethods({
    setStoreState,
    network,
    addToArray,
    isNodeSelectable,
    isEdgeSelectable,
    nodesIdsToDisplay
  }), [
    network,
    isNodeSelectable,
    isEdgeSelectable
  ])

  // useEffect(() => {
  //   const availableNodesIds = availableNodes.map((node) => node.id)

  //   const nodesToAdd = selectedNodes.filter((node) => availableNodesIds.includes(node))

  //   network?.selectNodes(nodesToAdd)
  // }, [
  //   selectedNodes
  // ])

  // useEffect(() => {
  //   const availableEdgesIds = availableEdges.map((edge) => edge.id)

  //   const edgesToAdd = selectedEdges.filter((edge) => availableEdgesIds.includes(edge))

  //   network?.selectEdges(edgesToAdd)
  // }, [
  //   selectedEdges
  // ])

  return (
    <div
      id="network-graph"
      ref={visJsRef}
      style={{
        height: '100%',
        width: '100%'
      }}
    />
  )
}

GraphVisualisation.propTypes = {
  availableNodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  availableEdges: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // searchFilter: PropTypes.string.isRequired,
  setStoreState: PropTypes.func.isRequired,
  addToArray: PropTypes.func.isRequired,
  classesFromApi: PropTypes.shape().isRequired,
  objectPropertiesFromApi: PropTypes.shape().isRequired,
  nodesIdsToDisplay: PropTypes.arrayOf(PropTypes.string).isRequired,
  // edgesToIgnore,
  physicsHierarchicalView: PropTypes.bool.isRequired,
  physicsRepulsion: PropTypes.bool.isRequired,
  physicsEdgeLength: PropTypes.number.isRequired,
  // deletedNodes,
  isNodeSelectable: PropTypes.bool.isRequired,
  network: PropTypes.shape().isRequired,
  triplesPerNode: PropTypes.shape().isRequired,
  // selectedNodes,
  // selectedEdges,
  isEdgeSelectable: PropTypes.bool.isRequired,
}

// GraphVisualisation.defaultProps = {
//   network: undefined,
// }

const mapToProps = ({
  availableNodes,
  availableEdges,
  searchFilter,
  classesFromApi,
  objectPropertiesFromApi,
  nodesIdsToDisplay,
  // edgesToIgnore,
  physicsHierarchicalView,
  physicsRepulsion,
  physicsEdgeLength,
  deletedNodes,
  isNodeSelectable,
  network,
  selectedNodes,
  isEdgeSelectable,
  selectedEdges,
  triplesPerNode
}) => ({
  availableNodes,
  availableEdges,
  searchFilter,
  classesFromApi,
  objectPropertiesFromApi,
  nodesIdsToDisplay,
  // edgesToIgnore,
  physicsHierarchicalView,
  physicsRepulsion,
  physicsEdgeLength,
  deletedNodes,
  isNodeSelectable,
  network,
  selectedNodes,
  isEdgeSelectable,
  selectedEdges,
  triplesPerNode
})

export default connect(
  mapToProps,
  actions
)(GraphVisualisation)
