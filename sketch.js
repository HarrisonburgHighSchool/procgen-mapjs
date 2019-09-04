

var city;
function preload() {
  city = new Element('city.jpg');
}

function setup() {
  createCanvas(400, 400)
}

function draw() {
  image(city.img, city.x, city.y)
}

class Element {
  constructor(img) {
    this.img = loadImage(img),
    this.x = 0,
    this.y = 0
  }
}
