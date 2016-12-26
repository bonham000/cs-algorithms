
function LinkedList() { 

  var length = 0; 
  var head = null; 

  var Node = function(element) {
    this.element = element; 
    this.next = null; 
  };

  this.print = function()  {
    let node = this.head();
    let result = new String();
    while (node.next != null) {
      result += (node.element + ', ');
      node = node.next;
    }
    result += (node.element + '.');
    console.log(result);
  };

  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
    let node = this.head();
    let newNode = new Node(element);
    if (node == null) {
      head = newNode;
    } else {
      while (node.next != null) {
        node = node.next;
      }
      node.next = newNode;
    }
    length++;
  };

  this.addAt = function(element, index) {
    let length = this.size();
    let newNode = new Node(element);
    if (index < 0 || index > (length + 1)) {
      return 'The element cannot be added at that index';
    } else if (index == 0) {
      let currentHead = this.head();
      newNode.next = currentHead;
      head = newNode;
      return newNode;
    } else {
      let currentIndex = 0;
      function findIndex(node, prev, currentIndex) {
        if (currentIndex == index) {
          newNode.next = node;
          prev.next = newNode;
          length++;
          return newNode;
        } else if (currentIndex < length) {
          currentIndex++;
          return findIndex(node.next, node, currentIndex);
        };
      };
      findIndex(this.head(), null, currentIndex);
    };
  };

  this.remove = function(element) {
    let node = this.head();
    let prev = null;
    function searchAndRemove(node, prev) {
      if (node.element == element && prev == null) {
        head = node.next;
        length--;
      } else if (node.element == element) {
        prev.next = node.next;
        length--;
      };
      if (node.next != null) {
        return searchAndRemove(node.next, node);
      };
    };
    searchAndRemove(node, prev);
  };

  this.removeAt = function(index) {
    if (index < 0 || index > this.size()) {
      return null;
    } else {
      let currentIndex = 0;
      let node = this.head();
      let prev = null;
      if (index == 0) {
        head = node.next;
        length--;
        return node;
      } else {
        while (node.next != null) {
          if (currentIndex == index) {
            prev.next = node.next;
            length--;
            return node;
          }
          prev = node;
          node = node.next;
          currentIndex++;
        };
        if (currentIndex == index) {
          prev.next = null;
          length--;
          return node;
        };
      };
    };
  };

  this.size = function() {
    return length;
  };

  this.isEmpty = function() {
    return this.size() > 0 ? false : true;
  };

  this.indexOf = function(element) {
    let index = 0;
    let locations = new Array();
    let node = this.head();
    while (node.next != null) {
      if (node.element == element) {
        locations.push(index);
      }
      index++;
      node = node.next;
    };
    if (locations.length > 0) {
      return locations;
    } else {
      return -1;
    };
  };

  this.elementAt = function(index) {
    let count = 0;
    function find(node) {
      if (count == index) {
        return node.element;
      };      
      count++;
      if (node.next == undefined) {
        return 'This element is not present';
      } else {
        return find(node.next);
      };
    };
    return find(this.head());
  };

};

// Test your code
var conga = new LinkedList();

conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Kitten');
conga.add('Lion');

conga.print();
conga.addAt('Tiger', 6);
conga.print();






