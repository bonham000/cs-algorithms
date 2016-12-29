// given two sorted lists merged them into one sorted list
// this has time complexity O(2n + 2m) and space complexity of O(3n + 3m);
var mergeTwoLists = function(l1, l2) {
    if (l1 == null && l2 == null) return [];
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    function toArray(list) {
        let R = [];
        while (list != null) {
            R.push(list.val);
            list = list.next;
        }
        return R;
    }
    let R1 = toArray(l1);
    let R2 = toArray(l2);
    let merged;
    let head;
    while (R1.length > 0 && R2.length > 0) {
        if (R1[0] < R2[0]) {
            if (merged == null) {
                merged = new ListNode(R1[0]);
                head = merged;
                R1.shift();
            } else {
                let node = new ListNode(R1[0]);
                merged.next = node;
                merged = node;
                R1.shift();   
            }
        } else {
            if (merged == null) {
                merged = new ListNode(R2[0]);
                head = merged;
                R2.shift();
            } else {
                let node = new ListNode(R2[0]);
                merged.next = node;
                merged = node;
                R2.shift();
            }
        }
        if (R1.length == 0) {
            while (R2.length > 0) {
                let node = new ListNode(R2[0]);
                merged.next = node;
                merged = node;
                R2.shift();
            }
        }
        if (R2.length == 0) {
            while (R1.length > 0) {
                let node = new ListNode(R1[0]);
                merged.next = node;
                merged = node;
                R1.shift();
            }
        }
    }
    return head;
};