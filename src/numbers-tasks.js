/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors.
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dot = x1 * x2 + y1 * y2;
  const mag1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const mag2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dot / (mag1 * mag2));
}

/**
 * Returns a last digit of a integer number.
 */
function getLastDigit(value) {
  return value % 10;
}

/**
 * Returns a number by given string representation.
 */
function parseNumberFromString(value) {
  return Number(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped.
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns a number rounded to specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

/**
 * Returns true if the number is prime; otherwise false.
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful; otherwise default.
 */
function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}

/**
 * Returns the cube of a number.
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number at index.
 */
function getFibonacciNumber(index) {
  if (index < 2) return index;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= index; i += 1) {
    [a, b] = [b, a + b];
  }
  return b;
}

/**
 * Returns the sum of all numbers from 1 to n.
 */
function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Returns the sum of digits of a number.
 */
function getSumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
}

/**
 * Returns true if number is power of two.
 */
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  const log2n = Math.log2(num);
  return Number.isInteger(log2n);
}

/**
 * Returns the sine of a number.
 */
function getSine(num) {
  return Math.sin(num);
}

/**
 * Converts number to string in given base.
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns exponential representation.
 */
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

/**
 * Returns fixed-point representation.
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns number in precision format.
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

/**
 * Returns primitive value of a Number object.
 */
function getNumberValue(number) {
  return Number(number.valueOf());
}

/**
 * Checks if value is a valid number (finite and not NaN).
 */
function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}

/**
 * Checks if value is an integer.
 */
function isInteger(number) {
  return Number.isInteger(number);
}

/**
 * Parses float from string or returns NaN.
 */
function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Parses integer with base or returns NaN.
 */
function getIntegerOnString(str, base) {
  const parsed = Number.parseInt(str, base);
  return Number.isNaN(parsed) ? NaN : parsed;
}

/**
 * Checks if number is a safe integer.
 */
function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

/**
 * Returns floor of number.
 */
function roundToSmallestInteger(number) {
  return Math.floor(number);
}

/**
 * Returns ceil of number.
 */
function roundToLargestInteger(number) {
  return Math.ceil(number);
}

/**
 * Returns number rounded to nearest integer.
 */
function roundToNearestInteger(number) {
  return Math.round(number);
}

/**
 * Returns integer part (truncates fraction).
 */
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

/**
 * Returns sum of three numbers.
 */
function getSumOfNumbers(x1, x2, x3) {
  return Number((x1 + x2 + x3).toFixed(12));
}

/**
 * Returns maximum of two numbers.
 */
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns random integer between min and max inclusive.
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns hypotenuse length.
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from 0 to number (inclusive).
 */
function getCountOfOddNumbers(number) {
  return Math.floor((Math.abs(number) + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
