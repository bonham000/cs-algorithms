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
        intervals[i].end = newInterval.end;
        intervals = intervals.slice(0, i + 1);
        return intervals;
      }
    }

    if (i > 0 && newInterval.start > intervals[i - 1].end && newInterval.start < intervals[i].start) {
      for (var j = i; j < intervals.length; j++) {
        if (newInterval.end < intervals[j].start) {
          intervals.splice(i - 1, j - i - 1);
          intervals.splice(i, 1, newInterval);
          return intervals;
        } else if (newInterval.end < intervals[j].end) {
          newInterval.end = intervals[j].end;
          intervals.splice(i - 1, j - i - 1);
          intervals.splice(i, 1, newInterval);
          return intervals;          
        }
      }
      intervals.splice(i, intervals.length - i);
      intervals.push(newInterval);
      return intervals;
    }
  }

  if (newInterval.end > intervals[intervals.length - 1].end) {
    intervals = newInterval;
  } else {
    intervals.push(newInterval);
  }
  return intervals;

};

// Interval Object 
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

// Initial Input Array
var intervals = [new Interval(3,5), new Interval(9,11), new Interval(14,16)];

// Test Case Intervals
var before = new Interval(1,2);
var after = new Interval(20, 25);
var middle = new Interval(6, 7);
var overlap1 = new Interval(4, 8);
var overlap2 = new Interval(4, 10);
var overlap3 = new Interval(4, 18);
var overlap4 = new Interval(6, 12);
var overlap5 = new Interval(6, 10);
var overlap6 = new Interval(6, 20);
var wrap = new Interval(1, 25);

// Test Function
function testIntervals(interval) {
  document.getElementById('log').innerHTML += '<b>Insert:</b> ' + JSON.stringify(interval);
  document.getElementById('log').innerHTML += '<br>';
  document.getElementById('log').innerHTML += '<b>Intervals:</b> ' + JSON.stringify(intervals); 
  document.getElementById('log').innerHTML += '<br><br>';
  document.getElementById('log').innerHTML += '<b>Result:</b> ' + JSON.stringify(insert(intervals, interval));
}

// Run Tests
testIntervals(wrap);