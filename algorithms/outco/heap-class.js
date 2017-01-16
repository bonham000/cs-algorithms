class Heap{

  constructor(type = 'min'){
    this.storage = [];
    this.type = type;
  }

  compare(a, b){
    if (this.type === 'min') {
      return (this.storage[a] < this.storage[b]) ? true : false;
    } else if (this.type === 'max') {
      return (this.storage[a] > this.storage[b]) ? true : false;
    }
  }

  swap(index1, index2){
    [this.storage[index1], this.storage[index2]] = [this.storage[index2], this.storage[index1]];
  }

  peak(){
    return this.storage[0];
  }

  size(){
    return this.storage.length;
  }

  insert(value){
    this.storage.push(value);
    this.size++;
    console.log(value)
    this.bubbleUp(this.storage.length - 1);
  }

  bubbleUp(index){
    var parent = Math.floor((index - 1) / 2);
    console.log(index, parent)
    if (index > 0 && this.compare(index, parent)) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }
  }

  removePeak(){
    this.swap(0, this.storage.length - 1);
    var peak = this.storage.pop();
    this.bubbleDown(0)
    return peak;
  }

  bubbleDown(index){
    if (index >= this.storage.length) return;
    var leftChild = (2 * index) + 1;
    var rightChild = (2 * index) + 2;

    if (leftChild < this.storage.length) {

	    if (!this.compare(index, leftChild) || !this.compare(index, rightChild)) {
	    	var swap;
	    	if (rightChild >= this.storage.length) {
	    		swap = leftChild
	    	} else {
	    		swap = (this.compare(leftChild, rightChild)) ? leftChild : rightChild;
	    	}
	    	this.swap(index, swap);
	    	this.bubbleDown(swap);
	    }
	  }

  }

  remove(value){
    var removed;
    if (this.storage.indexOf(value) !== -1) {
      var idx = this.storage.indexOf(value);
      this.swap(idx, this.storage.length - 1);
      removed = this.storage.pop();
      var parent = (idx - 1) / 2;
      if (!this.compare(parent, idx)) {
        this.bubbleUp(idx);
      } else {
        this.bubbleDown(idx);
      }
    }
    return removed;
  }
}