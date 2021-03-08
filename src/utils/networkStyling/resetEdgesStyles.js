import getEdge from '../nodesEdgesUtils/getEdge'
import updateEdges from '../nodesEdgesUtils/updateEdges'
import store from '../../store'
import { USER_DEFINED_PROPERTY } from '../../constants/graph'

/**
 * Reset edges which have been styled
 * @return { undefined }
 */
const resetEdgesStyles = () => {
  const {
    globalEdgeStyling,
    objectPropertiesFromApi
  } = store.getState()

  const availableEdges = getEdge({
    filter: (edge) => !edge[USER_DEFINED_PROPERTY]
  })

  if (availableEdges.length === 0) return false

  const {
    stylingEdgeLineColor,
    stylingEdgeLineColorHighlight,
    stylingEdgeLineColorHover,
    stylingEdgeTextColor,
    stylingEdgeTextSize,
    stylingEdgeTextAlign,
    stylingEdgeWidth,
    stylingEdgeLineStyle,
    stylingEdgeCaptionProperty,
  } = globalEdgeStyling

  const edgeStyle = {
    smooth: {
      type: 'cubicBezier', // 'continuous'
      forceDirection: 'none',
      roundness: 0.45,
    },
    arrows: { to: true },
    color: {
      color: stylingEdgeLineColor,
      highlight: stylingEdgeLineColorHighlight,
      hover: stylingEdgeLineColorHover,
      inherit: 'from',
      opacity: 1.0
    },
    font: {
      color: stylingEdgeTextColor,
      size: stylingEdgeTextSize,
      align: stylingEdgeTextAlign
    },
    labelHighlightBold: true,
    selectionWidth: 3,
    width: stylingEdgeWidth,
    dashes: stylingEdgeLineStyle
  }

  // update edge style
  availableEdges.map((edge) => updateEdges({
    ...edge,
    ...edgeStyle,
    label: objectPropertiesFromApi[edge.id][stylingEdgeCaptionProperty]
      ? objectPropertiesFromApi[edge.id][stylingEdgeCaptionProperty].replace(/ /g, '\n')
      : ''
  }))
}

export default resetEdgesStyles
