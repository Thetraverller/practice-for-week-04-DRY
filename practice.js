
function larger(num1, num2) {
  if (num1 > num2) {
    return num1
  }
  return num2
}
//--------------/ Alternate helper
// function larger(num1, num2, preference) {
// if (preference === "larger") {
//   return Math.max(num1, num2);
// } else {
//   return Math.min(num1, num2);
// }
// }
//-------------------
function multiplyBiggerNumByTwo(num1, num2) {
  return larger(num1, num2) * 2
}
//--------------------------------------------------------
function divideBiggerNumByThree(num1, num2) {
  return larger(num1, num2) / 3
}
//---------------------------------------------------------
function eatMostTacos(sum1, sum2) {
  let bigNum = larger(sum1, sum2)
    return `I ate ${bigNum} tacos.`;

}
//----------------------------------------------------------
function adoptSmallerDog(weight1, weight2) {
  let bigDog = larger(weight1, weight2)
  let args = [...args]
  let smallDog = args.find(dog => dog == !bigDog)

    return `I adopted a dog that weighs ${smallDog} pounds.`;

}

adoptSmallerDog(1, 2)
//----------------------------------------------------------

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
