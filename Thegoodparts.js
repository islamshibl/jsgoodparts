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
