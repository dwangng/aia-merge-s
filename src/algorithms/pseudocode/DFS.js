import parse from '../../pseudocode/parse';

export default parse(`
\\Code{
    Main
    DFS(G, s) // Depth first search of graph G from start node s \\B 1
    \\Expl{ Given a graph G, find a path from the start node s to an
            end node.  It is assumed the end node(s) are defined
            separately; if there are no end nodes, paths to all connected
            nodes are found. Nodes are numbered 1..nmax. Returns the Parent
            array, which gives the previous node in the path from s to the
            node i (if one has been found; Parent[i] = 0 otherwise).
    \\Expl}
    \\In{
        initialise, with fontier={s}, stored in Nodes \\Ref Init
        while Nodes is not empty \\B 2
            \\Expl{ Nodes is the data structure used to represent the frontier.
                For DFS, Nodes is a stack, shown below the arrays.
                The stack can have repeated elements and when we pop a node off
                the stack it is ignored if it has already been finalised.
                The frontier nodes are those in the stack that are not finalised.
                The frontier and finalised nodes are also highlighted in the
                graph display.
            \\Expl}
        \\In{
            remove next node n from Nodes and finalise it \\Ref Next_node
            // The Parent of n has now been determined
            if task_completed(n) \\Ref Completed
            \\Expl{ If there are no end nodes the whole connected component
                   of G will be explored and we can skip this "if".
            \\Expl}
            \\In{
                return \\B 3
                \\Expl{ If there can be several end nodes we may want to
                       return which one is found as well as the Parent array.
                       Here we highlight the path found in the Parent array.
                \\Expl}
            \\In}
            for each node m neighbouring n // G has edge from n to m \\B 4
            \\In{
                update Nodes, Parent etc with n & m \\Ref UpdateNodes
            \\In}
        \\In}
        return \\B 5
        \\Expl{ A path to every node connected to s has been found.
                If we were searching for an end node we have failed
                and some indication of this should be returned.
        \\Expl}
    \\In}
    \\Code}
    
    \\Code{
    Init
        initialise each element of array Parent to zero \\B 6
        initialise each element of Finalised to False \\B 7
        Nodes <- stack containing just s \\B 8
    \\Code}
    
    \\Code{
    Next_node
\\Note{ XXX could re-code this as follows (not sure if its and more
clear but worth considering). Current coding emphasises we pop a node
then have to deal with "special" cases.
        repeat
            n <- pop(Nodes)
        until !Finalised[n] || Nodes is empty
        if Nodes is empty
            return
\\Note}
        n <- pop(Nodes) // pop n from the top of the Nodes stack \\B 9
        while Finalised[n] // ignore finalised nodes \\B 10
        \\Expl{ The Nodes stack can have finalised nodes, which must be
            ignored to avoid repeated search. The frontier is implicit:
            it is everything in the Nodes stack that is not in Finalised.
        \\Expl}
        \\In{
            if Nodes is empty // need to check this before popping a node \\B 11
            \\In{
                return \\B 12
                \\Expl{ A path to every node connected to s has been found.
                    If we were searching for an end node we have failed
                    and some indication of this should be returned.
                \\Expl}
            \\In}
            n <- pop(Nodes) // pop n from the top of the Nodes stack \\B 13
        \\In}
        Finalised[n] <- True  // n is now finalised \\B 14
    \\Code}
    
    \\Code{
    Completed
        if is_end_node(n) \\B 15
        \\Expl{ If we were searching for an end node we have succeeded!
            If we just want to traverse the whole graph component connected
            to s, we can skip this "if".
        \\Expl}
    \\Code}
    
    
    \\Code{
    UpdateNodes
        if not Finalised[m] \\B 16
        \\Expl{ This is not strictly necessary but it saves pushing finalised
            nodes onto the Nodes stack and ignoring them later.
        \\Expl}
        \\In{
            Parent[m] <- n \\B 17
            push(Nodes, m) // add m to top of Nodes stack \\B 18
        \\In}
    \\Code}
`);
