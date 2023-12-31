require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageURL) {
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
        

        let destination = document.getElementById("missionTarget");
        
        destination.innerHTML += `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageURL}></img>`;
            
        console.log(destination);
    
                
};

function validateInput(testInput) {
    if (testInput.trim() == "") {
        return ("Empty");
    } else if (isNaN(testInput.trim())) {
        return ("Not a Number");
    } else if (!isNaN(testInput.trim())) {
        return ("Is a Number");
    }   
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        console.log(pilot);
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

        
        if ((fuelLevel < 10000) && (cargoLevel <= 10000)) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatusCheck").style.color = "#C7254E"; 

        } else if ((fuelLevel >= 10000) && (cargoLevel > 10000)) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatusCheck").style.color = "#C7254E";

        } else if ((fuelLevel < 10000) && (cargoLevel > 10000) ) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatusCheck").style.color = "#C7254E";

        } else if ((fuelLevel >= 10000) && (cargoLevel <= 10000)) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = `Shuttle is Ready for Launch`;
           document.getElementById("launchStatusCheck").style.color = "#419F6A"; 
           document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
           document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;

        };
    
};

async function myFetch() {
    
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let json = await response.json();
    return json;
};

function pickPlanet(planets) {
    let planetPicked; 
    planetPicked = planets[Math.floor(Math.random()*planets.length)];
    return planetPicked;
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
