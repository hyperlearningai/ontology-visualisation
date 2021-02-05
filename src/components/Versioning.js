import { useState } from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Button } from 'primereact/button'
import { SelectButton } from 'primereact/selectbutton'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { FileUpload } from 'primereact/fileupload'
import { ProgressSpinner } from 'primereact/progressspinner'
import { SIDEBAR_VIEW_VERSIONING } from '../constants/views'
import actions from '../store/actions'
import setGraphVersion from '../utils/versioning/setGraphVersion'
import saveGraphVersion from '../utils/versioning/saveGraphVersion'
import loadGraphVersionFromFile from '../utils/versioning/loadGraphVersionFromFile'

const Versioning = ({
  selectedGraphVersion,
  graphVersions,
  setStoreState,
  addToObject
}) => {
  const { t } = useTranslation()

  const [mode, setMode] = useState('search')
  const [location, setLocation] = useState('server')
  const [selectedVersion, setSelectedVersion] = useState(selectedGraphVersion)
  const [versionName, setVersionName] = useState('')
  const [loading, setLoading] = useState(false)

  const newEditButtons = [{
    label: t('search'),
    value: 'search',
    icon: 'pi-key'
  }, {
    value: 'new',
    label: t('new'),
    icon: 'pi-file'
  }, {
    value: 'save',
    label: t('save'),
    icon: 'pi-download'
  }, {
    value: 'load',
    label: t('load'),
    icon: 'pi-upload'
  }]

  const localRemoteButtons = [{
    label: t('server'),
    value: 'server',
    icon: 'pi-cloud'
  }, {
    value: 'file',
    label: t('file'),
    icon: 'pi-file'
  }]

  const itemTemplate = (option) => (
    <span className="versioning-row-select-option">
      <i className={`pi ${option.icon}`} />
      {` ${option.label}`}
    </span>
  )

  const availableGraphVersions = Object.keys(graphVersions).map((graphVersion) => ({
    label: graphVersion,
    value: graphVersion
  }))

  return (
    <>
      <div className="sidebar-main-title">
        { t(SIDEBAR_VIEW_VERSIONING)}
      </div>
      <div className="versioning">
        <div
          className="versioning-row"
        >
          <label htmlFor="type-select">
            {t('chooseOperation')}
          </label>

          <SelectButton
            id="type-selects"
            value={mode}
            options={newEditButtons}
            onChange={(e) => setMode(e.value)}
            itemTemplate={itemTemplate}
          />
        </div>

        {
          (mode === 'search'
          || mode === 'save') && (
            <div
              className="versioning-row"
            >
              <label htmlFor="graph-select">
                {t('chooseGraphVersion')}
              </label>

              <Dropdown
                id="graph-select"
                value={selectedVersion}
                options={availableGraphVersions}
                onChange={(e) => setSelectedVersion(e.value)}
                placeholder={t('selectGraph')}
              />
            </div>
          )
        }

        {
          mode === 'save' && (
            <div
              className="versioning-row"
            >
              <label htmlFor="location-select">
                {t('chooseLocation')}
              </label>

              <SelectButton
                id="location-selects"
                value={location}
                options={localRemoteButtons}
                onChange={(e) => setLocation(e.value)}
                itemTemplate={itemTemplate}
              />
            </div>
          )
        }

        {
          mode === 'new' && (
            <>
              <div
                className="versioning-row"
              >
                <label htmlFor="graph-name">
                  {t('insertGraphVersion')}
                </label>

                <InputText
                  id="graph-name"
                  value={versionName}
                  placeholder={t('insertGraphVersion')}
                  onChange={(e) => setVersionName(e.target.value)}
                />
              </div>

              <div
                className="versioning-row"
              >
                <label htmlFor="from-graph-select">
                  {t('fromGraphVersion')}
                </label>
                <Dropdown
                  id="from-graph-select"
                  value={selectedVersion}
                  options={availableGraphVersions}
                  onChange={(e) => setSelectedVersion(e.value)}
                  placeholder={t('selectGraph')}
                />
              </div>
            </>
          )
        }

        <div className="versioning-row">
          {
            mode === 'load' && (
              <>
                {loading
                  ? <ProgressSpinner />
                  : (
                    <FileUpload
                      name="graphVersion"
                      url={undefined}
                      uploadHandler={(e) => loadGraphVersionFromFile({
                        addToObject,
                        files: e.files,
                        setLoading,
                        t
                      })}
                      customUpload
                      auto
                      uploadLabel={t('load')}
                      accept="application/json"
                      maxFileSize={1000000}
                      emptyTemplate={<p className="p-m-0">{t('dragAndDrop')}</p>}
                    />
                  )}

              </>
            )
          }

          {
            mode === 'save' && (
              <Button
                className="go-button"
                tooltip={`${t('save')}`}
                onClick={() => saveGraphVersion({
                  location,
                  selectedVersion,
                  t
                })}
                label={t('save')}
                icon="pi pi-chevron-right"
                iconPos="right"
              />
            )
          }

          {
            (
              mode === 'search'
              || mode === 'new') && (
                <Button
                  className="go-button"
                  tooltip={`${t('setGraph')}`}
                  onClick={() => setGraphVersion({
                    mode,
                    selectedVersion,
                    versionName,
                    setStoreState,
                    addToObject
                  })}
                  label={t('setGraph')}
                  icon="pi pi-chevron-right"
                  iconPos="right"
                />
            )
          }

        </div>
      </div>
    </>
  )
}

Versioning.propTypes = {
  setStoreState: PropTypes.func.isRequired,
  addToObject: PropTypes.func.isRequired,
  selectedGraphVersion: PropTypes.string.isRequired,
  graphVersions: PropTypes.shape().isRequired,
}

const mapToProps = ({
  selectedGraphVersion,
  graphVersions
}) => ({
  selectedGraphVersion,
  graphVersions
})

export default connect(
  mapToProps,
  actions
)(Versioning)
