// Perfect Square Formula
export * from "./mathiumjs";

// |=========================================|
// |                                         |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |       NOT IN USE - OLD FILE             |
// |                                         |
// |=========================================|


export function perfectSquare(term1, operation, term2) {
  unsquaredTerm1 = "(" + term1 + ")";
  unsquaredTerm2 = "(" + term2 + ")";

  convertedTerm1 = "(" + term1 + "^2)  ";
  convertedMiddleTerm = "2" + unsquaredTerm1 + unsquaredTerm2 + "  ";
  convertedTerm2 = "(" + term2 + "^2)  ";

  wholeAdded =
    convertedTerm1 + "+ " + convertedMiddleTerm + "+ " + convertedTerm2;
  wholeSub =
    convertedTerm1 + "- " + convertedMiddleTerm + "- " + convertedTerm2;

  if (operation == "+") {
    return wholeAdded;
  } else if (operation == "-") {
    return wholeSub;
  }
}

// Difference of Squares Formula
export function diffOfSquares(term1, term2) {
  var preEquation = (term1 + term2) * (term1 - term2);
  var squaredTerm1;
  var squaredTerm2;
  var ifTerm1String;
  var ifTerm2String;
  var stringedTerm1;
  var stringedTerm2;

  if (Number.isInteger(term1) && !Number.isInteger(term2)) {
    return (squaredTerm1 = term1 * term1);
  } else if (Number.isInteger(term2) && !Number.isInteger(term1)) {
    return (squaredTerm2 = term2 * term2);
  } else if (Number.isInteger(term1) && Number.isInteger(term2)) {
    squaredTerm1 = term1 * term1;
    squaredTerm2 = term2 * term2;
    return squaredTerm1 + "-" + squaredTerm2;
  } else if (typeof term1 == "string" && typeof term2 == "number") {
    return (stringedTerm1 = term1 + "^2");
  } else if (typeof term2 == "string" && typeof term1 == "number") {
    return (stringedTerm2 = term2 + "^2");
  } else if (typeof term1 == "string" && typeof term2 == "string") {
    stringedTerm1 = term1 + "^2";
    stringedTerm2 = term2 + "^2";
    return stringedTerm1 + "-" + stringedTerm2;
  } else if (Number.isInteger(term1) && Number.isInteger(term2)) {
    squaredTerm1 = term1 * term1;
    squaredTerm2 = term2 * term2;
    return squaredTerm1 + "-" + squaredTerm2;
  } else if (typeof term1 == "string" && typeof term2 == "string") {
    return stringedTerm1 + "-" + stringedTerm2;
  }
}

export function numberToThePowerOf(number, exponent) {
  var stringedNum = "(" + number + ")^" + exponent;

  if (Number.isInteger(number)) {
    return Math.pow(number, exponent);
  } else if (Number.isInteger(number) != true) {
    return stringedNum;
  }
}

// Sine
export function findSine(opp, hypotenuse) {
  var updatedSine = Math.sin(opp, hypotenuse);

  if (Number.isInteger(opp) && Number.isInteger(hypotenuse)) {
    return updatedSine;
  } else if (typeof opp == "string" && typeof hypotenuse == "string") {
    return "Invalid input. Try an integer instead :).";
  }
}

// Cosine
export function findCosine(adj, hypotenuse) {
  var updatedCosine = Math.cos(adj, hypotenuse);

  if (Number.isInteger(adj) && Number.isInteger(hypotenuse)) {
    return updatedCosine;
  } else if (typeof adj == "string" && typeof hypotenuse == "string") {
    return "Invalid input. Try an integer instead :).";
  }
}

// Tangent
export function findTangent(opp, adj) {
  var updatedTangent = Math.tan(opp, adj);

  if (Number.isInteger(adj) && Number.isInteger(hypotenuse)) {
    return updatedTangent;
  } else if (typeof adj == "string" && typeof hypotenuse == "string") {
    return "Invalid input. Try an integer instead :).";
  }
}

// Degrees to Radian
export function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

// Radian to Degrees
export function radToDeg(rad) {
  return rad / (Math.PI / 180);
}

// Circle Calculator
export function circleCalculator(radius, solveFor) {
  let pi = 3.14159265359;

  let solveForDiameter = () => radius * 2;
  let solveForCircumference = () => 2 * pi * radius;
  let solveForArea = () => pi * (radius * radius);

  switch (solveFor) {
    case "circumference":
      return solveForCircumference();
      break;
    case "diameter":
      return solveForDiameter();
      break;
    case "area":
      return solveForArea();
      break;
  }
}

// Data & Analytics Calculator

export function statisticCall(array, solveFor) {
  // Declaring Variables

  let sumOfArray = 0;
  let arrayInOrder = array.sort();

  // Declaring Variables

  // Declaring Functions

  // Find Mean

  let findMean = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
      sumOfArray += inputArray[i];
    }
    return sumOfArray / inputArray.length;
  };

  // Find Mean

  // Find Median

  let findMedian = () => {
    let medianP1 = 0;

    //If this doesnt work, make arrayInOrder a local variable and declare it here

    if (arrayInOrder.length & 1) {
      medianP1 = (arrayInOrder.length + 1) / 2;
      return arrayInOrder[medianP1 - 1];
    } else {
      medianP1 = (arrayInOrder.length + 1) / 2;
      medianP1 = medianP1 + 0.5;
      let num1 = arrayInOrder[medianP1 - 1]; // high val
      let num2 = arrayInOrder[medianP1 - 2]; // low val
      return (num1 + num2) / 2;
    }
  };

  // Find Median

  // Find Mode

  let findMode = () => {
    for (let j = 0; j < arrayInOrder.length; j++) {
      let num1 = arrayInOrder[j]; // low val
      let num2 = arrayInOrder[j + 1]; // high val
      if (num1 == num2) {
        return num1;
      }
    }
    return 'There is no mode. No numbers repeat.';
  };

  // Find Mode

  // Find Range

  let findRange = () => {
    let min = arrayInOrder[0];
    let max = arrayInOrder[arrayInOrder.length - 1];

    return max - min;
  };

  // Find Range

  // Find SD

  let findStandardDeviation = () => {
    let mean1 = findMean(arrayInOrder);
    let sumForSD = [];
    let squaredForSD = [];
    let pushForSD = 0;
    let sumOfSquared = 0;
    let mean2;

    for (let k = 0; k < arrayInOrder.length; k++) {
      pushForSD = arrayInOrder[k] - mean1;
      sumForSD.push(pushForSD);
    }
    for (let l = 0; l < arrayInOrder.length; l++) {
      pushForSD = sumForSD[l] * sumForSD[l];
      squaredForSD.push(pushForSD);
    }

    for (let z = 0; z < squaredForSD.length; z++) {
      sumOfSquared = sumOfSquared + squaredForSD[z];
    }
    mean2 = sumOfSquared / squaredForSD.length;

    return Math.sqrt(mean2);
  };

  // Find SD

  // Declaring Functions

  switch (solveFor) {
    case 'mean':
      return findMean(arrayInOrder);
      break;
    case 'median':
      return findMedian();
      break;
    case 'mode':
      return findMode();
      break;
    case 'range':
      return findRange();
      break;
    case 'standard deviation':
      return findStandardDeviation();
      break;
  }
}
