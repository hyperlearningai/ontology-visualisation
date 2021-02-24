/* eslint max-len:0 */
import setOntologyAddConnection from '../../../utils/editOntology/setOntologyAddConnection'
import store from '../../../store'
import { objectPropertiesFromApi } from '../../fixtures/objectPropertiesFromApi'
import { triplesPerNode } from '../../fixtures/triplesPerNodeNew'
import addEdge from '../../../utils/nodesEdgesUtils/addEdge'
import showNotification from '../../../utils/notifications/showNotification'
import en from '../../../i18n/en'
import getEdge from '../../../utils/nodesEdgesUtils/getEdge'
import setNodeStyle from '../../../utils/networkStyling/setNodeStyle'
import setEdgeStylesByProperty from '../../../utils/networkStyling/setEdgeStylesByProperty'
import getNode from '../../../utils/nodesEdgesUtils/getNode'

jest.mock('../../../utils/nodesEdgesUtils/addEdge')
jest.mock('../../../utils/nodesEdgesUtils/getEdge')
jest.mock('../../../utils/nodesEdgesUtils/getNode')
jest.mock('../../../utils/notifications/showNotification')
jest.mock('../../../utils/networkStyling/setNodeStyle')
jest.mock('../../../utils/networkStyling/setEdgeStylesByProperty')

const setStoreState = jest.fn()
const t = (id) => en[id]

describe('setOntologyAddConnection', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly when node exists', async () => {
    const selectedElementProperties = {
      from: '1',
      predicate: '11',
      to: '141',
      optionEdges: [
        {
          value: '11',
          label: 'Provided to'
        }
      ]
    }

    getEdge.mockImplementationOnce(() => ({ id: '123' }))

    store.getState = jest.fn().mockImplementation(() => ({
      objectPropertiesFromApi,
      objectPropertiesFromApiBackup: objectPropertiesFromApi,
      addedConnections: [],
      nodesConnections: {},
      triplesPerNode
    }))

    await setOntologyAddConnection({
      setStoreState,
      selectedElementProperties,
      t
    })

    expect(showNotification.mock.calls[0][0].message.includes('Connection already exists')).toEqual(true)
  })

  it('should work correctly', async () => {
    const selectedElementProperties = {
      from: '1',
      predicate: '11',
      to: '141',
      optionEdges: [
        {
          value: '11',
          label: 'Provided to'
        }
      ]
    }

    getEdge.mockImplementationOnce(() => null)
    getNode.mockImplementation(() => ({ id: 123 }))

    store.getState = jest.fn().mockImplementation(() => ({
      objectPropertiesFromApi,
      objectPropertiesFromApiBackup: objectPropertiesFromApi,
      addedConnections: [],
      nodesConnections: {
        1: [],
        141: []
      },
      triplesPerNode
    }))

    await setOntologyAddConnection({
      setStoreState,
      selectedElementProperties,
      t
    })

    expect(addEdge.mock.calls[0][0].label).toEqual('Provided to')

    expect(setNodeStyle.mock.calls).toEqual([
      [
        {
          nodeId: '1',
        },
      ],
      [
        {
          nodeId: '141',
        },
      ],
    ])

    expect(setEdgeStylesByProperty.mock.calls[0][0].edgeId !== '').toEqual(true)

    const setStoreStateCalls = setStoreState.mock.calls
    expect(setStoreStateCalls[0][0]).toEqual('objectPropertiesFromApi')
    expect(setStoreStateCalls[1][0]).toEqual('objectPropertiesFromApiBackup')
    expect(setStoreStateCalls[2][0]).toEqual('nodesConnections')
    expect(setStoreStateCalls[3][0]).toEqual('triplesPerNode')
    expect(setStoreStateCalls[4][0]).toEqual('addedConnections')
  })
})
