
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

  if (newInterval.end < intervals[0].start) {
    intervals.unshift(newInterval);
    return intervals;
  }

  for (var i = 0; i < intervals.length; i++) {

    if (newInterval.start > intervals[i].end && intervals[i + 1] && newInterval.end < intervals[i + 1].start) {
      intervals.splice(i + 1, 0, newInterval);
      return intervals;
    }

    if (newInterval.start > intervals[i].start && newInterval.start < intervals[i].end) {
      if (newInterval.end < intervals[i].end) {
        return intervals;
      } else {
        for (var j = i + 1; j < intervals.length; j++) {
          if (newInterval.end < intervals[j].start) {
            intervals[i].end = newInterval.end;
            intervals.splice(i + 1, j - i - 1);
            return intervals;
          } else if (newInterval.end < intervals[j].end) {
            intervals[i].end = intervals[j].end;
            intervals.splice(i + 1, j - i);
            return intervals;
          }
        }
      }
    }

  }

  intervals.push(newInterval);
  return intervals;

};

// Test data 
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var existingIntervals = [ new Interval(1,2), new Interval(3,5), new Interval(6,8), new Interval(9,10), new Interval(12,16)];
var newInterval = new Interval(4,7);

// for debugging purposes
var result = 'error';
try {
    result = JSON.stringify(insert(existingIntervals, newInterval));
} catch (e) {
    alert(e);
}

document.getElementById('log').innerHTML = result;




