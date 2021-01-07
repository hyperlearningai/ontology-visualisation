import getPhysicsOptions from '../../utils/getPhysicsOptions'

describe('getPhysicsOptions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  // TODO: Improve test once nodes/edges passed as parameters
  it('should work correctly', () => {
    const physicsHierarchicalView = true
    const physicsRepulsion = false
    const physicsEdgeLength = 10

    expect(getPhysicsOptions({
      physicsHierarchicalView,
      physicsRepulsion,
      physicsEdgeLength
    })).toEqual({
      autoResize: true,
      edges: {
        arrows: {
          to: true
        },
        color: '#070b11',
        smooth: {
          forceDirection: 'none',
          roundness: 0.45,
          type: 'cubicBezier'
        }
      },
      layout: {
        hierarchical: {
          enabled: true,
          levelSeparation: 5,
          nodeSpacing: 10,
          sortMethod: 'hubsize',
          treeSpacing: 115
        },
        improvedLayout: false,
        randomSeed: 333
      },
      physics: {
        barnesHut: {
          avoidOverlap: 0.16,
          centralGravity: 0.5,
          damping: 0.19,
          gravitationalConstant: -2000,
          springConstant: 0.1,
          springLength: 10
        },
        enabled: false,
        hierarchicalRepulsion: {
          centralGravity: 0.5,
          damping: 0.12,
          nodeDistance: 10,
          springConstant: 0.1,
          springLength: 120
        },
        minVelocity: 0.75,
        solver: 'barnesHut',
        stabilization: {
          enabled: true,
          iterations: 2000,
          updateInterval: 25
        }
      }
    })
  })
})
