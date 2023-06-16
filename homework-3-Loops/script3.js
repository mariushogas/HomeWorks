/////// calculati media aritmetica a unui array de numere - 1
const array1 = [1, 3, 6, 4, 8, 12];
let sumArr1 = 0;

for (let i = 0; i < array1.length; i++) {
  sumArr1 += array1[i];
}
console.log(sumArr1 / array1.length);

// calculati media aritmetica a unui array de numere - 2
const array2 = [1, 3, 6, 4, 8, 12];
let sumArr2 = 0;

for (let number of array2) {
  sumArr2 += number;
}
console.log(sumArr2 / array2.length);

// calculati media aritmetica a unui array de numere - 3
const array3 = [1, 3, 6, 4, 8, 12];
let sumArr3 = 0;

array3.forEach((number) => {
  sumArr3 += number;
});
console.log(sumArr3 / array3.length);

// calculati media aritmetica a unui array de numere - 4
const array4 = [1, 3, 6, 4, 8, 12];
const average = array4.reduce((a, b) => a + b, 0) / array4.length;
console.log(average);

///////  avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;

const mixArray = [1, "test", undefined, null, 5, false, "", 3];
const onlyNumbers = mixArray.filter((element) => typeof element === "number");
const onlyNumbersSum = onlyNumbers.reduce((a, b) => a + b, 0);
console.log(onlyNumbersSum);

//////// BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci

let n1 = 0,
  n2 = 1,
  nextNumber = 0;

console.log("Fibonacci Series:");
console.log(n1);
console.log(n2);

for (let i = 2; i <= 20; i++) {
  n1 = n2;
  n2 = nextNumber;
  nextNumber = n1 + n2;

  console.log(nextNumber);
}
