const { taskOne, taskTwo } = require('./tasks.js');

async function main(){
    try {
        console.time('measuring time');
        const results = await Promise.all([taskOne(), taskTwo()])
        // const value1 = await taskOne();
        // const value2 = await taskTwo();
        console.timeEnd('measuring time');

        console.log('Task one returned', results[0]);
        console.log('Task two returned', results[1]);
    } catch(err){
        console.log(err);
    }
}

main();


