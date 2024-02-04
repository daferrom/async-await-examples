
const util = require('util')
const sleep = util.promisify(setTimeout);

module.exports = {

   async taskOne() {
        try {
            throw new Error('some problem')
            await sleep(4000);
            return 'one value'
        }
        catch(error) {
            console.log(error);
        }
   },

   async taskTwo(){
        try{
            await sleep(2000);
            return 'two value'
        }
        catch(error) {
            console.log(error);
        }
   }

}