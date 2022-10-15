const { ADDRCONFIG } = require('dns');
const argv = require('./config/yargs');
const Color = require('colors');



let base = argv.b;
let limit = argv.limit;
for(let i = 1;i<=limit;i++){
    if(i == limit && !argv.m){
        console.log('fin del programa'.red)
    }
    if(argv.m){
        if(i===1)
            {   
             console.log(`== Tabla del ${base} hasta el ${limit} ==`.blue)
            }
    console.log(` ${base} x ${i} = ${base*i}`.blue);
    }
}
