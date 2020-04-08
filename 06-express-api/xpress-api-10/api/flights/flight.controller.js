let flights = require('../../data');

function getFlights(req, res) {
    console.log('Getting Flights...');
    res.status(200).json(flights); //httpStatus.OK
}

/*
HEADER
Content-Type: application/json
*/
/*
BODY
{
    "number": "999",
    "origin": "CBBA",
    "destination": "SLC",
    "departs": "01:00PM",
    "arrives": "09:00PM"
}
*/
function createFlight(req, res) {
    let data = req.body;
    console.log('Creating Flights', data);
    let number = data.number;
    let origin = data.origin;
    let destination = data.destination;
    let departs = data.departs;
    let arrives = data.arrives;
    let item = {
        number,
        origin,
        destination,
        departs,
        arrives
    };
    flights[number] = item;
    console.log(item);
    res.status(201).json(item);
    console.log('Flight created');
}

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


function deleteFlight(req, res) {
    let number = req.params.id;
    let item = flights[number];
    delete flights[number];
    res.status(200).json(item);
    console.log('Flight deleted');
}


/*
HEADER
Content-Type: application/json
*/
/*
BODY
{
    "origin": "CDMX",
    "destination": "PHX",
    "departs": "9:00 AM",
    "arrives": "9:30 PM"
}
*/

function updateFlight(req, res) {
    let number = req.params.id; 
    console.log('Updating flight:', number)
    let data = req.body;
    let origin = data.origin;
    let destination = data.destination;
    let departs = data.departs;
    let arrives = data.arrives;
    //call the create function for our database
    let item = {
        number,
        origin,
        destination,
        departs,
        arrives
    };
    flights[number] = item;
    res.status(200).json(item);
    console.log('Flight updated');
}

module.exports = {
    getFlights,
    createFlight,
    deleteFlight,
    updateFlight,
    palindrome
};