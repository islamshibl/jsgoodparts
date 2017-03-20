var MYAPP ={};
//Objects and accesing them
MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
//console.log(flight.arrival.IATA);
//console.log(flight["number"])
//Attempt to retrieve non existant member
//console.log(flight.nan); //undefined

//console.log(flight.equipment.equibment);

//objects are passed by reference they never copied;
MYAPP.x = MYAPP.flight;
//console.log(x.airline);
MYAPP.x.airline = "Eg..."

//console.log(x.airline);
//console.log(flight.airline);
MYAPP.x.nickname = 'Curly';
MYAPP.nick = MYAPP.flight.nickname;
//console.log(nick);
MYAPP.a = {}, MYAPP.b = {}, MYAPP.c = {}; //different empty objects
MYAPP.a = MYAPP.b = MYAPP.c = {}
//same empty object
//console.log(a);



//Prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        F = function () { };
        F.prototype = o;
        return new F();
    };
}
MYAPP.fastFlight = Object.create(MYAPP.flight);
MYAPP.fastFlight.airline = "dsds";
//console.log(flight.airline)
//console.log(fastFlight.airlinex);


/*The prototype link is used only in retrieval. If we try to retrieve a property value from
an object, and if the object lacks the property name, then JavaScript attempts to
retrieve the property value from the prototype object. And if that object is lacking the
property, then it goes to its prototype, and so on until the process finally bottoms out
with Object.prototype. If the desired property exists nowhere in the prototype chain,
then the result is the undefined value. This is called delegation.
*/

//Reflection
// console.log(typeof flight.toString);


//Enumeration
for (var name in MYAPP.fastFlight) {
    if (typeof MYAPP.fastFlight[name] !== 'function') {
       // console.log(name + ' : ' + fastFlight[name]);
    }
}

//Delete
//Used to remove property from an object
//can't remove any property from the prototype chain
console.log(MYAPP.flight.nickname)
delete MYAPP.flight.nickname
console.log(MYAPP.flight.nickname)

//Global Abatement