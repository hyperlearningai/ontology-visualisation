import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NodesSelection from '../../components/NodesSelection'

const setup = () => {
  const props = {
    resetSelectedNodes: jest.fn(),
    removeFromArray: jest.fn(),
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
