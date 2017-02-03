
"use strict";

/**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
*/

var insert = function(intervals, newInterval) {
    // TODO: solution goes here
  if (newInterval.start < intervals[0].start && newInterval.end < intervals[0].end) {
    intervals.unshift(newInterval);
    return intervals;
  }
  // find location new interval needs to be inserted
  // begin by iterating through array
  for (var i = 0; i < intervals.length; i++) {
      if (intervals[i].start < newInterval.start && newInterval.start < intervals[i].end) {
          for (var j = i + 1; j <= intervals.length; j++) {
              if (intervals[j] !== undefined && intervals[j].end > newInterval.end) {
                  // set the new interval, knowing where it starts and ends
                  if (j === i + 1) {
                    intervals[i].end = newInterval.end;
                  } else if (j <= intervals.length) {
                    intervals[i].end = intervals[j].end;
                    intervals.splice(i + 1, j - 1);                    
                  } else {
                    // if overlaps past end
                    intervals[i].end = newInterval.end;
                    intervals = intervals.slice(0, j);
                  }
                  return intervals;
              }
          }
      }
  }
  
  // new interval range doesn't overlap with current, add to end
  intervals.push(newInterval);
  return intervals;
  
};



// Test data 
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */ 
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var existingIntervals = [new Interval(1,2),new Interval(3,5),new Interval(6,7), new Interval(8,10), new Interval(12,16)];
var newInterval = new Interval(0, 1);



// for debugging purposes
var result = 'error';
try {
    result = JSON.stringify(insert(existingIntervals, newInterval));
} catch (e) {
    alert(e);
}

document.getElementById('log').innerHTML = result;




