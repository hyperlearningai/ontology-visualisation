import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import HeadTags from '../components/HeadTags'
import HeaderComponent from '../components/HeaderComponent'
import checkAuthAtStartup from '../utils/auth/checkTokenValidity'
import actions from '../store/actions'

const Index = ({
  updateStoreValue,
  user,
}) => {
  const { t } = useTranslation()

  const router = useRouter()

  // check if authenticated, otherwise redirect to login
  useEffect(() => {
    if (!user.isGuest && user.email === '') {
      checkAuthAtStartup({
        router,
        updateStoreValue
      })
    }
  },
  [])

  return (
    <>
      <HeadTags
        title=""
        description={t('ontologyVisualisationDescription')}
      />

      {
        (user.email !== ''
        || user.isGuest) && (
          <>
            <HeaderComponent />
          </>
        )
      }

    </>
  )
}

Index.propTypes = {
  updateStoreValue: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
}

const mapPropsToState = ({
  user
}) => ({
  user
})

export default connect(
  mapPropsToState,
  actions
)(Index)
