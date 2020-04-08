//import express from 'express';
let express = require('express');
let flightController = require('./flight.controller');
let palindromeController = require('./palindrome.controller');
let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.get('/', flightController.getFlights);
router.post('/', flightController.createFlight);
router.get('/', palindromeController.palindrome);
router.delete('/:id', flightController.deleteFlight);
router.put('/:id', flightController.updateFlight);

module.exports = router;