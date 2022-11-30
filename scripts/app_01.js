'use strict';

// proof of life
console.log('Hello, world!');

// variables for constructor object
let image_01 = document.querySelector('section img:first-child');
let image_02 = document.querySelector('section img:nth-child(2)');
let image_03 = document.querySelector('section img:nth-child(3)');
let results_button = document.getElementById('results');
let index_01 = 0;
let index_02 = 0;
let index_03 = 0;
let clicks = 0;

// constructor function
function Product(name, src){
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
}

// instances of constructor object
let product_01 = new Product('bag', './images/bag.jpg');
let product_02 = new Product('banana', './images/banana.jpg');
let product_03 = new Product('bathroom', './images/bathroom.jpg');
let product_04 = new Product('boots', './images/boots.jpg');
let product_05 = new Product('breakfast', './images/breakfast.jpg');
let product_06 = new Product('bubblegum', './images/bubblegum.jpg');
let product_07 = new Product('chair', './images/chair.jpg');
let product_08 = new Product('cthulhu', './images/cthulhu.jpg');
let product_09 = new Product('dog_duck', './images/dog-duck.jpg');
let product_10 = new Product('dragon', './images/dragon.jpg');
let product_11 = new Product('pen', './images/pen.jpg');
let product_12 = new Product('pet_sweep', './images/pet-sweep.jpg');
let product_13 = new Product('scissors', './images/scissors.jpg');
let product_14 = new Product('shark', './images/shark.jpg');
let product_15 = new Product('sweep', './images/sweep.png');
let product_16 = new Product('tauntaun', './images/tauntaun.jpg');
let product_17 = new Product('unicorn', './images/unicorn.jpg');
let product_18 = new Product('water_can', './images/water-can.jpg');
let product_19 = new Product('wine_glass', './images/wine-glass.jpg');


