let palindromes = require('../../data');


function palindrome(req, res) {
    let data = req.body;
    console.log('Es Palindrome', data);
    let cadena = data.cadena;
    checkPalindrom(cadena);
}
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


module.exports = {
    palindrome
};