import parse from '../../pseudocode/parse';

export default parse(`
\\Code{
    Main
    Astar(G, s, e) // Heuristic search for node e from node s in graph G \\B 1
    \\Expl{ Given a graph G, find a path from start node s
            to the end node e.  Nodes are numbered 1..nmax. Returns the
            Parent array, which gives the previous node in the path from s
            to the node i (if one has been found; Parent[i] = 0 otherwise).
            A heuristic function is used to guide the search (here it is
            a measure of the distance from each node to e, based on
            the Euclidiean coordinates of each node). If the
            heuristic is "admissible", the shortest path will be found.
    \\Expl}

     \\In{
          initialise, with fontier={s}, stored in Nodes \\Ref Init
            while Nodes is not empty \\B 2
            \\Expl{ Nodes is the data structure used to represent the frontier.
		For A*, Nodes is a priority queue, ordered on Length (the minumum
                found so far) plus the heuristic value. Here we highlight the Min
                value. The priority queue also contains nodes that have not been
                seen, which have infinite Length. The frontier nodes are those
                shown with a finite Length so far. Nodes with no Length shown
                have been finalised. The frontier and finalised nodes are also
                highlighted in the graph display.
            \\Expl}
            \\In{
                remove next node n from Nodes and finalise it \\Ref Next_node
                // The Parent of n has now been determined
                if task_completed(n) \\Ref Completed
                \\Expl{ Have we found the end node, or explored the
                        whole connected component of the graph?
                \\Expl}
                \\In{
                    return \\B 3
                    \\Expl{ If we have explored the whole graph component without
                        finding the end node that should be indicated, otherwise
                        the Parent array has the desired path information.  Here we
                        highlight the path found in the Parent array,
                        if successful, and the explored component otherwise.
                    \\Expl}
                \\In}
                for each node m neighbouring n // G has edge from n to m \\B 4
                \\In{
                    update Nodes, Parent etc with n & m \\Ref UpdateNodes
                \\In}
            \\In}
            return \\B 99
            \\Expl{ We have failed to find e and some indication of
                    this should be returned. In this animation we
                    restrict e to be some node in the graph so this
                    line is never reached.
            \\Expl}
        \\In}
\\Code}

\\Code{
    Init
        initialise each element of array Parent to zero \\B 5
        initialise each element of array Length to infinity \\B 6
        Length[s] <- 0 \\B 7
        Nodes <- PQ containing all nodes // only s has finite cost \\B 8
        \\Note{ Nodes in the PQ with finite cost are in the frontier; others
            are yet to be seen.
        \\Note}
\\Code}

\\Code{
    Next_node 
        n <- PQRemoveMin(Nodes) // remove lowest cost element of Nodes PQ \\B 9
        \\Expl{ n is the node in the frontier with the shortest known path
                length back to s plus heuristic value (if it has infinite
                cost it must be in a component not connected to s; not
                actually in the frontier).
        \\Expl}
    
\\Code}

\\Code{
    Completed
        if n = e or Length[n] = infinity \\B 10
        \\Expl{ If the Length of n is infinite we have searched the whole
                component (without finding the end node) and we should
                return a failure indication.
                Otherwise, if n is the end node we have succeeded and
                the Parent array has the path.
        \\Expl}
\\Code}
    
    
\\Code{
    UpdateNodes
        if m is in Nodes PQ and Length[n] + weight(n,m) < Length[m] \\B 11
        \\Expl{ The path from s to n to m is shorter than the current
            shortest known path from s to m. If Length[m] == infinity
            it will be replaced with a finite weight, implicitly moving
            m from the unseen nodes to the frontier.
        \\Expl} 
        \\In{
            Length[m] <- Length[n] + weight(n,m) // smaller path length from s \\B 12
            PQUpdateCost(Nodes, m, Length[m]+heur(m)) // update cost in Nodes PQ \\B 13
            Parent[m] <- n \\B 14
            \\Expl{ The shortest known path to m now goes via n.
            \\Expl}
        \\In}
\\Code}
`);
