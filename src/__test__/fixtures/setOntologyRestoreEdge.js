/* eslint max-len:0 */
import { OwlClasses } from './test-ontology-classes'
import { OwlObjectProperties } from './test-ontology-object-properties'

const deletedEdges = Object.keys(OwlObjectProperties).slice(2, 4)
const deletedNodes = Object.keys(OwlClasses).slice(0, 4)

const newClassesFromApi = JSON.parse(JSON.stringify(OwlClasses))
const newObjectPropertiesFromApi = JSON.parse(JSON.stringify(OwlObjectProperties))

deletedEdges.map((edgeId) => {
  delete newObjectPropertiesFromApi[edgeId]
  return true
})

deletedNodes.map((nodeId) => {
  delete newClassesFromApi[nodeId]
  return true
})

// newClassesFromApi['http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9'].rdfsSubClassOf = newClassesFromApi['http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9'].rdfsSubClassOf.filter((item) => item.classRdfAbout !== 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M')

newObjectPropertiesFromApi['http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8'] = {
  owlAnnotationProperties: {
    'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
    'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies when or where another Entity has been chosen.',
  },
  rdfAbout: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
  rdfsLabel: 'Selected in',
  rdfsSubPropertyOf: [
    'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
  ],
  skosComment: null,
  skosDefinition: 'Relationship that specifies when or where another Entity has been chosen.',
}

newObjectPropertiesFromApi['http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC'] = {
  owlAnnotationProperties: {
    'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
    'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to define the Entity that gathers different values and status information about another Entity.',
  },
  rdfAbout: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
  rdfsLabel: 'Measured by',
  rdfsSubPropertyOf: [
    'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
  ],
  skosComment: null,
  skosDefinition: 'Relationship used to define the Entity that gathers different values and status information about another Entity.',
}

export const addToObjectFixture = {
  addedNodes: [],
  classesFromApi: newClassesFromApi,
  classesFromApiBackup: OwlClasses,
  deletedEdges: [
    'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
    'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
  ],
  objectPropertiesFromApi: newObjectPropertiesFromApi,
  objectPropertiesFromApiBackup: OwlObjectProperties,
  updatedNodes: [],
  deletedNodes: [],
  addedEdges: [],
  updatedEdges: [],
  deletedConnections: [],
  addedConnections: [],
}

