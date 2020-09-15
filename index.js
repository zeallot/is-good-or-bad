const options = [
  'is good',
  'is bad'
];

function getRandomItemFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTrueOrFalse() {
  const True = true;
  const False = false;
  getRandomItemFromArray([True, False]);
}

export default function isGoodOrBad(something) {
  return `${something} ${getRandomItemFromArray(options)}`;
};

export function isGood(something) {
  return !isBad(something);
}

export function isBad(something) {
  return getTrueOrFalse();
}
