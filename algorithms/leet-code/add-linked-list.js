
// add two numbers represented in a linked list, solution:
// this solution has time complexity O(m + n) where m and n are the number of elements in the two lists
function addTwoNumbers(L1, L2) {
  let r = 0;
  let node1 = L1;
  let node2 = L2;
  let pt = null;
  let ref = null;
  while (true) {
    let add = ((node1 != null) ? node1.val : 0) + ((node2 != null) ? node2.val : 0) + r;
    if (add > 9) {
      add = add - 10;
      r = 1;
    } else {
      r = 0;
    };
    if (pt == null) {
        pt = new ListNode(add);
        ref = pt;
    } else {
        let newNode = new ListNode(add);
        pt.next = newNode;
        pt = newNode;
    }
    (node1 != null) ? ((node1.next != null) ? node1 = node1.next : node1 = null) : null;
    (node2 != null) ? ((node2.next != null) ? node2 = node2.next : node2 = null) : null;
    if (node1 == null && node2 == null) break;
  };
  if (r != 0) {
    let newNode = new ListNode(r);
    pt.next = newNode;
    pt = newNode;
  }
  return ref;
};