function djb2Code(str, buckets) {
 var hash = 5381;
 for (i = 0; i < str.length; i++) {
   char = str.charCodeAt(i);
   hash = ((hash << 5) + hash) + char; // hash  33 + c 
 }
 return hash % buckets;
};
  

'use strict';

function HashTable(){
  this.storage = [];
  this.buckets = 8;
  this.size = 0;
}


// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)
HashTable.prototype.hash = function(key){
  return djb2Code(key, this.buckets);
};


// Time Complexity: O(B) where B is the number of elements in the target bucket
// Auxiliary Space Complexity: O(1)
HashTable.prototype.insert = function(key, value){
  var index = this.hash(key);
  if (this.storage.length == 0) {
    this.storage[index] = [[key, value]];
  } else if (this.storage[index]) {
    for (var i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        this.storage[index][i][1] = value;
        return;
      }
    }
    this.storage[index].push([key, value]);
  } else {
    this.storage[index] = [[key, value]];
  }
  this.size++;
  if (this.size === 0.75 * this.buckets) {
    this.resize();
  }
};


// Time Complexity: O(B) where B is the number of elements in the target bucket
// Auxiliary Space Complexity: O(1)
HashTable.prototype.remove = function(key){
  var index = this.hash(key);
  if (this.storage[index]) {
    var val;
    var removed = this.storage[index].filter(tuple => {
      if (tuple[0] === key) {
        this.size--;
        val = tuple[1];
        return false;
      } else {
        return true;
      }
    });
    this.storage[index] = removed;
    if (this.size + 1 >= (0.25 * this.buckets) && this.size <= (0.25 * this.buckets)) {
      this.resize();
    }
    return val;
  };
};


// Time Complexity: O(B) where B is number of elements in target bucket
// Auxiliary Space Complexity: O(1)
HashTable.prototype.retrieve = function(key){
  var index = this.hash(key);
  if (this.storage[index]) {
    for (let tuple of this.storage[index]) {
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return;
  }
};


// Time Complexity: O(n)
// Auxiliary Space Complexity: O(n)
HashTable.prototype.resize = function(){
  var temp = [];
  for (var bucket of this.storage) {
    if (bucket) {
      for (var item of bucket) {
        if (item) {
          temp.push(item);
        }
      }
    }
  }
  var resizeBy = (this.size === 0.75 * this.buckets) ? 2 : 0.5;
  this.buckets *= resizeBy;
  this.size = 0;
  for (var item of temp) this.insert(item[0], item[1]);
};