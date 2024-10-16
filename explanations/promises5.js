const firstPromise = new Promise((resolve, reject) => {
    resolve("Hi this is the first promise resolved")
    reject("Hi this is the firs promise rejected")
})

const secondPromise = new Promise((res, rej)=>{
    res("this is the second  promised fulfilled")
    rej("This is the second promise rejected")
})


const successCallback = (str) => {
    console.log("This is the first callback executed",str)
}

const failureCallbackCallback = (str) => {
    console.log("This is the second callback executed", str)
}

const promise1 = firstPromise.then()