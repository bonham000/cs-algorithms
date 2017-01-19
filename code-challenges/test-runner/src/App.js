
import React, { Component } from 'react';

// import the tests from another file, this will be easier to maintain by separating the tests from the code that runs them
import tests from './tests/test-data'

export default class App extends Component {
  // initialize the state with all the tests
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      tests: tests,
      passed: 0,
      completed: 0
    }
  }

  // we just need one method to run all the tests
  runTests = () => {
    if (!this.state.running) {
      this.setState({ running: true })
      this.state.tests.forEach((test, idx) => {
        let fn = test.run;
        let cb = (result) => {
          let { tests, passed, completed } = this.state;
          tests[idx].status = (result) ? 1 : 2;
          this.setState({
            tests,
            passed: (result) ? passed + 1 : passed,
            completed: completed + 1
          })
        }
        fn(cb);
      })
    }
  }
  // the render method has a lot of code to track the current state of all the tests
  render() {

    // render tests
    let tests = this.state.tests.slice();
    let sorted = tests.sort((a, b) => a.status - b.status);
    let renderTest = sorted.map((test, i) => {
      let passed = '#6AF99F';
      let failed = '#DE455D';
      let style = { background: '#C8C8C8' }
      if (test.status === 1) style.background = passed;
      if (test.status === 2) style.background = failed;
      return (
        <div key={i} className='test' style={style}>
          <p>{test.description}</p>
        </div>
      );
    });

    // determine status of all tests
    let passed = this.state.passed;
    let completed = this.state.completed;
    let finished = completed === this.state.tests.length
    let failed = completed - this.state.passed;
    let running = (!this.state.running) ? 0 : this.state.tests.length - completed;
    if (finished) running = 0;

    return (
      <div className='App'>
        <h1>Welcome to the Ultimate Test Runner UI</h1>
        <h2 className='subTitle'>Current State of Tests:</h2>
        <h2>{passed} {(passed === 1) ? <span>test</span> : <span>tests</span>} out of {this.state.tests.length} have passed</h2>
        <h2>{failed} {(failed === 1) ? <span>test</span> : <span>tests</span>} out of {this.state.tests.length} have failed</h2>
        <h2>{running} {(running === 1) ? <span>test is</span> : <span>tests are</span>} still running</h2>
        {!finished ?
          <button onClick={this.runTests} className='testBtn'>Run All the Tests!</button>
          :
          <h2>All Tests Finished!</h2> }
        {renderTest}
      </div>
    );
  }
};







