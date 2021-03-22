import setOntologyDeleteNode from './setOntologyDeleteNode'
import setOntologyUpdateNode from './setOntologyUpdateNode'
import setOntologyAddNode from './setOntologyAddNode'
import setOntologyRestoreNode from './setOntologyRestoreNode'
import setOntologyAddEdge from './setOntologyAddEdge'
import setOntologyDeleteEdge from './setOntologyDeleteEdge'
import setOntologyRestoreEdge from './setOntologyRestoreEdge'

/**
 * Set graph full data
 * @param  {Object}         params
 * @param  {Function}       params.addNumber                  addNumber action
 * @param  {String}         params.operation                  Operation mode [add / update / delete / restore]
 * @param  {String|Array}   params.selectedElement            Selected node(s)/edge(s) IDs
 * @param  {String}         params.type                       Element type (node / edge)
 * @param  {Function}       params.setStoreState              setStoreState action
 * @param  {Object}         params.selectedElementProperties  Element properties from form
 * @return {undefined}
 */
const setOntology = ({
  operation,
  type,
  selectedElement,
  setStoreState,
  selectedElementProperties,
  addNumber,
  toggleFromArrayInKey,
  t
}) => {
  if (operation === 'restore') {
    if (type === 'node') {
      setOntologyRestoreNode({
        addNumber,
        selectedElement,
        setStoreState,
        toggleFromArrayInKey,
        t
      })
    }

    if (type === 'edge') {
      setOntologyRestoreEdge({
        selectedElement,
        setStoreState,
        addNumber,
        toggleFromArrayInKey,
        t
      })
    }
  }

  if (operation === 'delete') {
    if (type === 'node') {
      setOntologyDeleteNode({
        selectedElement,
        setStoreState,
        addNumber,
        toggleFromArrayInKey,
        t
      })
    }

    if (type === 'edge') {
      setOntologyDeleteEdge({
        setStoreState,
        selectedElement,
        addNumber,
        toggleFromArrayInKey,
        t
      })
    }
  }

  if (operation === 'update') {
    if (type === 'node') {
      setOntologyUpdateNode({
        selectedElement,
        setStoreState,
        selectedElementProperties,
        toggleFromArrayInKey,
        addNumber,
        t
      })
    }
  }

  if (operation === 'add') {
    if (type === 'node') {
      setOntologyAddNode({
        addNumber,
        setStoreState,
        selectedElementProperties,
        t
      })
    }

    if (type === 'edge') {
      setOntologyAddEdge({
        setStoreState,
        selectedElementProperties,
        toggleFromArrayInKey,
        addNumber,
        t,
      })
    }
  }
}

export default setOntology
