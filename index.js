// iterates through i until n input is reached
// if i modulus 15 is equal to 0, print out 'CLXDTC'
// if i modulus 3 is equal to 0, print out 'CLX'
// if i modulus 5 is equal to 0, print out 'DTC'
// otherwise print out the current iteration of i
const clxDTC = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('CLXDTC');
    } else if (i % 3 === 0) {
      console.log('CLX');
    } else if (i % 5 === 0) {
      console.log('DTC');
    } else {
      console.log(i)
    }
  }
}

// call the function with input of 100
const n = 100;
clxDTC(n);
