"use strict";

// proof of life
console.log("Hello, world!");

// variables for constructor object
let image_01 = document.querySelector("section img:first-child");
let image_02 = document.querySelector("section img:nth-child(2)");
let image_03 = document.querySelector("section img:nth-child(3)");
let results_button = document.getElementById("results");
let index_01 = 0;
let index_02 = 0;
let index_03 = 0;
let clicks = 0;

// constructor function
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
}

// instances of constructor object
let product_01 = new Product("bag", "./images/bag.jpg");
let product_02 = new Product("banana", "./images/banana.jpg");
let product_03 = new Product("bathroom", "./images/bathroom.jpg");
let product_04 = new Product("boots", "./images/boots.jpg");
let product_05 = new Product("breakfast", "./images/breakfast.jpg");
let product_06 = new Product("bubblegum", "./images/bubblegum.jpg");
let product_07 = new Product("chair", "./images/chair.jpg");
let product_08 = new Product("cthulhu", "./images/cthulhu.jpg");
let product_09 = new Product("dog_duck", "./images/dog-duck.jpg");
let product_10 = new Product("dragon", "./images/dragon.jpg");
let product_11 = new Product("pen", "./images/pen.jpg");
let product_12 = new Product("pet_sweep", "./images/pet-sweep.jpg");
let product_13 = new Product("scissors", "./images/scissors.jpg");
let product_14 = new Product("shark", "./images/shark.jpg");
let product_15 = new Product("sweep", "./images/sweep.png");
let product_16 = new Product("tauntaun", "./images/tauntaun.jpg");
let product_17 = new Product("unicorn", "./images/unicorn.jpg");
let product_18 = new Product("water_can", "./images/water-can.jpg");
let product_19 = new Product("wine_glass", "./images/wine-glass.jpg");

// products array
let products = [
  product_01,
  product_02,
  product_03,
  product_04,
  product_05,
  product_06,
  product_07,
  product_08,
  product_09,
  product_10,
  product_11,
  product_12,
  product_13,
  product_14,
  product_15,
  product_16,
  product_17,
  product_18,
  product_19,
];

// get random index for products array
function get_random_index() {
  return Math.floor(Math.random() * products.length); // Math.random() * products.length returns
  // a number between 0 - 2.9999.
  //   Math.floor() will then equal 0, 1, 2
}

// render products function
function render_products() {
  index_01 = get_random_index();
  index_02 = get_random_index();
  index_03 = get_random_index();

  // we only move on, once all products are DIFFERENT
  while (
    index_01 === index_02 ||
    index_02 === index_03 ||
    index_01 === index_03
  ) {
    index_02 = get_random_index();
    index_03 = get_random_index();
  }

  let first_product = products[index_01];
  let second_product = products[index_02];
  let third_product = products[index_03];

  // dom manipulation, we're basically making our own img element with these
  // attributes we display our 3 random (and unique products)
  image_01.src = first_product.src;
  image_01.alt = first_product.name;
  image_01.title = first_product.name;

  image_02.src = second_product.src;
  image_02.alt = second_product.name;
  image_02.title = second_product.name;

  image_03.src = third_product.src;
  image_03.alt = third_product.name;
  image_03.title = third_product.name;

  // increment views
  first_product.views++;
  second_product.views++;
  third_product.views++;
}

// event handler
// What happens when a user clicks a product?
// increment product's .clicks
// render 3 new products
function handle_product_click(event) {
  clicks++;

  console.log(event.target);

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === event.target.alt) {
      products[i].clicks++;
    }
  }

  if (clicks > 24) {
    // remove the event listeners
    image_01.removeEventListener("click", handle_product_click);
    image_02.removeEventListener("click", handle_product_click);
    image_03.removeEventListener("click", handle_product_click);
  }

  console.log(products);
  render_products();
}

function results(event) {
  console.log(event.target);

  let ul = document.querySelector("ul");

  // one li for each product
  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.innerText = `${products[i].name} was viewed ${products[i].views} times, and was clicked ${products[i].clicks} times.`;
    ul.appendChild(li);
  }

  results_button.removeEventListener("click", results);
}

// when page loads
image_01.addEventListener("click", handle_product_click);
image_02.addEventListener("click", handle_product_click);
image_03.addEventListener("click", handle_product_click);
results_button.addEventListener("click", results);
render_products();
