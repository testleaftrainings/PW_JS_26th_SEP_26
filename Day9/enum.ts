//numeric enum(By default)

// enum browserStatus{

//     open,
//     close,
//     maximize,
//     minimize
// }

// console.log(browserStatus)
/* {
  '0': 'open',
  '1': 'close',
  '2': 'maximize',
  '3': 'minimize',
  open: 0,
  close: 1,
  maximize: 2,
  minimize: 3
} */
//console.log(browserStatus.maximize)//2

//string enum

// enum testResults{

//     pass="passed",
//     fail="failed",
//     skip="skipped"
// }

// console.log(testResults)//{ pass: 'passed', fail: 'failed', skip: 'skipped' }


//heterogenous enum

enum testResults{

    pass="passed",
    fail=30,
    skip
}

console.log(testResults);

//{ '30': 'fail', '31': 'skip', pass: 'passed', fail: 30, skip: 31 }
