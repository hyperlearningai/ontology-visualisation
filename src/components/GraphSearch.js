import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Button } from 'primereact/button'
import GraphSearchCard from './GraphSearchCard'
import { OPERATION_TYPE_UPDATE } from '../constants/store'
import { SIDEBAR_VIEW_GRAPHS } from '../constants/views'
import { ROUTE_NETWORK_GRAPHS } from '../constants/routes'
import actions from '../store/actions'

const GraphSearch = ({
  entrySearchResultsByPage,
  isFirstQuery,
  isSearchLoading,
  searchPageSelected,
  entrySearchValue,
  updateStoreValue
}) => {
  const { t } = useTranslation()

  const searchResults = entrySearchResultsByPage[searchPageSelected]

  return (
    <div className="graph-search">
      {
        isSearchLoading ? (
          <div className="graph-search-loader">
            <ProgressSpinner
              className="spinner"
              strokeWidth="4"
            />
          </div>
        ) : (
          <>
            {
              !isFirstQuery ? (
                <>
                  <h1>{t('searchGraph')}</h1>
                  <p>{t('typeInSidebar')}</p>
                  <p>{t('setAdvancedOptions')}</p>
                </>
              ) : (
                <>
                  {
                    searchResults
                    && searchResults.length > 0
                      ? (
                        <div className="graph-search-results">
                          <div className="graph-search-results-list">
                            {
                            searchResults.map((searchResult, index) => (
                              <GraphSearchCard
                                index={index}
                                key={`graph-card-${searchResult.type}-${searchResult.label}`}
                                searchResult={searchResult}
                              />
                            ))
                          }
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="m-b-5">
                            {t('weCouldNotFindAnyMatchFor')}
                            {' '}
                            <span className="bold italic">{entrySearchValue}</span>
                            .
                          </p>
                          <p className="m-t-5">{t('pleaseTryDifferentQuery')}</p>
                          <Button
                            aria-label={t('visualiseEntireOntology')}
                            label={t('visualiseEntireOntology')}
                            id="visualise-ontology-button"
                            className="m-t-30"
                            onClick={() => {
                              updateStoreValue(['currentGraph'], OPERATION_TYPE_UPDATE, 'graph-0')
                              updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_GRAPHS)
                              window.history.pushState('', '', ROUTE_NETWORK_GRAPHS)
                            }}
                          />
                        </>
                      )
                  }
                </>
              )
            }
          </>
        )
      }
    </div>
  )
}

GraphSearch.propTypes = {
  entrySearchResultsByPage: PropTypes.shape().isRequired,
  isFirstQuery: PropTypes.bool.isRequired,
  isSearchLoading: PropTypes.bool.isRequired,
  searchPageSelected: PropTypes.number.isRequired,
  entrySearchValue: PropTypes.string.isRequired,
  updateStoreValue: PropTypes.func.isRequired,
}

const mapToProps = ({
  isFirstQuery,
  isSearchLoading,
  entrySearchResultsByPage,
  searchPageSelected,
  entrySearchValue
}) => ({
  isFirstQuery,
  isSearchLoading,
  entrySearchResultsByPage,
  searchPageSelected,
  entrySearchValue
})

export default connect(
  mapToProps,
  actions
)(GraphSearch)
