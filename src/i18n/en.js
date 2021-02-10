/* eslint max-len:0 */
export default {
  // titles & descriptions
  ontologyVisualisationDescription: 'Highways England ontology visualisation web app',

  // navbar
  hideSidebar: 'Hide sidebar',
  showSidebar: 'Show sidebar',
  networkGraphView: 'Network graph view',
  tableView: 'Table view',
  showNetworkGraph: 'Show network graph',
  showTable: 'Show table',
  showInfo: 'Show element info',
  hideInfo: 'Hide element info',
  nodes: 'Nodes',
  allowNodeSelection: 'Allow node selection',
  disallowNodeSelection: 'Disallow node selection',

  // sidebar
  networkGraphs: 'Network graphs',
  nodeNeighbourhood: 'Node neighbourhood',
  ontologyFilter: 'Ontology filter',
  shortestPath: 'Shortest path',
  toggleSidebar: 'Toggle sidebar',
  nodesSelection: 'Nodes selection',
  edgesSelection: 'Edges selection',
  nodesFilter: 'Nodes filter',
  edgesFilter: 'Edges filter',
  selectNodes: 'Select nodes',
  selectEdges: 'Select edges',
  settings: 'Settings',
  export: 'Export',
  freeTextSearch: 'Free-text search',
  versioning: 'Versioning',

  // data loading
  couldNotQueryGraph: 'Could not query graph!',
  couldNotQueryAnnotationProperties: 'Could not query annotation properties!',

  // node selection
  node: 'Node',
  noRelationships: 'No relationships found',
  selectNodeFromGraph: 'Select node from graph',

  // filter
  filterNodesByNodeProps: 'Filter Nodes by Node Properties',
  filterEdgesByEdgesProps: 'Filter Edges by Edge Properties',
  searchInputText: 'Enter search string',
  performSearch: 'Perform search',

  // node properties
  filterNodesByArbitraryPropsCombination: 'Filter nodes by any arbitrary combination of one or more node property values',
  searchString: 'Search string',
  selectProperty: 'Select property',
  removeFilter: 'Remove filter',
  showFilteredNodes: 'Show filtered nodes',

  freeNodeSearchInputPlaceholder: 'Filter by Node properties',
  allNodeProperties: 'All node properties',
  filterNodesDescription1: 'First select the node properties you would like to search on',
  filterNodesDescription2: 'Then enter the search string to filter',

  // edge properties
  filterEdgesByArbitraryPropsCombination: 'Filter edges by any arbitrary combination of one or more edge property values',
  showFilteredEdges: 'Show filtered edges',

  freeEdgeSearchInputPlaceholder: 'Filter by Edge properties',
  selectEdgeProperties: 'Select edge properties to search on',
  allEdgeProperties: 'All edge properties',
  filterEdgesDescription1: 'First select the edge properties you would like to search on',
  filterEdgesDescription2: 'Then enter the search string to filter',

  // edge selection
  selectEdgeFromGraph: 'Select edge from graph',
  edge: 'Edge',

  // bounding box
  boundingBox: 'Bounding box selection',
  drawBoundingBox: 'Select nodes by drawing a bounding box in the canvas',
  drawBoundingBoxFirstClick: 'First click: Start drawing',
  drawBoundingBoxSecondClick: 'Second click: Set bounding box',
  showSelectedNodes: 'Show selected nodes',
  selectionDirection: 'Selection direction',
  insideBoundingBox: 'Inside bounding box',
  outsideBoundingBox: 'Outside bounding box',

  // node neighbourhood
  show: 'Show',
  separationDegree: 'Separation degree',
  selectedNode: 'Selected node',
  insertNumber: 'Insert number',

  // shortest path
  selectNodesFromGraph: 'Select nodes from graph',
  isNodeOverlay: 'Show all nodes',
  isNotNodeOverlay: 'Show only path',

  // Physics settings
  physicsSettings: 'Physics settings',
  hierachicalView: 'Hierarchical view',
  gravitationalView: 'Gravitational view',
  enableRepulsion: 'Enable repulsion',
  disableRepulsion: 'Disable repulsion',
  physics: 'Physics',
  repulsion: 'Repulsion',
  positioning: 'Positioning',
  chooseColor: 'Click to change colour',

  // Physics Edge
  edgeStylingByProperty: 'Edge styling by property',
  edgeStylingGlobal: 'Global edge Styling',
  edgeStyling: 'Edge Styling',
  edgeLength: 'Edge length',
  edgeThickness: 'Edge Thickness',
  edgeLineStyle: 'Edge Line Style',
  edgeLineStyleColorChooseProperty: 'Choose Property',
  edgeLineStyleColor: 'Colour',
  edgeLineStyleLineColor: 'Line Colour',
  edgeLineStyleHighlightColor: 'Highlight Colour',
  edgeLineStyleHoverColor: 'Hover Colour',
  edgeLineStyleCurrentColor: 'Current Colour',
  edgeCaptionPosition: 'Edge Caption Position',
  edgeCaptionProperties: 'Edge Caption Properties',
  edgeByPropInstructions1: 'Choose the property you wish to style',
  edgeByPropInstructions2: 'Then choose the styles below to update that property',
  edgeLineColorInstructions: 'Click on a colour to open colour palette and change colour for that option',

  nodeStylingByProperty: 'Node styling by property',
  nodeStylingGlobal: 'Global node styling',
  nodeSize: 'Node size',
  nodeShape: 'Node shape',
  nodeColor: 'Node colour',
  nodeBorder: 'Node border',
  nodeBorderLineWidth: 'Border width',
  nodeBorderLineWidthHighlighted: 'Border width highlighted',
  nodeBorderColor: 'Border colour',
  nodeTextColor: 'Node text colour',
  nodeBorderHighlightedColor: 'Border colour highlighted',
  nodeBackgroundColor: 'Background colour',
  nodeBackgroundHighlightedColor: 'Background colour highlighted',
  nodeBackgroundHoverColor: 'Background colour on hover',
  nodeBorderHoverColor: 'Border colour on hover',

  nodeCaptionPosition: 'Node caption position',
  nodeCaptionProperties: 'Node caption properties',
  nodeShapeInstructions: 'Choose the node shape',

  // Physics Node
  nodeStyling: 'Node Styling',
  physicsOn: 'Physics on',
  physicsOff: 'Physics off',

  // Export settings
  fileName: 'File name',
  insertName: 'Insert name',
  exportGraphAs: 'Export graph as',
  jpeg: 'JPG',
  png: 'PNG',
  pdf: 'PDF',
  exportDataAs: 'Export data as',
  csv: 'CSV',
  owl: 'OWL',
  fileCanBeDownloaded: 'File can now be downloaded, check your browser!',
  couldNotDownloadCsv: 'Could not download CSV!',
  insertFileName: 'Insert file name.',

  // custom query
  customQuery: 'Custom query',
  insertGremlinQueries: 'Insert Gremlin query',
  queryOutput: 'Query output',
  queryHistory: 'Query history',
  removeFromHistory: 'Remove from history',
  queryAgain: 'Query again',
  query: 'Query',
  clear: 'Clear',
  exportAsJson: 'Export as Json',

  // versioning
  version: 'Version',
  searchOrCreate: '',
  chooseGraphVersion: 'Choose graph version',
  insertGraphVersion: 'Insert graph version',
  fromGraphVersion: 'From version',
  setGraph: 'Set as current graph',
  save: 'Save',
  load: 'Load',
  chooseLocation: 'Choose location',
  file: 'File',
  server: 'Server',
  storedToServer: 'Graph version stored to server!',
  graphVersionFileNotValid: 'The file you uploaded is not valid!',
  graphVersionLoaded: 'Graph version loaded!',
  dragAndDrop: 'Drag and drop files to here to upload.',

  // edit ontology
  edit: 'Edit',
  new: 'New',
  add: 'Add',
  type: 'Type',
  chooseElementType: 'Choose element type',
  update: 'Update',
  delete: 'Delete',
  restore: 'Restore',
  selectGraph: 'Select graph',
  chooseOperation: 'Choose operation',
  go: 'Go',
  selectElement: 'Select element',
  editOntology: 'Edit ontology',
  insertProperties: 'Insert properties',
  editProperties: 'Edit properties',
  requiredField: 'This field is required',
  restoreOriginal: 'Restore',
  idExists: 'ID already exists',
  noDeletedElements: 'No deleted elements to restore!',
  nodeIdAlreadyExists: 'Node ID already exists',
  connection: 'Connection',
  chooseElementsToConnect: 'Choose elements to connect',
  fromNode: 'From node',
  toNode: 'To node',
  toAndFromNodesEqual: 'To and from nodes cannot be the same!',
  connectionAlreadyExists: 'Connection already exists',

  // footer navbar
  hidePhysicsSettings: 'Hide physics settings',
  showPhysicsSettings: 'Show physics settings',
  allowEdgeSelection: 'Allow edge selection',
  disallowEdgeSelection: 'Disallow edge selection',
  selectedEdges: 'Selected edges',

  // info
  id: 'ID',
  label: 'Label',
  rdfAbout: 'rdfAbout',
  skosComment: 'skosComment',
  skosDefinition: 'skosDefinition',
  skosExample: 'skosExample',
  null: 'Null',
  deleteNode: 'Delete node',
  selectedNodes: 'Selected nodes',
  removeNode: 'Remove node',
  removeEdge: 'Remove edge',
  removeGraph: 'Remove graph',
  viewNode: 'View node',
  viewGraph: 'View graph',
  viewEdge: 'View edge',
  goBack: 'Go back',
  properties: 'Properties',
  relationships: 'Relationships',
  from: 'From',
  to: 'to',
  nodesProperties: 'Nodes properties',
  predicate: 'Predicate',

  // search
  search: 'Search',
  focusElement: 'Focus element',

  // edges list
  edges: 'Edges',

  // Progress bar
  loading: 'Loading...',

  // context menu
  queryGraph: 'queryGraph',
  expandNode: 'Expand node',
  close: 'Close',
}
