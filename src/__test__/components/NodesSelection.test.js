import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { DataSet } from 'vis-data'
import NodesSelection from '../../components/NodesSelection'

const setup = () => {
  const props = {
    resetSelectedNodes: jest.fn(),
    removeFromArray: jest.fn(),
    availableNodes: new DataSet([{
      id: 'abc',
      label: 'label',
      rdfAbout: 'rdfAbout',
      skosComment: 'skosComment',
      skosDefinition: 'skosDefinition',
      skosExample: 'skosExample'
    },
    {
      id: 'cde',
      label: 'label2',
      rdfAbout: 'rdfAbout',
      skosComment: 'skosComment',
      skosDefinition: 'skosDefinition',
      skosExample: 'skosExample'
    }]),
    selectedNodes: ['abc']
  }

  const component = shallow(<NodesSelection {...props} />)

  return {
    component,
    props
  }
}

describe('NodesSelection', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should match snapshot ', () => {
    const {
      component
    } = setup()

    expect(toJson(component)).toMatchSnapshot()
  })
})
