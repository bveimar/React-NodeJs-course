"use strict";

var _mylib = require("./mylib");

var _mylib2 = _interopRequireDefault(_mylib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Modules - function with params export
let w = (0, _mylib2.default)(100, 500);
console.log(`w = ${w}`); //Why .default? https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x

let z = require('./mylib').default(10, 50);

console.log(`z = ${z}`);