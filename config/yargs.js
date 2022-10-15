const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        })
    .option('l',{
        alias: 'limit',
        type: 'number',
        demandOption: true,
        })
    .option('m',{
        alias: 'mostrar',
        type: 'boolean',
        demandOption: false,
        })
    .check((argv, options) => {
        if(isNaN( argv.b)){
            throw 'la base tiene que ser un numero'
        }
        if(isNaN( argv.l)){
            throw 'el limit tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports= argv;