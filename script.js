// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (validateInput(pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value) == "Empty"){
            alert("All fields are required!");
            event.preventDefault();
        } else if (validateInput(pilotNameInput.value, copilotNameInput.valude) == "Is a Number" || validateInput(fuelLevelInput.value, cargoMassInput.value) == "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        }
    });
});


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});