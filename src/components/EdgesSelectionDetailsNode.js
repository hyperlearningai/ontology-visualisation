import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { Button } from 'primereact/button'
import actions from '../store/actions'
import { RESERVED_PROPERTIES } from '../constants/graph'

const EdgesSelectionDetailsNode = ({
  node,
}) => {
  const { t } = useTranslation()
  const [isExpanded, toggleExpanded] = useState(false)

  const nodeProperties = Object.keys(node).filter((key) => !RESERVED_PROPERTIES.includes(key)).sort()

  const {
    label
  } = node

  return (
    <div className="elements-selection-details-node">
      <div className="elements-selection-details-node-button">
        <Button
          label={label}
          aria-label={label}
          onClick={() => toggleExpanded(!isExpanded)}
          iconPos="right"
          icon={isExpanded ? 'pi pi-arrow-down' : 'pi pi-arrow-right'}
        />
      </div>

      {
        isExpanded && (
          <div className="elements-selection-details-table elements-selection-details-table-properties">
            {nodeProperties.map((property) => (
              <div
                key={`details-node-${label}-${property}`}
                className="elements-selection-details-table-row"
              >
                <div className="light-bold">
                  {property}
                </div>
                <div>
                  {node[property] || t('null')}
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

EdgesSelectionDetailsNode.propTypes = {
  node: PropTypes.shape().isRequired,
}

export default connect(
  null,
  actions
)(EdgesSelectionDetailsNode)
