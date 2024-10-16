/* Example of promises working */

function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
  }

  function successCallback(result) {
    console.log(`Audio file ready at URL: ${result}`);
  }
  
  function failureCallback(error) {
    console.error(`Error generating audio file: ${error}`);
  }


const promise = doSomething();
const promise2 = promise.then(successCallback , failureCallback);
