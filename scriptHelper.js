// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput.trim() = "") {
        return ("Empty");
    } else if (isNaN(testInput)) {
        return ("Not a Number");
    } else if (!isNaN(testInput)) {
        return ("Is a Number");
    }   
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) || validateInput(copilot) === "Empty" || "Is a Number"){
        alert("The Pilot and Copilot Must Be Specified With Valid Names");
        event.preventDefault();
    } 
    if (validateInput(fuelLevel) || validateInput(cargoLevel) === "Empty" || "Not a Number") {
        alert("The Fuel Level and Cargo Mass Must Be Specified With Numerical Values")
        event.preventDefault();
    }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
