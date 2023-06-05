function threeNumbers(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
const result = threeNumbers(3, 4, 5);

console.log(result);

/* function discountPrice(price, discount) {
  const totalDiscount = price * discount;
  return price - totalDiscount;
}

const total = discountPrice(120, 0.4);
console.log(total); */

function discountPrice2(price, discount) {
  const totalDiscount = (discount * price) / 100;
  return price - totalDiscount;
}

const total = discountPrice2(100, 25);
console.log(total);

function words(word1, word2) {
  return `${word1}-${word2}`;
}
const word = words('Nala', 'Anubis');
console.log(word);

function kilometersToMeters(kilometer) {
  return kilometer * 1000;
}
const meters = kilometersToMeters(50);
console.log(meters);

function hoursToSeconds(hours) {
  return hours * 3600;
}
const seconds = hoursToSeconds(5);
console.log(seconds);

function metersPerSecond(kilometers) {
  const totalMeters = kilometersToMeters(kilometers);
  const totalSeconds = hoursToSeconds(1);
  return totalMeters / totalSeconds;
}
const mps = metersPerSecond(90);
console.log(mps);

/* 365*24*60*60 */
