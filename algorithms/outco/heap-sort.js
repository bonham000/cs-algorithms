
'use strict';

// heap helper data structure

class Heap{

  constructor(type){
    this.storage = [];
    this.type = type ? type : 'min';
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  compare(a, b){
    if (this.type === 'max'){
      return this.storage[a] > this.storage[b];
    } else {
      return this.storage[a] < this.storage[b];
    }
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  swap(index1, index2){
    var temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  peak(){
    return this.storage[0];
  }

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  size(){
    return this.storage.length;
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  insert(value){
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  bubbleUp(index){
    if (index < 1 || index >= this.size()){
      return;
    }

    var childIndex = index;
    var parentIndex;

    if (childIndex % 2 === 0){
      // even childIndex
      parentIndex = (childIndex - 2) / 2;
    } else{
      // odd childIndex
      parentIndex = (childIndex - 1) / 2;
    }

    while (childIndex > 0 && !this.compare(parentIndex, childIndex)){
      this.swap(parentIndex, childIndex);

      childIndex = parentIndex;
      if (childIndex % 2 === 0){
        parentIndex = (childIndex - 2) / 2;
      } else{
        parentIndex = (childIndex - 1) / 2;
      }
    }
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  removePeak(){
    this.swap(0, this.size() - 1);
    var toReturn = this.storage.pop();
    this.bubbleDown(0);
    return toReturn;
  }

  // Time Complexity: O(log(N))
  // Auxiliary Space Complexity: O(1)
  bubbleDown(index){
    if (index >= this.size()){
      return;
    }

    var parentIndex = index;
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;
    var masterChildIndex;

    if (childIndex1 >= this.size()){
      return;
    } else if(childIndex2 >= this.size()){
      masterChildIndex = childIndex1;
    } else if (this.compare(childIndex1, childIndex2)){
      masterChildIndex = childIndex1;
    } else {
      masterChildIndex = childIndex2;
    }
    
    while (parentIndex < this.size() - 1 && !this.compare(parentIndex, masterChildIndex)){
      this.swap(parentIndex, masterChildIndex);

      parentIndex = masterChildIndex;
      childIndex1 = 2 * parentIndex + 1;
      childIndex2 = 2 * parentIndex + 2;

      if (childIndex1 >= this.size()){
        return;
      } else if(childIndex2 >= this.size()){
        masterChildIndex = childIndex1;
      } else if (this.compare(childIndex1, childIndex2)){
        masterChildIndex = childIndex1;
      } else {
        masterChildIndex = childIndex2;
      }
    }


  }

  remove(value){
    for (var i = 0; i < this.storage.length; i++){
      if (this.storage[i] === value){
        this.swap(i, this.size()-1);
        var temp = this.storage.pop();
        this.bubbleUp(i);
        this.bubbleDown(i);
        return temp;
      }
    }

    return value + ' does not exist'; 
  }

}

// use heap data structure to implement heap sort:

function heapsort(input) {
    var result = [];
    var heap = new Heap('min');
    for (var el of input) heap.insert(el);
    while (heap.size() > 0) {
        result.push(heap.removePeak());
    }
    return result;
    
}
