let images = [
  "atashkadeh",
  "azadi",
  "kiasar",
  "namak",
  "pasargad",
  "tabatabayiha",
  "vakil",
];
// random number
let random = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(./images/${images[random]}.jpg)`;
document.body.style.backgroundSize = "cover";
