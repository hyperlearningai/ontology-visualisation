import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NodeNeighbourhood from '../../components/NodeNeighbourhood'
import { OwlClasses } from '../fixtures/test-ontology-classes.json'

const setup = () => {
  const props = {
    setStoreState: jest.fn(),
    updateGraphData: jest.fn(),
    classesFromApi: OwlClasses,
    selectedNeighbourNode: ['http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY'],
  }

  const component = shallow(<NodeNeighbourhood {...props} />)

  return {
    component,
    props
  }
}

describe('NodeNeighbourhood', () => {
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
