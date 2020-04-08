//import express from 'express';
let express = require('express');

let palindromeController = require('./palindrome.controller');
let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/', palindromeController.palindrome);

module.exports = router;