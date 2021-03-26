import { useState } from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { SelectButton } from 'primereact/selectbutton'
import { orderBy, uniqBy } from 'lodash'
import { SIDEBAR_VIEW_EDIT_ONTOLOGY } from '../constants/views'
import actions from '../store/actions'
import EditOntologyAddNode from './EditOntologyAddNode'
import EditOntologyAddEdge from './EditOntologyAddEdge'
import EditOntologyUpdateNode from './EditOntologyUpdateNode'
import EditOntologyDeleteNode from './EditOntologyDeleteNode'
import EditOntologyDeleteEdge from './EditOntologyDeleteEdge'
import EditOntologyRestoreNode from './EditOntologyRestoreNode'
import EditOntologyRestoreEdge from './EditOntologyRestoreEdge'
import getNodeIds from '../utils/nodesEdgesUtils/getNodeIds'
import getNode from '../utils/nodesEdgesUtils/getNode'
import getEdge from '../utils/nodesEdgesUtils/getEdge'
import getEdgeIds from '../utils/nodesEdgesUtils/getEdgeIds'
import { USER_DEFINED_PROPERTY } from '../constants/graph'
import getElementLabel from '../utils/networkStyling/getElementLabel'

const EditOntology = ({
  objectPropertiesFromApi,
  deletedNodes,
  deletedEdges,
}) => {
  const { t } = useTranslation()

  const [operation, setOperation] = useState('add')
  const [type, setType] = useState('node')

  const typeButtonsUpdate = [{
    label: t('node'),
    value: 'node',
    icon: 'pi-circle-off'
  }]

  const typeButtons = [
    ...typeButtonsUpdate,
    {
      value: 'edge',
      label: t('edge'),
      icon: 'pi-arrow-right' // 'pi-sort-alt'
    }]

  const operationButtons = [{
    value: 'add',
    label: t('add'),
    icon: 'pi-plus'
  }, {
    value: 'update',
    label: t('update'),
    icon: 'pi-pencil'
  }, {
    value: 'delete',
    label: t('delete'),
    icon: 'pi-times'
  }, {
    value: 'restore',
    label: t('restore'),
    icon: 'pi-replay'
  }]

  const itemTemplate = (option) => (
    <span className="edit-ontology-row-select-option">
      <i className={`pi ${option.icon}`} />
      {` ${option.label}`}
    </span>
  )

  const availableNodeIds = getNodeIds()

  const availableNodes = availableNodeIds.length > 0 ? availableNodeIds.map(
    (nodeId) => {
      const node = getNode(nodeId)

      const label = getElementLabel({
        type: 'node',
        id: nodeId
      })

      return ({
        value: nodeId,
        label: label || nodeId,
        userDefined: node[USER_DEFINED_PROPERTY]
      })
    }
  ) : []

  const availableEdgeIds = getEdgeIds()

  const optionEdges = availableEdgeIds.length > 0 ? availableEdgeIds.map((edgeId) => {
    const edge = getEdge(edgeId)
    const {
      label,
      from, to,
      userDefined
    } = edge

    const fromLabel = getElementLabel({
      type: 'node',
      id: from
    })

    const toLabel = getElementLabel({
      type: 'node',
      id: to
    })

    const connectionLabel = `${fromLabel} => (${label}) => ${toLabel}`

    return ({
      value: edgeId,
      label: connectionLabel,
      userDefined
    })
  }) : 0

  const availableEdges = orderBy(uniqBy(Object.keys(objectPropertiesFromApi).map(
    (edgeId) => {
      const {
        rdfAbout,
        userDefined
      } = objectPropertiesFromApi[edgeId]

      const label = getElementLabel({
        type: 'edge',
        id: edgeId
      })

      return ({
        value: rdfAbout,
        label,
        userDefined
      })
    }
  ), 'label'), ['label'], ['asc'])

  const deletedNodesList = deletedNodes?.map(
    (nodeId) => {
      const label = getElementLabel({
        type: 'node',
        id: nodeId
      })

      return ({
        value: nodeId,
        label
      })
    }
  )

  const deletedEdgesList = deletedEdges?.map(
    (edgeId) => {
      const label = getElementLabel({
        type: 'edge',
        id: edgeId
      })

      return ({
        value: edgeId,
        label
      })
    }
  )

  return (
    <>
      <h1 className="sidebar-main-title">
        { t(SIDEBAR_VIEW_EDIT_ONTOLOGY)}
      </h1>
      <div className="edit-ontology">
        <div
          className="edit-ontology-row"
        >
          <label htmlFor="operation-select">
            {t('chooseOperation')}
          </label>
          <SelectButton
            id="operation-select"
            value={operation}
            options={operationButtons}
            onChange={(e) => {
              setOperation(e.value)
            }}
            itemTemplate={itemTemplate}
          />
        </div>

        <div
          className="edit-ontology-row"
        >
          <label htmlFor="type-select">
            {t('chooseElementType')}
          </label>
          <SelectButton
            id="type-select"
            value={operation === 'update' ? 'node' : type}
            options={operation === 'update'
              ? typeButtonsUpdate
              : typeButtons}
            onChange={(e) => {
              setType(e.value)
            }}
            itemTemplate={itemTemplate}
          />
        </div>

        {
          operation === 'add'
          && (
            <>
              {
                type === 'edge'
                  ? (
                    <EditOntologyAddEdge
                      optionNodes={availableNodes}
                      optionEdges={availableEdges}
                      type={type}
                      operation={operation}
                    />
                  )
                  : (
                    <EditOntologyAddNode
                      type={type}
                      operation={operation}
                    />
                  )
              }
            </>
          )
        }

        {
          operation === 'update'
          && (
            <EditOntologyUpdateNode
              operation={operation}
              optionNodes={availableNodes}
              optionEdges={availableEdges}
            />
          )
        }

        {
          operation === 'delete'
          && (
            <>
              {
                type === 'edge'
                  ? (
                    <EditOntologyDeleteEdge
                      type={type}
                      operation={operation}
                      optionEdges={optionEdges}
                    />
                  )
                  : (
                    <EditOntologyDeleteNode
                      type={type}
                      operation={operation}
                      optionNodes={availableNodes}
                    />
                  )
              }
            </>
          )
        }

        {
          operation === 'restore'
          && (
            <>
              {
                type === 'edge'
                  ? (
                    <EditOntologyRestoreEdge
                      type={type}
                      operation={operation}
                    />
                  )
                  : (
                    <EditOntologyRestoreNode
                      type={type}
                      operation={operation}
                      optionNodes={deletedNodesList}
                      optionEdges={deletedEdgesList}
                    />
                  )
              }
            </>
          )
        }
      </div>
    </>
  )
}

EditOntology.propTypes = {
  objectPropertiesFromApi: PropTypes.shape().isRequired,
  deletedNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  deletedEdges: PropTypes.arrayOf(PropTypes.string).isRequired,

}

const mapToProps = ({
  objectPropertiesFromApi,
  deletedNodes,
  deletedEdges,
}) => ({
  objectPropertiesFromApi,
  deletedNodes,
  deletedEdges,
})

export default connect(
  mapToProps,
  actions
)(EditOntology)
