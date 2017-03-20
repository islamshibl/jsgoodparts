//Objects and accesing them
var flight = {
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
console.log(flight.arrival.IATA);
console.log(flight["number"])
//Attempt to retrieve non existant member
console.log(flight.nan); //undefined

//console.log(flight.equipment.equibment);

//objects are passed by reference they never copied;
var x =flight;
console.log(x.airline);
x.airline="Egy"

//console.log(x.airline);
//console.log(flight.airline);
x.nickname ='Curly';
var nick =flight.nickname;
//console.log(nick);
var a={},b={},c={}; //different empty objects
a=b=c={} 
//same empty object
//console.log(a);



//Prototype
if(typeof Object.create !=='function'){
    Object.create =function(o){
        var F =function(){};
        F.prototype =o;
        return new F();
    };
}
var fastFlight=Object.create(flight);
fastFlight.airline ="dsds";
console.log(flight.airline)
console.log(fastFlight.airlinex);