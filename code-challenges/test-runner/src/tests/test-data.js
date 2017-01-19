function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
};

var tests = [
  { description: "commas are rotated properly",          run: generateDummyTest(), status: 3 },
  { description: "exclamation points stand up straight", run: generateDummyTest(), status: 3 },
  { description: "run-on sentences don't run forever",   run: generateDummyTest(), status: 3 },
  { description: "question marks curl down, not up",     run: generateDummyTest(), status: 3 },
  { description: "semicolons are adequately waterproof", run: generateDummyTest(), status: 3 },
  { description: "capital letters can do yoga",          run: generateDummyTest(), status: 3 }
];

export default tests;