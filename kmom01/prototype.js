"use strict";

(function() {
    var swedishCars = ["Saab", "Volvo", "Koenigsegg"];

    console.log(typeof(swedishCars));

    console.log(swedishCars);

    var printer = function(cars, callback) {
        cars.map(function(car) {
            console.log("A " + car + " is " + callback(car) + ".");
        });
    };

    var decider = function(car) {
        if (car === "Volvo") {
            return "slow";
        } else if (car === "Saab") {
            return "pretty fast";
        } else {
            return "real fast";
        }
    };

    console.log(printer);
    console.log(decider);
    printer(swedishCars, decider);
})();
