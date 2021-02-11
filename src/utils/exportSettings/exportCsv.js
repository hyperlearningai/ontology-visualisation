/* eslint no-param-reassign:0 */
/* eslint new-cap:0 */
import JSZip from 'jszip'
import { unparse } from 'papaparse'
import {
  NOTIFY_SUCCESS,
  NOTIFY_WARNING
} from '../../constants/notifications'
import showNotification from '../showNotification'
import extractCsvRows from './extractCsvRows'
import downloadBlob from './downloadBlob'
import store from '../../store'
import getNodeIds from '../nodesEdgesUtils/getNodeIds'
import getNode from '../nodesEdgesUtils/getNode'

/**
 * Export data as csv
 * @param  {Object}   params
 * @param  {String}   params.exportFileName             File name
 * @param  {Function} params.t                          i18n translation function
 * @return { undefined }
 */
const exportCsv = async ({
  exportFileName,
  t
}) => {
  const {
    objectPropertiesFromApi,
  } = store.getState()

  const nodeIds = getNodeIds()
  const edgeIds = Object.keys(objectPropertiesFromApi)

  const firstNode = getNode(nodeIds[0])

  const nodeKeys = Object.keys(firstNode)
    .filter((key) => key !== 'owlAnnotationProperties'
      && key !== 'rdfsSubClassOf').sort()

  const firstEdge = objectPropertiesFromApi[edgeIds[0]]
  const edgeKeys = Object.keys(firstEdge)
    .filter((key) => (
      key !== 'owlAnnotationProperties'
      && key !== 'rdfsSubPropertyOf')).sort()

  const { basicData, fullData } = extractCsvRows({
    nodeKeys,
    edgeKeys,
  })

  const zip = new JSZip()

  const basicCsvData = unparse(basicData)

  await zip.file(`${exportFileName}-basic.csv`, basicCsvData)

  const fullCsvData = unparse(fullData)

  await zip.file(`${exportFileName}-full.csv`, fullCsvData)

  try {
    zip.generateAsync({ type: 'blob' }).then((blob) => {
      const fileName = `${exportFileName || 'network-graph'}.zip`

      downloadBlob({
        blob,
        fileName
      })

      showNotification({
        message: t('fileCanBeDownloaded'),
        type: NOTIFY_SUCCESS,
      })
    })
  } catch (e) {
    showNotification({
      message: t('couldNotDownloadCsv'),
      type: NOTIFY_WARNING
    })
  }
}

export default exportCsv