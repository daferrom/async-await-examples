function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const randomNumberErrorTrigger =  getRandomInt(10)

function myPromise() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if(randomNumberErrorTrigger % 2 === 0)
                res(`Successful MyPromise! ${randomNumberErrorTrigger}`)
            else {
                rej("first promise rejected!")
            }
        }, 1500);
    })
}

function mySecondPromise() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if(randomNumberErrorTrigger % 2 === 0)
                res(`Successful mySecondPromise! ${randomNumberErrorTrigger}`)
            else {
                rej("Second promise rejected!")
            }
        }, 1500);
    })
}

async function someAsyncAwaitFunction() {
    try {
        const promise = await myPromise();
        const promiseTwo = await mySecondPromise();

        console.log(promise);
        console.log(promiseTwo);
    } catch(error) {
        console.error(`Error from async function: ${error}`)
    }
}

someAsyncAwaitFunction()