const options = [
  'is good',
  'is bad'
];

const goodException = ['mom']

function checkOnGoodException(something) {
  return goodException.includes(something.toLowerCase());
}

function getRandomItemFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTrueOrFalse() {
  const True = true;
  const False = false;
  getRandomItemFromArray([True, False]);
}

export default function isGoodOrBad(something) {
  if (checkOnGoodException(something)) {
    return `${something} ${options[0]}`
  }

  return `${something} ${getRandomItemFromArray(options)}`;
};

export function isGood(something) {
  if (checkOnGoodException(something)) { 
    return true;
  }

  return !isBad(something);
}

export function isBad(something) {
  return getTrueOrFalse();
}
