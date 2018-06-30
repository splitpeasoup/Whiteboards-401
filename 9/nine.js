// sort by distance, find k nearest neighbors, calculate the majority

//find distance
let distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

//sort the list of labeled options
let tally = (list) => {
  let _tally = {};
  list.forEach(item => {
      if (_tally[item.label] === undefined) {
          _tally[item.label] = 0;
      }
      _tally[item.label]++;
  });
  return _tally;
}

//sort majority
let majority = (_tally) => {
  let largestAmount = 0;
  let key = undefined;
  for (key in _tally) {
      if (_tally[key] > largestAmount) {
          largestAmount = _tally[key];
      }
  }
  return key;
}

//attach a distance to all labeled options
let kNearestNeighbors = (labeled, k, unlabeled) => {
  labeled = labeled.map(pp => {
      pp.distance = distance(pp, unlabeled);
      return pp;
  });

// sort smallest to largest
labeled.sort((a, b) => {
  if (a.distance < b.distance) {
      return -1;
  } else if (a.distance > b.distance) {
      return 1;
  } else {
      return 0;
  }
});

//k-nearest
let nearest = labeled.slice(0, k);
let _tally = tally(nearest);
return majority(_tally);
};

let unlabeled = {x: 5, y: 7};
let labeled = [
  {x: 2, y: 9, label: 'Seattle'},
  {x: 4, y: 7, label: 'Renton'},
  {x: 4, y: 2, label: 'Sumner'},
  {x: 7, y: 1, label: 'Rainer'},
];

console.log(5, kNearestNeighbors(labeledPoints, 5, unlabeledPoint));
console.log(7, kNearestNeighbors(labeledPoints, 7, unlabeledPoint));
console.log(9, kNearestNeighbors(labeledPoints, 9, unlabeledPoint));