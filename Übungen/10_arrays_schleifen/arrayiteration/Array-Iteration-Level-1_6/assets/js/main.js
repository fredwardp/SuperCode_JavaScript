let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const noDots = album.map((ending) => {
  let dot = ending.indexOf(".");
  if (dot >= 0) {
    console.log(ending.slice(0, dot).toLowerCase());
  } else {
    console.log("invalid");
  }

  return dot;
});
