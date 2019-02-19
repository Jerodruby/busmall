'use strict';

/*
List global vars
    number of clicks
    array of all objects
    elments on the page

Constructor Function
    name
    url
    clickcount
    how many times it appeared

Render it to the page
    get the image by id
    update iamge src with data url of the data

Instantiate busmall objects
    new Constructor(params, params2)

Click handler
    click to a max of 25 times
        show results
        kill the listener

Track the number of clicks, increment or decrement

Rotate through new images

Click listener
*/

var busmall_products = [];
var number_of_clicks = 25;

var product_container = document.body;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

var image_displayed1 = null;
var image_displayed1 = null;
var image_displayed1 = null;

var Product = function(name, url){
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.appeared = 0;

  busmall_products.push(this);

};

Product.prototype.render_as_img = function(target_img){
  target_img.src = this.url;

};

//Instantiate objects:

new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('boots', 'boots.jpg');
new Product('chair', 'chair.jpg'); 

image_displayed1 = busmall_products[1];
image_displayed2 = busmall_products[2];
image_displayed3 = busmall_products[3];

function handle_bus_click (event){
  number_of_clicks --;

  if(event.target.id === 'image1'){

  }

  if(event.target === image2){

  }

  if(event.target === image3){
      image_displayed3.clicks++;

  }
}

  if(number_of_clicks <= 0) { 
    product_container.removeEventListener('click', handle_bus_click);

var random1 =Math.floor(Math.randon() * busmall_products.length);
var random2 =Math.floor(Math.randon() * busmall_products.length);
var random3 =Math.floor(Math.randon() * busmall_products.length);

busmall_products[random1].render_as_img(image1);
busmall_products[random2].render_as_img(image2);
busmall_products[random3].render_as_img(image3);

image_displayed1 = 
image_displayed2 = 
image_displayed3 = 
 
};

product_container.addEventListener('click' , handle_bus_click);