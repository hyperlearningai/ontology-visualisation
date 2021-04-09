/* eslint jsx-a11y/label-has-associated-control:0 */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { connect } from 'redux-zero/react'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { orderBy, uniq } from 'lodash'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { MultiSelect } from 'primereact/multiselect'
import { SIDEBAR_VIEW_SYNONYMS } from '../constants/views'
import actions from '../store/actions'
import { MIN_DATE, SORT_FIELDS } from '../constants/synonyms'
import getNode from '../utils/nodesEdgesUtils/getNode'
import SynonymsListAddNew from './SynonymsListAddNew'
import synonymsGetSynonyms from '../utils/synonyms/synonymsGetSynonyms'
import SynonymsListNode from './SynonymsListNode'
import { NODE_TYPE } from '../constants/graph'
import updateHighlightedElement from '../utils/networkStyling/updateHighlightedElement'
import { getElementIdAndType } from '../constants/functions'

const SynonymsList = ({
  nodesSynonyms,
  updateStoreValue,
  selectedElement,
  classesFromApi
}) => {
  const { t } = useTranslation()

  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('dateLastUpdated')
  const [sortDirection, setSortDirection] = useState('asc')
  const [filter, setFilter] = useState(undefined)
  const [filterValue, setFilterValue] = useState('')

  let synonymElementId

  const [elementId, type] = getElementIdAndType(selectedElement)

  if (elementId && type === 'node') {
    synonymElementId = elementId
  }

  useEffect(() => {
    const [newElementId, newType] = getElementIdAndType(selectedElement)

    if (newElementId && newType === 'node') {
      synonymsGetSynonyms({
        selectedElement: newElementId,
        updateStoreValue,
        t
      })
    }
  }, [selectedElement])

  const filterNode = (synonymObject) => {
    if (search === '' && !filter) return true

    if (filter === 'dateCreated' && new Date(synonymObject.dateCreated) < filterValue) return false

    if (filter === 'dateLastUpdated' && new Date(synonymObject.dateLastUpdated) < filterValue) return false

    if (filter === 'userId' && !filterValue.includes(synonymObject.userId)) return false

    return search === '' ? true : synonymObject.synonym && synonymObject.synonym.toLowerCase().includes(search.toLowerCase())
  }

  const nodesSynonymsById = nodesSynonyms.length > 0 && synonymElementId ? nodesSynonyms.filter((synonym) => synonym.nodeId.toString() === synonymElementId.toString()) : []
  let filteredSynonyms = nodesSynonymsById
  const userIdSynonyms = nodesSynonymsById

  if (filteredSynonyms.length > 0) {
    filteredSynonyms = filteredSynonyms.filter((synonym) => filterNode(synonym))
  }

  const userIds = userIdSynonyms.length > 0 ? uniq(userIdSynonyms.map((synonym) => synonym.userId)).map((userId) => ({
    value: userId,
    label: userId
  })) : []

  const availableNodesList = getNode({
    filter: (node) => classesFromApi[node.id][NODE_TYPE]
      && classesFromApi[node.id][NODE_TYPE] === 'class'
  }).map((node) => {
    const { id, label } = node

    return ({
      value: id,
      label
    })
  }).filter((node) => node.label)

  return (
    <>
      <h1 className="sidebar-main-title">
        {t(SIDEBAR_VIEW_SYNONYMS)}
      </h1>

      <div className="synonyms">
        <div className="synonyms-select-row">
          <label htmlFor="synonyms-select-element">
            {t('selectElement')}
          </label>
          <Dropdown
            aria-label="synonyms-select-element"
            id="synonyms-select-element"
            name="synonyms-select-element"
            value={synonymElementId}
            options={availableNodesList}
            onChange={(e) => updateHighlightedElement({
              updateStoreValue,
              id: e.value,
              type: 'node',
            })}
          />
        </div>

        {
          synonymElementId && (
            <SynonymsListAddNew />
          )
        }

        <Divider />

        {
          synonymElementId && (
            <div className="synonyms-list">
              <div htmlFor="synonyms-list-title">
                {t('availableSynonyms')}
              </div>

              <div className="p-input-icon-right synonyms-list-search-input">
                <i className="pi pi-search" />
                <InputText
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('search')}
                  id="synonyms-search-filter"
                />
              </div>

              <div className="synonyms-select-row">
                <label htmlFor="synonyms-select">
                  {t('sortBy')}
                </label>
                <div className="p-inputgroup">
                  <Dropdown
                    aria-label="synonyms-sort-by"
                    id="synonyms-sort-by"
                    value={sortField}
                    options={SORT_FIELDS.map((field) => ({
                      value: field,
                      label: t(field)
                    }))}
                    onChange={(e) => setSortField(e.value)}
                  />
                  <Button
                    aria-label="synonyms-sort-by-direction"
                    id="synonyms-sort-by-direction"
                    tooltip={t(sortDirection === 'asc' ? 'ascending' : 'descending')}
                    tooltipOptions={{ position: 'top' }}
                    icon={sortDirection === 'asc' ? 'pi pi-arrow-down' : 'pi pi-arrow-up'}
                    onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                  />
                </div>
              </div>

              <div className="synonyms-accordion-row">
                <Accordion
                  id="synonyms-filter"
                >
                  <AccordionTab header={t('filter')}>
                    <div className="synonyms-select-row">
                      <label htmlFor="synonyms-filter-field">
                        {t('filterBy')}
                      </label>
                      <Dropdown
                        aria-label="synonyms-filter-field"
                        id="synonyms-filter-field"
                        value={filter}
                        options={SORT_FIELDS.map((field) => ({
                          value: field,
                          label: t(field)
                        }))}
                        onChange={(e) => {
                          setFilterValue('')
                          setFilter(e.value)
                        }}
                      />
                    </div>

                    {
                    filter === 'userId' && (
                      <div className="synonyms-select-row">
                        <label htmlFor="synonyms-select">
                          {t('selectUserIds')}
                        </label>
                        <MultiSelect
                          id="synonyms-filter-user"
                          value={filterValue}
                          filter
                          options={userIds}
                          onChange={(e) => setFilterValue(e.value)}
                        />
                      </div>
                    )
                  }

                    {
                    (
                      filter === 'dateCreated'
                      || filter === 'dateLastUpdated'
                    ) && (
                      <div className="synonyms-select-row">
                        <Calendar
                          minDate={new Date(MIN_DATE)}
                          maxDate={new Date()}
                          value={filterValue || MIN_DATE}
                          onChange={(e) => setFilterValue(e.value)}
                          inline
                        />
                      </div>
                    )
                  }

                  </AccordionTab>
                </Accordion>
              </div>

              {
              filteredSynonyms.length > 0
              && orderBy(filteredSynonyms, [sortField], [sortDirection]).map((synonym) => (
                <SynonymsListNode
                  key={`synonym-card-${synonym.id}`}
                  synonymObject={synonym}
                />
              ))
            }
            </div>
          )
        }
      </div>
    </>
  )
}

SynonymsList.propTypes = {
  nodesSynonyms: PropTypes.arrayOf(PropTypes.shape).isRequired,
  updateStoreValue: PropTypes.func.isRequired,
  selectedElement: PropTypes.shape(),
  classesFromApi: PropTypes.shape().isRequired
}

SynonymsList.defaultProps = {
  selectedElement: undefined
}

const mapToProps = ({
  nodesSynonyms,
  selectedElement,
  classesFromApi
}) => ({
  nodesSynonyms,
  selectedElement,
  classesFromApi
})

export default connect(
  mapToProps,
  actions
)(SynonymsList)
