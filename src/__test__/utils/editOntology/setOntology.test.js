/* eslint max-len:0 */
import setOntology from '../../../utils/editOntology/setOntology'
import setOntologyDeleteNode from '../../../utils/editOntology/setOntologyDeleteNode'
import setOntologyUpdateNode from '../../../utils/editOntology/setOntologyUpdateNode'
import setOntologyAddNode from '../../../utils/editOntology/setOntologyAddNode'
import setOntologyRestoreNode from '../../../utils/editOntology/setOntologyRestoreNode'

jest.mock('../../../utils/editOntology/setOntologyDeleteNode')
jest.mock('../../../utils/editOntology/setOntologyUpdateNode')
jest.mock('../../../utils/editOntology/setOntologyAddNode')
jest.mock('../../../utils/editOntology/setOntologyRestoreNode')
const selectedElement = 'id-123'
const setStoreState = jest.fn()
const selectedElementProperties = { rdfsLabel: 'id-123' }
const addToObject = jest.fn()

describe('setOntology', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly when type node and operation restore', async () => {
    const operation = 'restore'
    const type = 'node'

    await setOntology({
      operation,
      type,
      selectedElement,
      setStoreState,
      selectedElementProperties,
      addToObject
    })

    expect(setOntologyRestoreNode).toHaveBeenCalledWith({
      selectedElement,
      setStoreState,
      addToObject
    })
  })

  it('should work correctly when type node and operation delete', async () => {
    const operation = 'delete'
    const type = 'node'

    await setOntology({
      operation,
      type,
      selectedElement,
      setStoreState,
      selectedElementProperties,
      addToObject
    })

    expect(setOntologyDeleteNode).toHaveBeenCalledWith({
      selectedElement,
      setStoreState,
      addToObject
    })
  })

  it('should work correctly when type node and operation update', async () => {
    const operation = 'update'
    const type = 'node'

    await setOntology({
      operation,
      type,
      selectedElement,
      setStoreState,
      selectedElementProperties,
      addToObject
    })

    expect(setOntologyUpdateNode).toHaveBeenCalledWith({
      selectedElement,
      setStoreState,
      selectedElementProperties,
      addToObject
    })
  })

  it('should work correctly when type node and operation add', async () => {
    const operation = 'add'
    const type = 'node'

    await setOntology({
      operation,
      type,
      selectedElement,
      setStoreState,
      selectedElementProperties,
      addToObject
    })

    expect(setOntologyAddNode).toHaveBeenCalledWith({
      setStoreState,
      selectedElementProperties,
      addToObject
    })
  })
})