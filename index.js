/// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Function that returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that creates a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function that doubles fares (using createFareMultiplier)
const fareDoubler = createFareMultiplier(2);

// Function that triples fares (using createFareMultiplier)
const fareTripler = createFareMultiplier(3);

// Function that takes an array of drivers and a function, then applies the function
function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}

