// Traversing an Array
// ============================================


// Exeercise 1: Print all the names in an array
function(console) {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"],
    counter;

  for(counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}


// Exercise 2: Use forEach to print all the names in an array
function(console) {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  names.forEach(name =>
    console.log(name)
  );
}


// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
// Use forEach function to accumulate {id, title} pairs from each video.
// Put the results into the videoAndTitlePairs array using the Array's
// push() method. Example: videoAndTitlePairs.push(newItem);
function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ],
  videoAndTitlePairs = [];
  newReleases.forEach(newRelease =>
    videoAndTitlePairs.push({
      id: newRelease.id,
      title: newRelease.title
    })
  );
  return videoAndTitlePairs;
}


// Exercise 4: Implement map()
// Apply the projectionFunction to each item in the array and add
// each result to the results array.
// Note: you can add items to an array with the push() method.
// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(itemInArray =>
    results.push(projectionFunction(itemInArray))
  );
  return results;
};


// Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs
// Use map function to accumulate {id, title} pairs from each video.
function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  return newReleases.map(newRelease =>
    ({
      id: newRelease.id,
      title: newRelease.title
    })
  )
}