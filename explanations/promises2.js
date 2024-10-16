/* The promise objetc represents the eventual completion (or failure) of an synchronous operation and its resulting value.

Essentially a PRomise is a returned object to which you attach callbacks instead of passing callbacks

Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.*/

function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// If createAudioFileAsync() were rewritten to return a promise, you would attach your callbacks to it instead:

createAudioFileASync(audioSettings).then(successCallback, failureCallback)

/*Chaining 

A common need is to execute two or more asynchronous operations back to back 
where each subsequent operation starts when the previous succeds with the result of the previous step

In the old days , doing several , asynchronuous operations in a row would lead the classsic callback hell*/

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

doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// Here's the magic: the then() function returns a new promise, different from the original:

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);


