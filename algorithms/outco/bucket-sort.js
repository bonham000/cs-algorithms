function insertionSort(arr){

  function compareAndShift(indexToCompare){
    while (indexToCompare > 0 && arr[indexToCompare] < arr[indexToCompare-1]){
      var temp = arr[indexToCompare];
      arr[indexToCompare] = arr[indexToCompare-1];
      arr[indexToCompare-1] = temp;
      indexToCompare--;
    }
  }

  for (var i = 0; i < arr.length; i++){
    compareAndShift(i);
  }

  return arr;
}

// for our bucket sort function, we will make use of insertion sort to sort within each bucket
function bucketSort(input){

  var buckets = [];
  while (buckets.length < 10) buckets.push([]);

  function scatter(number) {
    if (number > 0 && number < 0.1) {
      buckets[0].push(number);
    } else if (number >= .1 && number < .2) {
      buckets[1].push(number);
    } else if (number >= .2 && number < .3) {
      buckets[2].push(number);
    } else if (number >= .3 && number < .4) {
      buckets[3].push(number);
    } else if (number >= .4 && number < .5) {
      buckets[4].push(number);
    } else if (number >= .5 && number < .6) {
      buckets[5].push(number);
    } else if (number >= .6 && number < .7) {
      buckets[6].push(number);
    } else if (number >= .7 && number < .8) {
      buckets[7].push(number);
    } else if (number >= .8 && number < .9) {
      buckets[8].push(number);
    } else if (number >= 9.0) {
      buckets[9].push(number);
    }
  };

  for (var n of input) scatter(n);

  return buckets.reduce((sorted, bucket) => {
  	return sorted.concat(insertionSort(bucket));
  }, []);

};