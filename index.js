let pickUpLocation;
function distanceFromHqInBlocks(pickUpLocation) {
    let distanceInBlocks = Math.abs(pickUpLocation - 42);
    // Math.abs makes the number positive no matter what.
    return distanceInBlocks;
    // 42 is the street. Gotta get the number of blocks from 42nd.
}

function distanceFromHqInFeet(distanceInBlocks) {
    let distanceInFeet = distanceFromHqInBlocks(distanceInBlocks) * 264;
    // defined the variable to equal the function above, passing the parameter of the distance from last function.
    // 264 feet in a Manhattan block.
    return distanceInFeet;
}

let start, destination;
function distanceTravelledInFeet(start, destination) {
    let travelledFeet = (Math.abs(start - destination)) * 264;
    return travelledFeet;
}

let fee = 0;
let farePrice = ((travelledFeet - 400) * .02) + fee;

function calculatesFarePrice(start, destination) {
    let travelledFeet = (Math.abs(start - destination)) * 264;

    if (travelledFeet <= 2000) {
        if (travelledFeet < 400) {
            farePrice = 0;
            return farePrice;
        }
        farePrice = ((travelledFeet - 400) * .02);
        return farePrice;
    }

    if (travelledFeet > 2000) {
        if (travelledFeet >= 2500) {
            return 'cannot travel that far'
        }
        fee = 25;
        return fee;
    }
}