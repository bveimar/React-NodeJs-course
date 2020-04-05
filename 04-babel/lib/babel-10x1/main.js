"use strict";

var _mortgage = require("./mortgage");

var _mortgage2 = _interopRequireDefault(_mortgage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Here there is at least one issue, even after use babel, you need fix that
let principal = 200000;
let years = 30;
let rate = 5;

let {
  monthlyPayment,
  monthlyRate,
  amortization
} = _mortgage2.default.calculateAmortization(principal, years, rate);