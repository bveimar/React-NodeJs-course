import Mortgage from './mortgage';

//Here there is at least one issue, even after use babel, you need fix that
// hay que instancias la clase
let principal = 200000;
let years = 30;
let rate = 5;

let {monthlyPayment, monthlyRate, amortization} = 
    Mortgage.amortization(principal, years, rate);
   