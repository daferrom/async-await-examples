const promiseA = new Promise((resolve, reject) => {
    resolve(23);
  });
  
  const promiseB = new Promise((resolve, reject) => {
    if (12 * 11 === 144) {
      resolve(144);
    } else {
      reject({
        errorType: 'TypeError',
        message: `Unexpected type - expected ${typeof (12 * 12)}.`,
      });
    }
  });
  
/* the method all receives and iterable and returns the values only if all promises were resolved */
  Promise.all([promiseA, promiseB])
    .then((values) => {
      console.log(`Results from Promise.all(): [${values}]`);
    })
    .catch((err) => {
      console.log(`Promise.all Failed! \n${err.errorType}: ${err.message}`);
    })
    .finally(() => {
      console.log('Operations for Promise.all() have finished.');
    });
  