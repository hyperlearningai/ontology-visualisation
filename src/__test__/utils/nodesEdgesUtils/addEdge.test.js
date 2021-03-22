import { DataSet } from 'vis-data'
import addEdge from '../../../utils/nodesEdgesUtils/addEdge'
import store from '../../../store'

const addNumber = jest.fn()
const toggleFromArrayInKey = jest.fn()

describe('addEdge', () => {
  it('should not add edge if existing correctly', async () => {
    const availableEdges = new DataSet([
      {
        id: '123'
      }
    ])

    store.getState = () => ({
      availableEdges
    })

    await addEdge({
      addNumber,
      edge: {
        id: '123'
      },
      toggleFromArrayInKey
    })

    expect(availableEdges.length).toEqual(1)
    expect(addNumber).toHaveBeenCalledTimes(0)
  })

  it('should add edge correctly', async () => {
    const availableEdges = new DataSet()
    store.getState = () => ({
      availableEdges
    })

    await addEdge({
      addNumber,
      edge: {
        id: '123'
      },
      toggleFromArrayInKey
    })

    expect(availableEdges.length).toEqual(1)
    expect(addNumber).toHaveBeenCalledWith('availableEdgesCount', 1)
  })
})
