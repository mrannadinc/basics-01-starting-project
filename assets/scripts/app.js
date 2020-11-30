const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
let errorMessege = 'An error \'' +
                   'occurred!'

outputResult(currentResult, errorMessege);
