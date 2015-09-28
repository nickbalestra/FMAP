// Exercise 25: Converting from Arrays to Trees
// Output the following
// [
//   {
//     "name": "New Releases",
//     "videos": [
//       {
//         "id": 65432445,
//         "title": "The Chamber"
//       },
//       {
//         "id": 675465,
//         "title": "Fracture"
//       }
//     ]
//   },
//   {
//     "name": "Thrillers",
//     "videos": [
//       {
//         "id": 70111470,
//         "title": "Die Hard"
//       },
//       {
//         "id": 654356453,
//         "title": "Bad Boys"
//       }
//     ]
//   }
// ]

function() {
  var lists = [
    {
      "id": 5434364,
      "name": "New Releases"
    },
    {
      "id": 65456475,
      name: "Thrillers"
    }
  ],
  videos = [
    {
      "listId": 5434364,
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "listId": 5434364,
      "id": 675465,
      "title": "Fracture"
    },
    {
      "listId": 65456475,
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "listId": 65456475,
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  return lists.map(list =>
    ({
      name: list.name,
      videos: videos.
        filter(video =>
          video.listId === list.id).
        map(video =>
            ({id: video.id, title: video.title}))
    })
  )
}

