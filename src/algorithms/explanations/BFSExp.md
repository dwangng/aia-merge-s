# Breadth First Search
---

Breadth first search (BFS) for graphs can be used to find a path from
a single start node to either a single end node, to one of several end
nodes, or to all nodes that are connected to the start node (depending on the termination
condition). BFS returns the path to this (these) node(s) 
that can be reached with the minimum number of edges traversed, regardless of 
edge weights.

BFS is one of a related group of graph traversal algorithms that can be viewed as having a similar
structure.
Others of these algorithms work with weighted graphs (with positive weights
for all edges), where the aim is to find the least cost path(s), while Prim's
algorithm finds a minumum spanning tree of the graph (the least cost 
set of edges that connects all nodes, if the graph is connected).  

These graph traversal algorithms can be used for both directed
and undirected graphs; in AIA we use undirected graphs for simplicity.
Paths are represented by having each node point to the previous
"parent" node in the path, so 
we have a tree with "parent" pointers and the start node at the
root, that is a tree of reversed paths. This allows these algorithms to return
multiple nodes that each have a single path from the start node. 
BFS will find paths with
the minimum number of edges. 

As these algorithms execute, we can classify nodes into three sets.
These are:

 
- "Finalised" nodes, for which the shortest or least costly path back to the start node has already
been finalised, that is the final parent node has been determined and is recorded;

- "Frontier" nodes, that are not finalised but are connected to a finalised node by a single edge; and

- The rest of the nodes, which have not been seen yet. 

The frontier nodes are stored in a data structure.
Some of the algorithms also need a way to check if a node has already been seen and/or finalised.

The frontier initially contains just the start node. The algorithms repeatedly
pick a frontier node, finalise the node (its current parent becomes
its final parent) and update information about the neighbours of the node.
BFS uses a queue for the frontier nodes.  At each stage the node at the front of the
queue is removed for processing, and its neighbors that have not yet been seen
are added to the end of the queue. Other algorithms use other data structures to keep track 
of the frontier nodes.



Here we number all nodes for simplicity so we can use arrays for the
graph representation, the parent pointers, etc.  For many important
applications, particularly in artificial intelligence, the graphs can
be huge and arrays are impractical for representing the graph so other
data structures are needed.

For consistency with other algorithm animations, the layout of the
graph is on a two-dimensional grid where each node has (x,y) integer
coordinates.  You can choose the start and end nodes and change the
graph choice (see the instructions tab for more details).  While weights of
edges can be included in the text box input, BFS will ignore weights
and positions of nodes.  Only a single end node is supported; choosing
0 results in finding paths to all connected nodes.

