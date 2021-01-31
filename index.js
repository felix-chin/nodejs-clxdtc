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

const n = 100;

clxDTC(n);
