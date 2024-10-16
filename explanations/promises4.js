const myPromise = (password)=>{
    return  new Promise((res, rej)=>{
        if(password === mockPassword) {
            res("Hi resolved promise")
        } else {
            rej("Hi rejected promise")
        } 
    })
}


function successCallback(str){
  console.log("This is the resolved promise:", str)
}

function failureCallback(str){
  console.log("This is the rejected promise", str)
}

// const promise = doSomething();
// const promise2 = promise.then(successCallback);

const mockPassword = 1234

const promise4 =myPromise(123)
const promise5 = promise4.then(successCallback, failureCallback)