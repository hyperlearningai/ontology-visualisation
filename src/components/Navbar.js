import React from 'react'
import { connect } from 'redux-zero/react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  BsSearch,
} from 'react-icons/bs'
import actions from '../store/actions'

const Navbar = ({
  setStoreState,
  isSearchOpen,
  availableNodesNormalised,
  availableEdgesNormalised
}) => {
  const { t } = useTranslation()

  return (
    <nav>
      <div className="nav-left">
        <span>
          {`${t('nodes')}: ${Object.keys(availableNodesNormalised).length} | ${t('edges')}: ${Object.keys(availableEdgesNormalised).length}`}
        </span>
      </div>

      <div className="nav-right">
        <button
          type="button"
          title={t('search')}
          className={isSearchOpen ? 'nav-right-button-selected' : ''}
          onClick={() => setStoreState('isSearchOpen', !isSearchOpen)}
        >
          <BsSearch />
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  setStoreState: PropTypes.func.isRequired,
  availableNodesNormalised: PropTypes.shape().isRequired,
  availableEdgesNormalised: PropTypes.shape().isRequired,
}

const mapToProps = ({
  isSearchOpen,
  availableNodesNormalised,
  availableEdgesNormalised
}) => ({
  isSearchOpen,
  availableNodesNormalised,
  availableEdgesNormalised
})

export default connect(
  mapToProps,
  actions
)(Navbar)