export const setStoreStateFixture = [
  [
    'deletedEdges',
    [
      'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
      'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
    ],
  ],
  [
    'objectPropertiesFromApi',
    {
      'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
        rdfsLabel: 'Instantiation of',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: null,
      },
      'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the stage, document or place where an Entity is offered or suggested for consideration, acceptance, or action.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
        rdfsLabel: 'Proposed in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the stage, document or place where an Entity is offered or suggested for consideration, acceptance, or action.',
      },
      'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies when or where another Entity has been chosen.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
        rdfsLabel: 'Selected in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies when or where another Entity has been chosen.',
      },
      'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to define the Entity that gathers different values and status information about another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
        rdfsLabel: 'Measured by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to define the Entity that gathers different values and status information about another Entity.',
      },
      'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship specifying the artifact that contains the main points or short statement of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
        rdfsLabel: 'Summarised in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship specifying the artifact that contains the main points or short statement of another Entity.',
      },
      'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that caused the creation of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
        rdfsLabel: 'Created for',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that caused the creation of another Entity.',
      },
      'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that gives guidance and recommendation to other Entities.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
        rdfsLabel: 'Advised by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that gives guidance and recommendation to other Entities.',
      },
      'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity (person or system) that carries out an activity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
        rdfsLabel: 'Performed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity (person or system) that carries out an activity.',
      },
      'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the means used to sent out or put forth an Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP',
        rdfsLabel: 'Issued through',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the means used to sent out or put forth an Entity.',
      },
      'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Financial',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that explains how an Entity is broken down into a set of smaller Entities.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
        rdfsLabel: 'Itemised by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that explains how an Entity is broken down into a set of smaller Entities.',
      },
      'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the Entity that is an expression of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
        rdfsLabel: 'Represented by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the Entity that is an expression of another Entity.',
      },
      'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that discovers or identifies the presence or existence of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
        rdfsLabel: 'Detected by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that discovers or identifies the presence or existence of another Entity.',
      },
      'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Restriction',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the indispensable and necessary existence of one Entity to accomplish another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
        rdfsLabel: 'Required for',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the indispensable and necessary existence of one Entity to accomplish another Entity.',
      },
      'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Participation',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that defines the Entity responsible for negotiating and accepting the terms of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
        rdfsLabel: 'Agreed with',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that defines the Entity responsible for negotiating and accepting the terms of another Entity.',
      },
      'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that defines the Entity that assesses another Entity formally with the intention of instituting change if necessary.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
        rdfsLabel: 'Reviewed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that defines the Entity that assesses another Entity formally with the intention of instituting change if necessary.',
      },
      'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#definition': "When the 'root' Entity affects, influences, acts upon, advises or has an outgoing Relationship to the 'tail' Entity.",
        },
        rdfAbout: 'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        rdfsLabel: 'Affects',
        rdfsSubPropertyOf: [
          'http://www.w3.org/2002/07/owl#topObjectProperty',
        ],
        skosComment: null,
        skosDefinition: "When the 'root' Entity affects, influences, acts upon, advises or has an outgoing Relationship to the 'tail' Entity.",
      },
      'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to identify the location where different values related to an Entity were gathered.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
        rdfsLabel: 'Measured at',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to identify the location where different values related to an Entity were gathered.',
      },
      'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#comment': '"Employ" is a homonym meaning it has more than one meaning. This Relationship does not relate to the alternative definition: "to make use of".',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes when an Entity gives work to, and pays, another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
        rdfsLabel: 'Employed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: '"Employ" is a homonym meaning it has more than one meaning. This Relationship does not relate to the alternative definition: "to make use of".',
        skosDefinition: 'Relationship that describes when an Entity gives work to, and pays, another Entity.',
      },
      'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Transfer',
          'http://www.w3.org/2004/02/skos/core#comment': 'The difference with "Provided to" is that "Issued to" implies there is a legal or contractural arrangement applied.',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the receiver of, and implies a responsibility for, an Entity that has been sent out or put forth.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf',
        rdfsLabel: 'Issued to',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: 'The difference with "Provided to" is that "Issued to" implies there is a legal or contractural arrangement applied.',
        skosDefinition: 'Relationship that specifies the receiver of, and implies a responsibility for, an Entity that has been sent out or put forth.',
      },
      'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity (a role, system or organisation) that brings into existance another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
        rdfsLabel: 'Created by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity (a role, system or organisation) that brings into existance another Entity.',
      },
      'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Participation',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to define the Entity inside which the activities related to other Entities are controlled.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
        rdfsLabel: 'Managed within',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to define the Entity inside which the activities related to other Entities are controlled.',
      },
      'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Restriction',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that restraints or exercises direction over another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
        rdfsLabel: 'Controlled by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that restraints or exercises direction over another Entity.',
      },
      'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the Entity that increases the value of another Entity by bringing it into a better condition.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
        rdfsLabel: 'Improved through',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the Entity that increases the value of another Entity by bringing it into a better condition.',
      },
      'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Used to define the activities that are contained within a whole group of activities.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
        rdfsLabel: 'Included in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Used to define the activities that are contained within a whole group of activities.',
      },
      'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#comment': 'These Relationships are likely to become Attributes of Entities in Logical and Physical Models.',
          'http://www.w3.org/2004/02/skos/core#definition': 'Characteristics intrinsically linked to the Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        rdfsLabel: 'Properties',
        rdfsSubPropertyOf: [
          'http://www.w3.org/2002/07/owl#topObjectProperty',
        ],
        skosComment: 'These Relationships are likely to become Attributes of Entities in Logical and Physical Models.',
        skosDefinition: 'Characteristics intrinsically linked to the Entity.',
      },
      'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the system or person modifying the information of an Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
        rdfsLabel: 'Updated by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the system or person modifying the information of an Entity.',
      },
      'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Used',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity (it can be a person or system) controlling the functioning of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs',
        rdfsLabel: 'Operated by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity (it can be a person or system) controlling the functioning of another Entity.',
      },
      'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that defines who possesses or manages another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
        rdfsLabel: 'Owned by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that defines who possesses or manages another Entity.',
      },
      'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Time Restriction',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that represents a chronological order that the activities need to follow.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
        rdfsLabel: 'Completed before',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that represents a chronological order that the activities need to follow.',
      },
      'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to define the Entity that takes charge or care of, or coordinates the activities of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
        rdfsLabel: 'Managed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to define the Entity that takes charge or care of, or coordinates the activities of another Entity.',
      },
      'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the impact an Entity can have on other Entities.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
        rdfsLabel: 'Affected by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the impact an Entity can have on other Entities.',
      },
      'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the Entity used to gather information or understand the current status of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
        rdfsLabel: 'Identified by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the Entity used to gather information or understand the current status of another Entity.',
      },
      'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the document containing information about an Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
        rdfsLabel: 'Presented in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the document containing information about an Entity.',
      },
      'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Used to specify the Person or Role asking for some sort of information, artefact, service, or Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
        rdfsLabel: 'Requested by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Used to specify the Person or Role asking for some sort of information, artefact, service, or Entity.',
      },
      'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that links the Entities requested in a process for a specific aim and the Entity where they are used.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
        rdfsLabel: 'Input into',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that links the Entities requested in a process for a specific aim and the Entity where they are used.',
      },
      'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Restriction',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the Entity that exercises a directing or restraining influence over another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
        rdfsLabel: 'Governed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the Entity that exercises a directing or restraining influence over another Entity.',
      },
      'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that defines the location from where another Entity takes place.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
        rdfsLabel: 'Performed from',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that defines the location from where another Entity takes place.',
      },
      'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Used to define the activity, system or documentation where an Entity or set of data information is stored.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
        rdfsLabel: 'Recorded in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Used to define the activity, system or documentation where an Entity or set of data information is stored.',
      },
      'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity responsible for making another Entity taking place.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY',
        rdfsLabel: 'Triggered by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity responsible for making another Entity taking place.',
      },
      'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Financial Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the mean used to transfer money for a specific purpose.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul',
        rdfsLabel: 'Paid through',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the mean used to transfer money for a specific purpose.',
      },
      'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity (it can be a person or system) that sents out or puts forth in any form another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
        rdfsLabel: 'Issued by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity (it can be a person or system) that sents out or puts forth in any form another Entity.',
      },
      'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that says or estimates that another Entity will happen in the future or will be a consequence of something.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
        rdfsLabel: 'Predicted by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that says or estimates that another Entity will happen in the future or will be a consequence of something.',
      },
      'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Financial',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity used to compare and check financial accounts or amounts.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
        rdfsLabel: 'Reconciled by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity used to compare and check financial accounts or amounts.',
      },
      'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that makes another Entity available.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
        rdfsLabel: 'Provided by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that makes another Entity available.',
      },
      'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that interacts with the current status or value of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
        rdfsLabel: 'Applied to',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that interacts with the current status or value of another Entity.',
      },
      'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to define the Entity that produces an effect, result, or condition on another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
        rdfsLabel: 'Caused by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to define the Entity that produces an effect, result, or condition on another Entity.',
      },
      'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#definition': "When the 'root' Entity is affected by, influenced by, acted upon, advised by or has an incoming Relationship from the 'tail' Entity.",
        },
        rdfAbout: 'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        rdfsLabel: 'is Affected by',
        rdfsSubPropertyOf: [
          'http://www.w3.org/2002/07/owl#topObjectProperty',
        ],
        skosComment: null,
        skosDefinition: "When the 'root' Entity is affected by, influenced by, acted upon, advised by or has an incoming Relationship from the 'tail' Entity.",
      },
      'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Participation Used',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that puts another Entity to a particular purpose.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
        rdfsLabel: 'Used by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that puts another Entity to a particular purpose.',
      },
      'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Participation Responsibility',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF',
        rdfsLabel: 'Attended by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: null,
      },
      'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that defines the Entity that provides the information or knowledge needed by another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
        rdfsLabel: 'Informed by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that defines the Entity that provides the information or knowledge needed by another Entity.',
      },
      'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location',
          'http://www.w3.org/2004/02/skos/core#definition': 'Used to specify the place or Entity where an activity takes place.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
        rdfsLabel: 'Performed on',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Used to specify the place or Entity where an activity takes place.',
      },
      'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationships required for the Entity to be able to perform its role.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        rdfsLabel: 'Operation of',
        rdfsSubPropertyOf: [
          'http://www.w3.org/2002/07/owl#topObjectProperty',
        ],
        skosComment: null,
        skosDefinition: 'Relationships required for the Entity to be able to perform its role.',
      },
      'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality Transfer',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the process involved to come into possession of another Entity through an effort or by a request.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
        rdfsLabel: 'Obtained through',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the process involved to come into possession of another Entity through an effort or by a request.',
      },
      'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Used',
          'http://www.w3.org/2004/02/skos/core#definition': 'It defines the Entities that utilizes other Entities for a specific purpose.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
        rdfsLabel: 'Used in',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'It defines the Entities that utilizes other Entities for a specific purpose.',
      },
      'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility Participation',
          'http://www.w3.org/2004/02/skos/core#definition': 'Used to define the person or object to whom/which an action is performed.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
        rdfsLabel: 'Conducted for',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'Used to define the person or object to whom/which an action is performed.',
      },
      'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location Time',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the limits where an Entity is enclosed.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
        rdfsLabel: 'Bounded by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the limits where an Entity is enclosed.',
      },
      'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Responsibility',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the  Entity that observes and checks the progress or quality of another Entity over a period of time.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w',
        rdfsLabel: 'Monitored by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the  Entity that observes and checks the progress or quality of another Entity over a period of time.',
      },
      'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Transfer',
          'http://www.w3.org/2004/02/skos/core#comment': 'The difference with "Issued to" is that "Issued to" implies there is a legal or contractural arrangement applied.',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the receiver of an Entity that has been sent out or put forth.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
        rdfsLabel: 'Provided to',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: 'The difference with "Issued to" is that "Issued to" implies there is a legal or contractural arrangement applied.',
        skosDefinition: 'Relationship that specifies the receiver of an Entity that has been sent out or put forth.',
      },
      'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to identify or establish the position of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
        rdfsLabel: 'Located at',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to identify or establish the position of another Entity.',
      },
      'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Causality',
          'http://www.w3.org/2004/02/skos/core#definition': 'It specifies the Entity used to put in place or put into effect another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
        rdfsLabel: 'Implemented through',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R864k4trK0sb0XWCVmIQkLN',
        ],
        skosComment: null,
        skosDefinition: 'It specifies the Entity used to put in place or put into effect another Entity.',
      },
      'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the way an Entity explicitly names another Entity or its state at a particular level of detail.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET',
        rdfsLabel: 'Represented within',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the way an Entity explicitly names another Entity or its state at a particular level of detail.',
      },
      'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Financial',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the role, organisation or party that will provide resources to finance another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
        rdfsLabel: 'Funded by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the role, organisation or party that will provide resources to finance another Entity.',
      },
      'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that specifies the Entity that is connected to another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
        rdfsLabel: 'Associated with',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that specifies the Entity that is connected to another Entity.',
      },
      'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ': {
        owlAnnotationProperties: {
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes when one Entity is in some way made up or comprised of another Entity or Entities.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
        rdfsLabel: 'Composed of',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes when one Entity is in some way made up or comprised of another Entity or Entities.',
      },
      'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Participation',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship that describes the success in bringing about or reaching an Entity by effort, skill, or courage of another Entity.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
        rdfsLabel: 'Achieved by',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship that describes the success in bringing about or reaching an Entity by effort, skill, or courage of another Entity.',
      },
      'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN': {
        owlAnnotationProperties: {
          'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Location',
          'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the place or system from where an Entity is controlled.',
        },
        rdfAbout: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
        rdfsLabel: 'Operated from',
        rdfsSubPropertyOf: [
          'http://webprotege.stanford.edu/RDWUwRcLiaC4DTUFG8M99SF',
        ],
        skosComment: null,
        skosDefinition: 'Relationship used to specify the place or system from where an Entity is controlled.',
      },
      'http://www.w3.org/2000/01/rdf-schema#subclassof': {
        rdfAbout: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
        rdfsLabel: 'subClassOf',
      },
      'http://www.w3.org/2002/07/owl#topObjectProperty': {
        owlAnnotationProperties: {},
        rdfAbout: 'http://www.w3.org/2002/07/owl#topObjectProperty',
        rdfsLabel: null,
        rdfsSubPropertyOf: [],
        skosComment: null,
        skosDefinition: null,
      },
    },
  ],
  [
    'nodesConnections',
    {
      'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
      ],
      'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
      ],
      'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
        },
      ],
      'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv': [
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
        },
      ],
      'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
      ],
      'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL': [
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
      ],
      'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
      ],
      'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9': [
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
        },
      ],
      'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV': [
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
        },
      ],
      'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
        },
      ],
      'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT': [
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
      ],
      'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
      ],
      'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
      ],
      'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc': [
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU': [
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
        },
      ],
      'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo': [
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
        },
      ],
      'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m': [
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
        },
      ],
      'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
        },
      ],
      'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi': [
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
        },
      ],
      'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF': [
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY': [
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
      ],
      'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On': [
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
      ],
      'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4': [
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF',
          to: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
        },
      ],
      'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10': [
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
        },
      ],
      'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS': [
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
        },
      ],
      'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx': [
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
      ],
      'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7': [
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku': [
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
      ],
      'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX': [
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
      ],
      'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ': [
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
      ],
      'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF': [
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
        },
      ],
      'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
        },
      ],
      'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp': [
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4': [
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
        },
      ],
      'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv': [
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
      ],
      'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L': [
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
      ],
      'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
      ],
      'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
      ],
      'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep': [
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj': [
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
        },
      ],
      'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6': [
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
      ],
      'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J': [
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
        },
      ],
      'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d': [
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB': [
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a': [
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
        },
      ],
      'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed': [
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl': [
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
      ],
      'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
      ],
      'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp': [
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
      ],
      'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1': [
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj': [
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
      ],
      'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi': [
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF': [
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
      ],
      'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq': [
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
        },
      ],
      'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9': [
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
        },
      ],
      'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
      ],
      'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
      ],
      'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
      ],
      'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf': [
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
        },
      ],
      'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm': [
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
        },
      ],
      'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE': [
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
        },
      ],
      'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb': [
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
        },
      ],
      'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D': [
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO': [
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI': [
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
      ],
      'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb': [
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK': [
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
      ],
      'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs': [
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
        },
      ],
      'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI': [
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
        },
      ],
      'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF': [
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf': [
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
      ],
      'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q': [
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn': [
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
        },
      ],
      'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T': [
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw': [
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We': [
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA': [
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF',
          to: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
      ],
      'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
      ],
      'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2': [
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
      ],
      'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh': [
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP': [
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92': [
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u': [
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D': [
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
        },
      ],
      'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG': [
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ': [
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw': [
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb': [
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9': [
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
        },
      ],
      'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
        },
      ],
      'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR': [
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
        },
      ],
      'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP': [
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT': [
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
        },
      ],
      'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp': [
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3': [
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
        },
      ],
      'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa': [
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
        },
      ],
      'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7': [
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
      ],
      'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
        },
      ],
      'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG': [
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB': [
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN': [
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp': [
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx': [
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5': [
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c': [
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK': [
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu': [
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
      ],
      'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4': [
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
        },
      ],
      'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw': [
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO': [
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj': [
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl': [
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
        },
      ],
      'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN': [
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW': [
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64': [
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
      ],
      'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M': [
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
      ],
      'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM': [
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC': [
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy': [
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
      ],
      'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS': [
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
    },
  ],
  [
    'edgesConnections',
    {
      'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM': [
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'node-234',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd': [
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'node-234',
          to: 'node-123',
        },
        {
          from: 'node-234',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8': [
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          to: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          to: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
        },
      ],
      'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr': [
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          to: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
        },
      ],
      'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP': [
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH': [
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio': [
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa': [
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
      ],
      'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3': [
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB': [
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf': [
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF': [
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
        },
      ],
      'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I': [
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs': [
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG': [
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          to: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
        },
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          to: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          to: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
        },
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          to: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          to: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          to: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          to: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
        },
      ],
      'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          to: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
      ],
      'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn': [
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          to: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
        },
      ],
      'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3': [
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          to: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          to: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0': [
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
        },
      ],
      'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx': [
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
      ],
      'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          to: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          to: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
      ],
      'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
      ],
      'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul': [
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq': [
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9': [
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF': [
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
        },
      ],
      'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv': [
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          to: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          to: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
        },
      ],
      'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          to: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
        },
      ],
      'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8': [
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
      ],
      'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065': [
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          to: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          to: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw': [
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx': [
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w': [
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
      ],
      'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET': [
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF': [
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
      ],
      'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX': [
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
      ],
      'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0': [
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
      ],
      'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN': [
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          to: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://www.w3.org/2000/01/rdf-schema#subclassof': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R83VJMr2iUDDav8mz3n6ZyH',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Y5iEV0xhBtSZMrtzLdmwd',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDElsJe5LORtLxEeWbSDg6',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
        },
        {
          from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R57wpQtXmxYodxNBUKJoHw',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R735Cwtcs6mgZedTI2DBpFK',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R7HiLUbGfj2jk0NdEMQOdqg',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
        {
          from: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QV72ON1DRX7lQMsI664VX',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7UAD7hI7XyoTLSlVXwBj3k',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R83KomHAvFWv2pVoHXCAC7M',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RC5ZXWmz7smNKNWCml5Qpag',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7hlktFumJq5RpggEzEv2xi',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/R7l0LqjYK03DLCUM5XgsbGk',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          to: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uyEOgEefntHVYBIC2NiKg',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7ziZlwBCU3dDShTGeoBjYR',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R90aygbYv017nv5YsP99s5',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
        {
          from: 'http://webprotege.stanford.edu/RCpn3euDDZoEVpKziwFE4aj',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M5tsloLX3FmQ8zhHm557c',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1hQyhkkb26ULmQUnfG6ZU',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R8VPKVDGeDVRPQznK4rL0ea',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8WBh27Gnp1NKNtna6SezKw',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R8mqmfFAtvpjQNyrdiVTAmG',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RBBDxx5ZaIbg5ASqGAeyKGg',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBKQgaabYcnNDy5hL7YKCKt',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCrgRyMOzbaY6vxlnONgyzo',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RXys68405bldLT5N3pTI0u',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RVEDTAVDTgNluHGUPlPX9J',
          to: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9rGNbOyamlUxw3GXZW6JNZ',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sA1G9BzdA86yphqD4fNjc',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yEJN7QRZGgDnJ1KJShD95',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/R9x2FGn2Yb9iaiedpwWEJVo',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwvKVBMMMUesirDL2C2S1O',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBAlLULVgXcsNnd1xsx2HSl',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/RBhZTpXvMJckgjC601QBKzJ',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCKcLqulWWTzL6ScVnH2THQ',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDE8IdD6V4U77NkZN35I7um',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDQ3FIM55jTOW9ihNUws27R',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCLiKaIHnEwymIeVs5NA1jv',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RDC5EKiryOl11nNkRsAOoeJ',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          to: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RH0Rqaoh9tWxGJbhW433i9',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RZZvs7EyCxdgLfuUREbiPY',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/ReVBAW9BDkF6kpl6UmYCrZ',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
      ],
    },
  ],
  [
    'triplesPerNode',
    {
      'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R83VJMr2iUDDav8mz3n6ZyH',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Y5iEV0xhBtSZMrtzLdmwd',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDElsJe5LORtLxEeWbSDg6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
        },
      ],
      'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': [
        {
          from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
      ],
      'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
      ],
      'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf': [
        {
          from: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
      ],
      'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
        },
      ],
      'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
      ],
      'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv': [
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
        },
      ],
      'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
      ],
      'http://webprotege.stanford.edu/R57wpQtXmxYodxNBUKJoHw': [
        {
          from: 'http://webprotege.stanford.edu/R57wpQtXmxYodxNBUKJoHw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
      ],
      'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL': [
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
      ],
      'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
      ],
      'http://webprotege.stanford.edu/R735Cwtcs6mgZedTI2DBpFK': [
        {
          from: 'http://webprotege.stanford.edu/R735Cwtcs6mgZedTI2DBpFK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9': [
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
        },
      ],
      'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV': [
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R7HiLUbGfj2jk0NdEMQOdqg': [
        {
          from: 'http://webprotege.stanford.edu/R7HiLUbGfj2jk0NdEMQOdqg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
      ],
      'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
        {
          from: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
      ],
      'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm': [
        {
          from: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
        },
      ],
      'http://webprotege.stanford.edu/R7QV72ON1DRX7lQMsI664VX': [
        {
          from: 'http://webprotege.stanford.edu/R7QV72ON1DRX7lQMsI664VX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
      ],
      'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT': [
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
      ],
      'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
      ],
      'http://webprotege.stanford.edu/R7UAD7hI7XyoTLSlVXwBj3k': [
        {
          from: 'http://webprotege.stanford.edu/R7UAD7hI7XyoTLSlVXwBj3k',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
      ],
      'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
      ],
      'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R83KomHAvFWv2pVoHXCAC7M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RC5ZXWmz7smNKNWCml5Qpag',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
      ],
      'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc': [
        {
          from: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/R7f3MFJaUN2W4LPV62BVWCH',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU': [
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
        },
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
        },
      ],
      'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo': [
        {
          from: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
        },
      ],
      'http://webprotege.stanford.edu/R7hlktFumJq5RpggEzEv2xi': [
        {
          from: 'http://webprotege.stanford.edu/R7hlktFumJq5RpggEzEv2xi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
      ],
      'http://webprotege.stanford.edu/R7l0LqjYK03DLCUM5XgsbGk': [
        {
          from: 'http://webprotege.stanford.edu/R7l0LqjYK03DLCUM5XgsbGk',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m': [
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
        },
      ],
      'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
        },
      ],
      'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi': [
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
        },
      ],
      'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF': [
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R7uyEOgEefntHVYBIC2NiKg': [
        {
          from: 'http://webprotege.stanford.edu/R7uyEOgEefntHVYBIC2NiKg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
      ],
      'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY': [
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
      ],
      'http://webprotege.stanford.edu/R7ziZlwBCU3dDShTGeoBjYR': [
        {
          from: 'http://webprotege.stanford.edu/R7ziZlwBCU3dDShTGeoBjYR',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On': [
        {
          from: 'http://webprotege.stanford.edu/R7uyEOgEefntHVYBIC2NiKg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R90aygbYv017nv5YsP99s5',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
        {
          from: 'http://webprotege.stanford.edu/RCpn3euDDZoEVpKziwFE4aj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
      ],
      'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
      ],
      'http://webprotege.stanford.edu/R83KomHAvFWv2pVoHXCAC7M': [
        {
          from: 'http://webprotege.stanford.edu/R83KomHAvFWv2pVoHXCAC7M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
      ],
      'http://webprotege.stanford.edu/R83VJMr2iUDDav8mz3n6ZyH': [
        {
          from: 'http://webprotege.stanford.edu/R83VJMr2iUDDav8mz3n6ZyH',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4': [
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF',
          to: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
        },
      ],
      'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10': [
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R38bVK9Zi5QjtDMV6gIvgv',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
        },
      ],
      'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS': [
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
      ],
      'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx': [
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
      ],
      'http://webprotege.stanford.edu/R8M5tsloLX3FmQ8zhHm557c': [
        {
          from: 'http://webprotege.stanford.edu/R8M5tsloLX3FmQ8zhHm557c',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
      ],
      'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
      ],
      'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7': [
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
      ],
      'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M5tsloLX3FmQ8zhHm557c',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1hQyhkkb26ULmQUnfG6ZU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
      ],
      'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ': [
        {
          from: 'http://webprotege.stanford.edu/R70aV3VB8Lz4m2Yc60vk1oL',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7fkjcYjkZUMj82FPX7CNCo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
      ],
      'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
      ],
      'http://webprotege.stanford.edu/R8VPKVDGeDVRPQznK4rL0ea': [
        {
          from: 'http://webprotege.stanford.edu/R8VPKVDGeDVRPQznK4rL0ea',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R8WBh27Gnp1NKNtna6SezKw': [
        {
          from: 'http://webprotege.stanford.edu/R8WBh27Gnp1NKNtna6SezKw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
      ],
      'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF': [
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
        },
      ],
      'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
        },
      ],
      'http://webprotege.stanford.edu/R8mqmfFAtvpjQNyrdiVTAmG': [
        {
          from: 'http://webprotege.stanford.edu/R8mqmfFAtvpjQNyrdiVTAmG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp': [
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4': [
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
        },
      ],
      'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH': [
        {
          from: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
      ],
      'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv': [
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R90aygbYv017nv5YsP99s5': [
        {
          from: 'http://webprotege.stanford.edu/R90aygbYv017nv5YsP99s5',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
      ],
      'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
      ],
      'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L': [
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
      ],
      'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
      ],
      'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO': [
        {
          from: 'http://webprotege.stanford.edu/R7QCWoGMafG9zhjDYABQQgm',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
      ],
      'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R735Cwtcs6mgZedTI2DBpFK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R7hlktFumJq5RpggEzEv2xi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R7l0LqjYK03DLCUM5XgsbGk',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8VPKVDGeDVRPQznK4rL0ea',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8mqmfFAtvpjQNyrdiVTAmG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RBBDxx5ZaIbg5ASqGAeyKGg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RBKQgaabYcnNDy5hL7YKCKt',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCrgRyMOzbaY6vxlnONgyzo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RXys68405bldLT5N3pTI0u',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj': [
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
        },
      ],
      'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6': [
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
      ],
      'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J': [
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d': [
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB': [
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx': [
        {
          from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R7HiLUbGfj2jk0NdEMQOdqg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
      ],
      'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a': [
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
        },
      ],
      'http://webprotege.stanford.edu/R9Y5iEV0xhBtSZMrtzLdmwd': [
        {
          from: 'http://webprotege.stanford.edu/R9Y5iEV0xhBtSZMrtzLdmwd',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed': [
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0': [
        {
          from: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RVEDTAVDTgNluHGUPlPX9J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
        },
      ],
      'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl': [
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/R9rGNbOyamlUxw3GXZW6JNZ': [
        {
          from: 'http://webprotege.stanford.edu/R9rGNbOyamlUxw3GXZW6JNZ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
      ],
      'http://webprotege.stanford.edu/R9sA1G9BzdA86yphqD4fNjc': [
        {
          from: 'http://webprotege.stanford.edu/R9sA1G9BzdA86yphqD4fNjc',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
      ],
      'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
      ],
      'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp': [
        {
          from: 'http://webprotege.stanford.edu/R57wpQtXmxYodxNBUKJoHw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yEJN7QRZGgDnJ1KJShD95',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
      ],
      'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1': [
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj': [
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
      ],
      'http://webprotege.stanford.edu/R9x2FGn2Yb9iaiedpwWEJVo': [
        {
          from: 'http://webprotege.stanford.edu/R9x2FGn2Yb9iaiedpwWEJVo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
      ],
      'http://webprotege.stanford.edu/R9yEJN7QRZGgDnJ1KJShD95': [
        {
          from: 'http://webprotege.stanford.edu/R9yEJN7QRZGgDnJ1KJShD95',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
      ],
      'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi': [
        {
          from: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
      ],
      'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF': [
        {
          from: 'http://webprotege.stanford.edu/R7QV72ON1DRX7lQMsI664VX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R7UAD7hI7XyoTLSlVXwBj3k',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwvKVBMMMUesirDL2C2S1O',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
      ],
      'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq': [
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RB0lf4hZ1CRIjB3tldwNYlq',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9': [
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RB1hQyhkkb26ULmQUnfG6ZU': [
        {
          from: 'http://webprotege.stanford.edu/RB1hQyhkkb26ULmQUnfG6ZU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
      ],
      'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU': [
        {
          from: 'http://webprotege.stanford.edu/R2RFTG7iNuFjv3A8V7qHOb',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RB2wiyzebv6p4qrvJjgommU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
        },
      ],
      'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
        },
        {
          from: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
      ],
      'http://webprotege.stanford.edu/RBAlLULVgXcsNnd1xsx2HSl': [
        {
          from: 'http://webprotege.stanford.edu/RBAlLULVgXcsNnd1xsx2HSl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
      ],
      'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
      ],
      'http://webprotege.stanford.edu/RBBDxx5ZaIbg5ASqGAeyKGg': [
        {
          from: 'http://webprotege.stanford.edu/RBBDxx5ZaIbg5ASqGAeyKGg',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t': [
        {
          from: 'http://webprotege.stanford.edu/R8M82pvFZ3JUmp6uMUwitfw',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
      ],
      'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf': [
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm': [
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RB6vzK57zLwceWuRwWA1usg',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBB5dovsXWSPzlLSNMC5gyd',
        },
        {
          from: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
        },
      ],
      'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C': [
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9UuC5ptRevqURhJa0PIBmB',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB2lnkvVru2pLbt5iOaISSs',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R8b0L4wjItcKJ8kcMOeuHsF',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
      ],
      'http://webprotege.stanford.edu/RBKQgaabYcnNDy5hL7YKCKt': [
        {
          from: 'http://webprotege.stanford.edu/RBKQgaabYcnNDy5hL7YKCKt',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS': [
        {
          from: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
          predicate: 'http://webprotege.stanford.edu/RCK5ewyfmAkLZWg9Mwb7MY',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
      ],
      'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE': [
        {
          from: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
        },
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
        },
      ],
      'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb': [
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
        },
        {
          from: 'http://webprotege.stanford.edu/RBXuwksHoHfSvl9WI689HWb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
      ],
      'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D': [
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R7tAippJQB4pJXF1MzgDbKi',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RBIjxceqTozVOeG26dY0Msm',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RDgkQlvQbb2skaXpfhIEAp8',
          to: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
      ],
      'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO': [
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI': [
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
      ],
      'http://webprotege.stanford.edu/RBhZTpXvMJckgjC601QBKzJ': [
        {
          from: 'http://webprotege.stanford.edu/RBhZTpXvMJckgjC601QBKzJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
      ],
      'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb': [
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
      ],
      'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX': [
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
      ],
      'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs': [
        {
          from: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
        },
      ],
      'http://webprotege.stanford.edu/RC5ZXWmz7smNKNWCml5Qpag': [
        {
          from: 'http://webprotege.stanford.edu/RC5ZXWmz7smNKNWCml5Qpag',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
      ],
      'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI': [
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RBzF9qwVtyzz358WQ0Iaxjs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
        },
      ],
      'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCKcLqulWWTzL6ScVnH2THQ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDE8IdD6V4U77NkZN35I7um',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDQ3FIM55jTOW9ihNUws27R',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF': [
        {
          from: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
        },
      ],
      'http://webprotege.stanford.edu/RCKcLqulWWTzL6ScVnH2THQ': [
        {
          from: 'http://webprotege.stanford.edu/RCKcLqulWWTzL6ScVnH2THQ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RCLiKaIHnEwymIeVs5NA1jv': [
        {
          from: 'http://webprotege.stanford.edu/RCLiKaIHnEwymIeVs5NA1jv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
      ],
      'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/R7dYrsdk1L1bcLR0A9vS5QP',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf': [
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
      ],
      'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q': [
        {
          from: 'http://webprotege.stanford.edu/RBQ9bNT1jSrdUHMAQ1AjJbE',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn': [
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RC714KfXzpEYi4lGyNUEbWI',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
        },
      ],
      'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T': [
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw': [
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RClp8LYLCEjhteHI1BoIOsw',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We': [
        {
          from: 'http://webprotege.stanford.edu/R7QbRSvuFm0H5qc2dZOD3MT',
          predicate: 'http://webprotege.stanford.edu/RkJSmQ0b8EYQx19ftdEkGF',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/RCpn3euDDZoEVpKziwFE4aj': [
        {
          from: 'http://webprotege.stanford.edu/RCpn3euDDZoEVpKziwFE4aj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
        },
      ],
      'http://webprotege.stanford.edu/RCrgRyMOzbaY6vxlnONgyzo': [
        {
          from: 'http://webprotege.stanford.edu/RCrgRyMOzbaY6vxlnONgyzo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA': [
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RDKQk63bgl4QNsF9Hoy84CF',
          to: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
      ],
      'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/R8WBh27Gnp1NKNtna6SezKw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
      ],
      'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1': [
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
      ],
      'http://webprotege.stanford.edu/RDC5EKiryOl11nNkRsAOoeJ': [
        {
          from: 'http://webprotege.stanford.edu/RDC5EKiryOl11nNkRsAOoeJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RDE8IdD6V4U77NkZN35I7um': [
        {
          from: 'http://webprotege.stanford.edu/RDE8IdD6V4U77NkZN35I7um',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RDElsJe5LORtLxEeWbSDg6': [
        {
          from: 'http://webprotege.stanford.edu/RDElsJe5LORtLxEeWbSDg6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2': [
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
      ],
      'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh': [
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
      ],
      'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP': [
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RC48Hic1INaQShlkSyb6ZIx',
          to: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/R7pIV91w7fTKppAHSmrz8n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
      ],
      'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92': [
        {
          from: 'http://webprotege.stanford.edu/R89hr3L0oNOwO2C6z1V7rPS',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RCLiKaIHnEwymIeVs5NA1jv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
      ],
      'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D': [
        {
          from: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
        },
      ],
      'http://webprotege.stanford.edu/RDQ3FIM55jTOW9ihNUws27R': [
        {
          from: 'http://webprotege.stanford.edu/RDQ3FIM55jTOW9ihNUws27R',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
      ],
      'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS': [
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RDOVqibcKPQJUgd5MLw7f9D',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
        },
      ],
      'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/RCO41EY55jxxkXEYAsRnzul',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDBlPj5mxo9Sheqo9njonK1',
        },
      ],
      'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD': [
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7uJCP2nLVqIuNUULKJdxDF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDJpPq1h6rGjSoshUKgfI92',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R7I1rNuvyyDwzTcsAAofisu',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RBzR29uCACOGDcXgx1CeMn1',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
      ],
      'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG': [
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZVwEGYIdGxSF0y5yFOhwG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
      ],
      'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ': [
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw': [
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDwUtfvimhekfSyyuGXj6rw',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
      ],
      'http://webprotege.stanford.edu/RDwvKVBMMMUesirDL2C2S1O': [
        {
          from: 'http://webprotege.stanford.edu/RDwvKVBMMMUesirDL2C2S1O',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yaUi67502d49oMbx70wiF',
        },
      ],
      'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb': [
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9': [
        {
          from: 'http://webprotege.stanford.edu/R9REtfX1Mke5RINFMbbUI1J',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
        },
        {
          from: 'http://webprotege.stanford.edu/REpB4vJ7ApbznwNWoNu6X9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
      ],
      'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU': [
        {
          from: 'http://webprotege.stanford.edu/R7RDxuQpthew95SauxL9iOL',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RBI4T4TkVNo6dzyvbPLMHbf',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RDpQmuXpzJOM9XhMdRRxaOJ',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
      ],
      'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp': [
        {
          from: 'http://webprotege.stanford.edu/R7IYZp3FDxOZ1LbVtJN3Z7J',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7ziZlwBCU3dDShTGeoBjYR',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RcNW56SFgi34icUZNpsOET',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBhZTpXvMJckgjC601QBKzJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/R7hoT86zDXtTKlGVmxqJRio',
          to: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R83hFPamR9Qma90o0ltJtC7',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7kFYLBMrwSIReHdO0qWzl1',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
        },
      ],
      'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR': [
        {
          from: 'http://webprotege.stanford.edu/R7dcPTLwQrLcc9eK22R7swU',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
        },
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
      ],
      'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP': [
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/RCoyoKN6hsec0RfP3VnLQen',
          to: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
        },
      ],
      'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT': [
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/R9sQaGD5gjjxCrqX8xatj5I',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RGqbUUiG3LztL6ZF5nDRmT',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
      ],
      'http://webprotege.stanford.edu/RH0Rqaoh9tWxGJbhW433i9': [
        {
          from: 'http://webprotege.stanford.edu/RH0Rqaoh9tWxGJbhW433i9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
      ],
      'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp': [
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://webprotege.stanford.edu/RCmUfm0eeBA3SpSDhY4GHOe',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
          predicate: 'http://webprotege.stanford.edu/RuflVNuPASFn75l7LznQc0',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8EHiJLLiGn2iUnQEObykIx',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://webprotege.stanford.edu/R8UlzVcWWjnYzxJxqtXIIFd',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uZJhZUKipFsqrD1TUaca1',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RB1PjJpc3OQDXScPJQJpAj9',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RBm7cF8aYrHL1CNgkiu5PNb',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RDzcOYLZOUKQWbhik8oL6wb',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RCdbVM6sx0TFJ2bA7j7XW9T',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R7msJHfQBx9IyBoi6uDKJ2m',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/R7V7p8sdl5TpSs0cd7gZvqr',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7': [
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Wg79mGAA5scUqgNgmqBZP',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RDC5EKiryOl11nNkRsAOoeJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
        },
        {
          from: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs': [
        {
          from: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R1qJMsQqC5KurNMw9vwNbf',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R807lspeQtxNAS1gwN1L2On',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R85jgDJqHrr5qX3KrACpk4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBd3wT8jsLdCGapuQrUCMwO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCGrVyxcVdUB7rI7qGrKvTF',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
      ],
      'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3': [
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
        },
        {
          from: 'http://webprotege.stanford.edu/RUWwziHPSHb0QUR433d6n3',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
      ],
      'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa': [
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RUcb0VtNgmp5CaG8hCLwNa',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
      ],
      'http://webprotege.stanford.edu/RVEDTAVDTgNluHGUPlPX9J': [
        {
          from: 'http://webprotege.stanford.edu/RVEDTAVDTgNluHGUPlPX9J',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9m2TK7H0BdyR4nqjg54jE0',
        },
      ],
      'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7': [
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/RBGK1EZogKmTJUyW3HfCU5t',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
        {
          from: 'http://webprotege.stanford.edu/RVM8jhTPiNMgUTEhAMdNu7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
        },
      ],
      'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU': [
        {
          from: 'http://webprotege.stanford.edu/R8gKH7l4S0E9EHebS7t6It8',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
        },
        {
          from: 'http://webprotege.stanford.edu/RXlFsBI0EcosvsoMwbZqeU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
        },
      ],
      'http://webprotege.stanford.edu/RXys68405bldLT5N3pTI0u': [
        {
          from: 'http://webprotege.stanford.edu/RXys68405bldLT5N3pTI0u',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
      ],
      'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ': [
        {
          from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R3WvW1lERMZ6UCSsaAdkx1',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R7aUPF2nCTl0LhxRiIVdzpc',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sbR69tmanyzKyA39GGMRD',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RB9hSN5JimVLMgBjRg72MWG',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDXfAVuWRwr0N4TV6QEbADY',
          predicate: 'http://webprotege.stanford.edu/R8EXGHPfSLDiLihUtTOLFsB',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RFwjTev6moOjE08akYHzWP',
          predicate: 'http://webprotege.stanford.edu/R8Fp5FKHZWgNVNiLcHuAtPf',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/RCCNbe0sG8e3ngkdoP9cSl6',
        },
        {
          from: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
          predicate: 'http://webprotege.stanford.edu/RC1zYYNqqFSlJxIKg4SdBTB',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
      ],
      'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG': [
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/RYOFagzdcydXMf8mlO9vsG',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB': [
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
        {
          from: 'http://webprotege.stanford.edu/RZLjE2nTL9Nm4qChQqFEzB',
          predicate: 'http://webprotege.stanford.edu/RD0ZcPXhdHrABadmgWvHPLF',
          to: 'http://webprotege.stanford.edu/RPNC02PMG2H4xSrrTiebi7',
        },
      ],
      'http://webprotege.stanford.edu/RZZvs7EyCxdgLfuUREbiPY': [
        {
          from: 'http://webprotege.stanford.edu/RZZvs7EyCxdgLfuUREbiPY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
      ],
      'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN': [
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8PzvuuoJlhu0qdom6r1qRQ',
        },
        {
          from: 'http://webprotege.stanford.edu/RbBV8PcIsbUoWpY4Tu9xUN',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/ReVBAW9BDkF6kpl6UmYCrZ': [
        {
          from: 'http://webprotege.stanford.edu/ReVBAW9BDkF6kpl6UmYCrZ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
      ],
      'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp': [
        {
          from: 'http://webprotege.stanford.edu/R9SjJm6J7HbiocTcgtddm8d',
          predicate: 'http://webprotege.stanford.edu/RbjcXDTrplTouTeWRoMMe7',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCXzH6nTutSI75cTg53tH8q',
          predicate: 'http://webprotege.stanford.edu/RDzbWoYkp7g1ljEL076ahtw',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RCxwL4b8LCMbVkVPEbOn78g',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RDEq6i5M8SGrbQ7vXzpqiI2',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RCTsx4McKN1jh7Rr2zizjAf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RqeoNxhIUKNWDOrBxWFusJ',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R88oLttBTPxhZOBkekr7j10',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/RY4x5rU5jNH9YIcM63gBgJ',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R1CEYmOdNWhDr4n2yz9Lzf',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
      ],
      'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx': [
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
          predicate: 'http://webprotege.stanford.edu/R8Pp0U9lbiy2Wpdm6YzyV5m',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/RBmqEHPuKuvpNznItviKdyK',
          predicate: 'http://webprotege.stanford.edu/RC9oNNab0poBq3VZzEoHIcM',
          to: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
        },
        {
          from: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
          to: 'node-123',
        },
      ],
      'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5': [
        {
          from: 'http://webprotege.stanford.edu/RDWl7SktPJhdQATIWmkeWP4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R93SkoUnFXM1KEjUDb2Ij3n',
        },
        {
          from: 'http://webprotege.stanford.edu/Rhx4iGF2ITGgrmcS2fHAN5',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c': [
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://webprotege.stanford.edu/RCt16VHlp30eNXujyqS0ik9',
          to: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
        },
      ],
      'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK': [
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/Rigjqi5P4ZscabU1Pot3hK',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon': [
        {
          from: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MzvxsWzbT1CeZSELKf1Ku',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QL7GzNO6C7vUbpfDfCJk6',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RBcXX4d5QQiXpD9Uvmk1E7D',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/RYIoLKdwlygMWF57BNuMib',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://webprotege.stanford.edu/R89lHzrBYZLIc1RgkMScjIW',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/RDIxodv8FKzm0NUvObC5ThP',
          predicate: 'http://webprotege.stanford.edu/RXCmh2J46cqAwwT2c4D7Bx',
          to: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RTyCIe0sZbCvkp6VVWaYGs',
        },
        {
          from: 'http://webprotege.stanford.edu/Rj3NXx72nCWC2S8JjoFjon',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R81y0gnn3Ar0DJ8FatMTqK3',
        },
      ],
      'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu': [
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RjZNyX4570oeWiMHL21BBu',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
      ],
      'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4': [
        {
          from: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
        },
        {
          from: 'http://webprotege.stanford.edu/RkuHSxIaFD91qBEbFsFiU4',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
      ],
      'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw': [
        {
          from: 'http://webprotege.stanford.edu/R9rGNbOyamlUxw3GXZW6JNZ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/R9x2FGn2Yb9iaiedpwWEJVo',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/RBAlLULVgXcsNnd1xsx2HSl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/RH0Rqaoh9tWxGJbhW433i9',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/ReVBAW9BDkF6kpl6UmYCrZ',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/R79SeNap6q11kTo4DsroWaC',
          to: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
        },
        {
          from: 'http://webprotege.stanford.edu/RmVBgJPMOQ5Amchla0VZUw',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
      ],
      'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO': [
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RBJ3sWyEdjzo3HjkcABim8C',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RmrjgvX01FgGHXkfTXE4MO',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
        },
      ],
      'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj': [
        {
          from: 'http://webprotege.stanford.edu/R8oNiHimqYAWPxl0guoDLFp',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
        {
          from: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R7YIZpydsaz383PdnJekN8S',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl': [
        {
          from: 'http://webprotege.stanford.edu/RFNK6OsKMaap9LxxLXdLxR',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8TAOW3SN06LeB0bwWcfIOM',
        },
        {
          from: 'http://webprotege.stanford.edu/RnzPd3Edkzo3UTz2B80djl',
          predicate: 'http://webprotege.stanford.edu/RBGj27xJbqpVePdpgjXqeVk',
          to: 'http://webprotege.stanford.edu/RCdB5m1RZhhIcJM0SpRcJvn',
        },
      ],
      'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN': [
        {
          from: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBXkLIHl4DLxgRus9nf68fU',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/Ree4nJbmBksWE1ufpmuUfp',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/R9Be61LJrP8iSlMxyobFOGy',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/RDZQxNkcGSsNALjBJH6keFD',
        },
        {
          from: 'http://webprotege.stanford.edu/RpqwgnThbB1jmoXEUbPwkN',
          predicate: 'http://webprotege.stanford.edu/RBog5Fl0hcK19z2umsYIBzn',
          to: 'http://webprotege.stanford.edu/R7xOxa2KHyXr6hfeRrQ83oY',
        },
      ],
      'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW': [
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8N1a0K78gZZbVLw2P1NkTX',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R8jWMWKWG5xCyyCGXksUAbL',
          to: 'http://webprotege.stanford.edu/RF3YeWGVEQjj16Hy07lXyU',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RDWT4jt5mF3fw4zrooDr58g',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/R7cbyWVOLsYCR1NFY11TBjJ',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RqrTW48Q37Okpfre6W4ULW',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/RnMK2vS5olvsw9Krge2Ymj',
        },
      ],
      'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64': [
        {
          from: 'http://webprotege.stanford.edu/R9WpuntzJVMdVohpDA6Vw8a',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/RZZvs7EyCxdgLfuUREbiPY',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr1h75PEGwQbtbZKYXLp64',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
        },
      ],
      'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M': [
        {
          from: 'http://webprotege.stanford.edu/R2mI7fMFtIsSHM8bOfJoEk',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R7Ae7UPY2C3UrcNeeLv0gYV',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8InsmDsayORUpOGuBHWc4l',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8MmTPbBMzS5oRDuNBE43G7',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R8x8fOmbMnQnR2JiBxkoWAv',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9QC3za2HZdtzU3eCgwCNYj',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9ixi0I9o1Re8bM8EK5V8ed',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9r0DVvDkFW6GmN4bDUNsyl',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/R9sA1G9BzdA86yphqD4fNjc',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/RBeMHRpPtIj9w4fNQv66hnI',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/RDHWjhBCCAPiD1rreqlEMZh',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/R734t4iI6j8MPmpJsIqO2v4',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/R8fzvBl85R2Nc2SqsikiKp9',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RXKNigVZSAdET48254gS2w',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
      ],
      'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM': [
        {
          from: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
          predicate: 'http://webprotege.stanford.edu/RDPf9CwQ3tGAm44VWzOmbHv',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9BdIrtS5xNdcAPHLf4JaEE',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RCptIcn975cERAVUlJOL7sV',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9CEIYtS6EVWnP7kLOlZGYO',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/R9uvMZD48MrRf3iKMKAiNCj',
          predicate: 'http://webprotege.stanford.edu/RCSHnubpYqLMmQHwcTdreoq',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RBqifrmlk0euN7DLSAdEhDX',
          predicate: 'http://webprotege.stanford.edu/RXaMAxdkuV5CvgEpovEVvp',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCOdkBizz0dWtRTEjZSfqP8',
          predicate: 'http://webprotege.stanford.edu/R8XmPwbVWaRiEyUv3kxunaF',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RCuUHUwF8sOhovt9F5cgPYA',
          predicate: 'http://webprotege.stanford.edu/R7u5ooQBcC82kgElYnRYvBa',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/Rf8re1EdmLU47EIlLtCpzx',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/Ri0oPM0zRSfP4SuSH0S15c',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDhasq1hVj3O5iWytoHK065',
          to: 'http://webprotege.stanford.edu/RJVpffoomVWohIDaJCykd9',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RDHyoSHFDLL9G8kmD2B11Go',
          to: 'http://webprotege.stanford.edu/R8QQzkUbCD5WRXDQQSl0vX8',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9yHLGw3z6gILmTwQSizzdi',
        },
        {
          from: 'http://webprotege.stanford.edu/RtN2Zu9OP2GsaPU9toX3UM',
          predicate: 'http://webprotege.stanford.edu/RvMCpTSGsQmEAyy8Mi6fdN',
          to: 'http://webprotege.stanford.edu/R8oR1UKjsuv62ve8vkf53U4',
        },
      ],
      'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC': [
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7xuMweW7v6CbTdPcVpjdp3',
          to: 'http://webprotege.stanford.edu/RCnRceKsHZf8Gt9UvDjM6We',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9stUOxlDBKRK0MNTXL6Rkp',
        },
        {
          from: 'http://webprotege.stanford.edu/RuAatmiCENCkgAWQlDVsZC',
          predicate: 'http://webprotege.stanford.edu/R7uRVbFaeQ4xCgAEayawrZ3',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
      ],
      'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy': [
        {
          from: 'http://webprotege.stanford.edu/RBNRwyHYDJAexW4IAn1ebkS',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/Rr60siMdu9IEvdag4DhF7M',
          predicate: 'http://webprotege.stanford.edu/RBfzJ6HkijEIMSY3oKjcLay',
          to: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RC0fF4cbTcg59fvYtEu1FF0',
          to: 'http://webprotege.stanford.edu/RJ4FstTjtD6dNQx4agULMp',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R94oKO9u1LgzfqODgcPAc8L',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R8vPX062NwsvUg0z6NRZerH',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RoaVc0YAiyET5nKJSYJAoX',
          to: 'http://webprotege.stanford.edu/R9H3QGGtwC0XhV4Mfk6Ceep',
        },
        {
          from: 'http://webprotege.stanford.edu/RxMK8BflSk74kqDWT4eHTy',
          predicate: 'http://webprotege.stanford.edu/RBouRer6kTdZCfCZ4kpk7K3',
          to: 'http://webprotege.stanford.edu/R79918d31mkj7gGPmR00us9',
        },
      ],
      'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS': [
        {
          from: 'http://webprotege.stanford.edu/RFC5Q9hfMGLXk65hXqNCzp',
          predicate: 'http://webprotege.stanford.edu/R7IaR9YG9mGzOkseoqQ4Rzi',
          to: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R5u6iRwByXm7q6dOcaVRk8',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://www.w3.org/2000/01/rdf-schema#subclassof',
          to: 'http://webprotege.stanford.edu/R9WIxkbvxYbhp8NthzYsXSx',
        },
        {
          from: 'http://webprotege.stanford.edu/RxuHv1LeenSYiEIoMyhxzS',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'http://webprotege.stanford.edu/RDUwHG4VnwQTyDDhhsWSwgS',
        },
        {
          from: 'node-234',
          predicate: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
          to: 'node-123',
        },
      ],
    },
  ],
  [
    'classesFromApi',
    newClassesFromApi,
  ],
  [
    'objectPropertiesFromApi',
    newObjectPropertiesFromApi,
  ],
]
