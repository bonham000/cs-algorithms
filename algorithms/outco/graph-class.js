
function Vertex(id = null){
  this.value = id;
  this.edges = {};
};


function Graph(){
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
};


// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)
Graph.prototype.addVertex = function(id) {
  if (!(id in this.vertices)) {
    var vert = new Vertex(id);
    this.vertices[id] = vert;
    this.totalVertices++;
  }
};


// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)
Graph.prototype.getVertex = function(id) {
  if (id in this.vertices) return this.vertices[id];
};


// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)
Graph.prototype.addEdge = function(id1, id2) {
  if (id1 in this.vertices && id2 in this.vertices) {
    var vert1 = this.vertices[id1];
    var vert2 = this.vertices[id2];
    vert1.edges[id2] = true;
    vert2.edges[id1] = true;
    this.totalEdges++;
  }
};


// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)
Graph.prototype.removeEdge = function(id1, id2) {
  if (id1 in this.vertices && id2 in this.vertices) {
    var vert1 = this.vertices[id1];
    var vert2 = this.vertices[id2];
    delete vert1.edges[id2];
    delete vert2.edges[id1];
    this.totalEdges--;
  }
};


// Time Complexity: O(V)
// Auxiliary Space Complexity: O(V)
Graph.prototype.removeVertex = function(id) {
  if (id in this.vertices) {
    delete this.vertices[id];
    this.totalVertices--;
    for (var vert of Object.keys(this.vertices)) {
      var node = this.vertices[vert];
      if (id in node.edges) {
        delete node.edges[id];
        this.totalEdges--;
      }
    }
  }
};


// Time Complexity: O(V)
// Auxiliary Space Complexity: O(V)
Graph.prototype.findNeighbors = function(id) {
  var neighbors = [];
  if (id in this.vertices) {
    for (var vert of Object.keys(this.vertices)) {
      var node = this.vertices[vert];
      if (id in node.edges) {
        neighbors.push(node);
      }
    }
  }
  return neighbors;
};
