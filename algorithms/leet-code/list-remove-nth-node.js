// remove the nth node from a singly linked list given the distance from the end of the list
// only loop through the list once
var removeNthFromEnd = function(head, n) {
    let store = { len: 0 }
    let node = head;
    let count = 0;
    while (node != null) {
        store[count] = node;
        node = node.next;
        count++;
        store.len = count;
    };
    let len = store.len;
    let idx = len - n;
    
    if (len == 0 && n == 1) return [];
    if (len == 1 && n == 1) return [];
    if (len == n) return head.next
    store[idx - 1].next = store[idx + 1];
    
    return head;
};
// running time is O(n) in all cases because you must loop through the entire list to determine which node to remove
// space complexity is O(2n) at minimum because all the nodes are stored separately in a hash table