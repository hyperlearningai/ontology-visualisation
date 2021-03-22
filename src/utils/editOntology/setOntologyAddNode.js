import store from '../../store'
import showNotification from '../notifications/showNotification'
import { NOTIFY_SUCCESS, NOTIFY_WARNING } from '../../constants/notifications'
import addNode from '../nodesEdgesUtils/addNode'
import setNodeStyle from '../networkStyling/setNodeStyle'
import { API_ENDPOINT_GRAPH_NODES_CREATE } from '../../constants/api'
import httpCall from '../apiCalls/httpCall'
import checkNodeVisibility from '../networkGraphOptions/checkNodeVisibility'

/**
 * ADd ontology nodes
 * @param  {Object}         params
 * @param  {Function}       params.addNumber                  addNumber action
 * @param  {Function}       params.setStoreState              setStoreState action
 * @param  {Object}         params.selectedElementProperties  Element properties from form
 * @param  {Function}       params.toggleFromSubArray        toggleFromSubArray action
 * @param  {Function}       params.t                          i18n function
 * @return {undefined}
 */
const setOntologyAddNode = async ({
  addNumber,
  setStoreState,
  selectedElementProperties,
  toggleFromSubArray,
  t
}) => {
  const {
    nodesEdges,
    classesFromApi,
    classesFromApiBackup,
    addedNodes,
    totalEdgesPerNode,
    totalEdgesPerNodeBackup,
    userDefinedNodeStyling,
  } = store.getState()

  const {
    stylingNodeBorder,
    stylingNodeBorderSelected,
    stylingNodeTextFontSize,
    stylingNodeTextColor,
    stylingNodeTextFontAlign,
    stylingNodeShape,
    stylingNodeBackgroundColor,
    stylingNodeBorderColor,
    stylingNodeHighlightBackgroundColor,
    stylingNodeHighlightBorderColor,
    stylingNodeHoverBackgroundColor,
    stylingNodeHoverBorderColor,
    stylingNodeSize,
    stylingNodeCaptionProperty,
  } = userDefinedNodeStyling

  const newClassesFromApi = JSON.parse(JSON.stringify(classesFromApi))
  const newClassesFromApiBackup = JSON.parse(JSON.stringify(classesFromApiBackup))
  const newNodesEdges = JSON.parse(JSON.stringify(nodesEdges))
  const newEdgesPerNode = JSON.parse(JSON.stringify(totalEdgesPerNode))
  const newEdgesPerNodeBackup = JSON.parse(JSON.stringify(totalEdgesPerNodeBackup))

  const body = JSON.parse(JSON.stringify(selectedElementProperties))
  body.label = 'class'

  const response = await httpCall({
    addNumber,
    withAuth: true,
    route: API_ENDPOINT_GRAPH_NODES_CREATE,
    method: 'post',
    body,
    t
  })

  const {
    error, data
  } = response

  let message = t('couldNotAddNode')
  if (error) {
    return showNotification({
      message,
      type: NOTIFY_WARNING
    })
  }

  if (!data || Object.keys(data).length !== 1) {
    return showNotification({
      message,
      type: NOTIFY_WARNING
    })
  }

  const { id, userDefined } = data[Object.keys(data)[0]]

  // add to classesFromApi
  newClassesFromApi[id] = {
    ...selectedElementProperties,
    userDefined,
    id
  }

  // add label
  newClassesFromApi[id].label = selectedElementProperties[stylingNodeCaptionProperty]
    ? selectedElementProperties[stylingNodeCaptionProperty].replace(/ /g, '\n') : ''

  // add array for new node in nodes edges connections
  newNodesEdges[id] = []
  newEdgesPerNode[id] = []
  newEdgesPerNodeBackup[id] = []

  // add as backup
  newClassesFromApiBackup[id] = newClassesFromApi[id]

  // add node style
  const nodeStyle = {
    borderWidth: stylingNodeBorder,
    borderWidthSelected: stylingNodeBorderSelected,
    font: {
      size: stylingNodeTextFontSize,
      color: stylingNodeTextColor,
      align: stylingNodeTextFontAlign,
      face: 'Montserrat',
      bold: '700'
    },
    shape: stylingNodeShape,
    color: {
      background: stylingNodeBackgroundColor,
      border: stylingNodeBorderColor,
      highlight: {
        background: stylingNodeHighlightBackgroundColor,
        border: stylingNodeHighlightBorderColor,
      },
      hover: {
        background: stylingNodeHoverBackgroundColor,
        border: stylingNodeHoverBorderColor,
      },
    },
    size: stylingNodeSize
  }

  const newAddedNodes = [
    ...addedNodes,
    ...[id]
  ]

  setStoreState('classesFromApiBackup', newClassesFromApiBackup)
  setStoreState('classesFromApi', newClassesFromApi)
  setStoreState('nodesEdges', newNodesEdges)
  setStoreState('totalEdgesPerNode', newEdgesPerNode)
  setStoreState('totalEdgesPerNodeBackup', newEdgesPerNodeBackup)
  setStoreState('addedNodes', newAddedNodes)

  const isVisible = checkNodeVisibility({
    nodeId: id,
    toggleFromSubArray,
  })

  if (isVisible) {
    addNode({
      node: {
        ...newClassesFromApi[id],
        ...nodeStyle
      },
      addNumber
    })

    setNodeStyle({
      nodeId: id,
    })
  }

  message = `${t('nodeAdded')}: ${id}`

  showNotification({
    message,
    type: NOTIFY_SUCCESS
  })
}

export default setOntologyAddNode
