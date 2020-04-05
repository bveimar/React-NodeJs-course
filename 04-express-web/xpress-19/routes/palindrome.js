
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('palindrome', {});
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  let data = { result: checkPalindrom(req.body.A) };
  res.render('palindrome', data);
});

module.exports = router;

function checkPalindrom(cadena)
{
 /* remove special characters, spaces and make lowercase*/
 var removeChar = cadena.replace(/[^A-Z0-9]/ig, "").toLowerCase();

 /* reverse removeChar for comparison*/
 var checkPalindrome = removeChar.split('').reverse().join('');

 /* Check to see if str is a Palindrome*/
  //return (removeChar === checkPalindrome);
if(cadena){

  if( removeChar === checkPalindrome)
   {
      return ('La cadena es palindrome.');
    }else{
      return ('La cadena no es palindrome!');
   }
}
else
return ('Ingrese Palabra!');
}
//checkPalindrom('oree')
