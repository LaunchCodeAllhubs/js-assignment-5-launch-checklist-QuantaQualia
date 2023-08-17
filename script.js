// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
        
        let list = document.getElementById("faultyItems");
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        event.preventDefault();
        if (validateInput(pilotNameInput) === "Empty" || validateInput(copilotNameInput) === "Empty" || validateInput(fuelLevelInput) === "Empty" || validateInput(cargoMassInput) === "Empty") {
            alert("All fields are required!");
            
        } else if (validateInput(pilotNameInput) == "Is a Number" || validateInput(copilotNameInput) == "Is a Number" || validateInput(fuelLevelInput) == "Not a Number" || validateInput(fuelLevelInput) == "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            
        } else {
        formSubmission (document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);    
        }
    });
    
});


window.addEventListener("load", function() {
       
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        planetPicked = pickPlanet(listedPlanets);
        console.log(planetPicked);
        destination = addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    })
    
});   

