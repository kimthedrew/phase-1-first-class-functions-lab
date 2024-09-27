// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
        return drivers.slice(-2);
    };
    console.log(returnLastTwoDrivers(drivers));
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 console.log(selectingDrivers[0](drivers));
 console.log(selectingDrivers[1](drivers));
 
 const createFareMultiplier = function(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    };
 };
 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);

 const selectDifferentDrivers = function(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
 };
 console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
 console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));