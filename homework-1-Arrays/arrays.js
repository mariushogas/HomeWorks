const initialValues = [12, "7", undefined, 5, true, "finally", [1, 2, 3], false];

console.log(typeof initialValues[0]);
console.log(typeof initialValues[1]);
console.log(typeof initialValues[2]);
console.log(typeof initialValues[3]);
console.log(typeof initialValues[4]);
console.log(typeof initialValues[5]);
console.log(typeof initialValues[6]);
console.log(typeof initialValues[7]);

// 1.
const otherValues = [5, "2", undefined, 10, false, "finally", [3, 2, 1], true];

// 2.
initialValues.push = [otherValues];
console.log(initialValues);

// 3.
const initialSum = initialValues[0] + 2;
const initialSubtraction = parseInt(initialValues[1]) - 2;
const initialMultiply = initialValues[3] * 3;
const initialArray = initialValues[6][2] * 10;
const initialDivide = initialValues[0] / 2;

console.log(initialSum);
console.log(initialSubtraction);
console.log(initialMultiply);
console.log(initialArray);
console.log(initialDivide);

// 4.
initialValues[0] = initialSum;
initialValues[3] = initialMultiply;
initialValues[6][2] = initialArray;
console.log(initialValues);

// 5.
console.log(initialValues[1].concat(" ", "happy codding"));
console.log(initialValues[5].concat(" ", "happy codding"));

// 6.
console.log(!initialValues[4]);
console.log(!initialValues[7]);
