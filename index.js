const options = [
  'is good',
  'is bad'
];

function getRandomItemFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function isGood(something) {
  return `${something} ${getRandomItemFromArray(options)}`;
};

