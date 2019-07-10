const argv = require('yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '9';
let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv);
console.log(argv2);

// crearArchivo(base).
// then(archivo => console.log(`Archivo creado ${archivo}`)).
// catch(e => console.log(e));