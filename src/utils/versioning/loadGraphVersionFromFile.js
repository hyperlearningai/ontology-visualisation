import { NOTIFY_DANGER, NOTIFY_SUCCESS } from '../../constants/notifications'
import showNotification from '../showNotification'
import validateGraphVersionFile from './validateGraphVersionFile'

const loadGraphVersionFromFile = ({
  addToObject,
  files,
  setLoading,
  t
}) => {
  setLoading(true)
  const fileReader = new FileReader()

  fileReader.onload = () => {
    try {
      const graphVersion = JSON.parse(fileReader.result)

      const isValid = validateGraphVersionFile({
        graphVersion
      })

      if (!isValid) {
        showNotification({
          message: t('graphVersionFileNotValid'),
          type: NOTIFY_DANGER,
        })
      } else {
        showNotification({
          message: t('graphVersionLoaded'),
          type: NOTIFY_SUCCESS,
        })

        addToObject('graphVersions', files[0].name.replace('.json', ''), graphVersion)
      }

      setLoading(false)

      return false
    } catch (e) {
      setLoading(false)

      showNotification({
        message: t('graphVersionFileNotValid'),
        type: NOTIFY_DANGER,
      })

      return false
    }
  }

  fileReader.readAsText(files[0])
}

export default loadGraphVersionFromFile
