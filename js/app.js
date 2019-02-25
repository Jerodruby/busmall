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
var result_container = document.body;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

var image1_h2 = document.getElementById('image1_h2');
var image2_h2 = document.getElementById('image2_h2');
var image3_h2 = document.getElementById('image3_h2');

var image_displayed1 = null;
var image_displayed2 = null;
var image_displayed3 = null;

var Product = function (name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.appeared = 0;

  busmall_products.push(this);

};

Product.prototype.render_as_img = function (target_img) {
  target_img.src = this.url;

};

//Instantiate objects:
/*
new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('boots', './img/boots.jpg');
new Product('chair', './img/chair.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', './img/pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.jpg');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('usb', './img/usb.jpg');
new Product('water-can', './img/water-can.jpg');
new Product('wine-glass', './img/wine-glass.jpg');
*/

//if data is from previous session, load
if(localStorage.getItem('all_votes')){
  var string_votes = localStorage.getItem('all  votes'); //take all votes out of local Storage
  busmall_products = JSON.parse(string_votes); //convert from stringified to readable array
} else { //if not, create votes
  new Product('bag', './img/bag.jpg');
  new Product('banana', './img/banana.jpg');
  new Product('boots', './img/boots.jpg');
  new Product('chair', './img/chair.jpg');
  new Product('bathroom', './img/bathroom.jpg');
  new Product('breakfast', './img/breakfast.jpg');
  new Product('bubblegum', './img/bubblegum.jpg');
  new Product('cthulhu', './img/cthulhu.jpg');
  new Product('dog-duck', './img/dog-duck.jpg');
  new Product('dragon', './img/dragon.jpg');
  new Product('pen', './img/pen.jpg');
  new Product('pet-sweep', './img/pet-sweep.jpg');
  new Product('scissors', './img/scissors.jpg');
  new Product('shark', './img/shark.jpg');
  new Product('sweep', './img/sweep.jpg');
  new Product('tauntaun', './img/tauntaun.jpg');
  new Product('unicorn', './img/unicorn.jpg');
  new Product('usb', './img/usb.jpg');
  new Product('water-can', './img/water-can.jpg');
  new Product('wine-glass', './img/wine-glass.jpg');
}

image_displayed1 = busmall_products[0];
image_displayed2 = busmall_products[1];
image_displayed3 = busmall_products[2];

function handle_bus_click(event) {
  number_of_clicks--;

  if (event.target.id === 'image1' || event.target.id === 'image2' || event.target.id === 'image3')
    if (event.target === image1) {
      image_displayed1.clicks++;

    }

  if (event.target === image2) {
    image_displayed2.clicks++;

  }

  if (event.target === image3) {
    image_displayed3.clicks++;

  }

  if (number_of_clicks <= 0) {
    product_container.removeEventListener('click', handle_bus_click);

    var string_votes = JSON.stringify(busmall_products);
    localStorage.setItem('all votes', string_votes);

    for (var i = 0; i < busmall_products.length; i++) {
      var li_el = document.createElement('li');

      li_el.textContent = `${busmall_products[i].name}  ${busmall_products[i].clicks}/${busmall_products[i].appeared}`;

      result_container.appendChild(li_el);

    }

  }
  render_images();
  render_image_chart();
}
function render_images() {
  console.log('render_images');
  var random1 = Math.floor(Math.random() * busmall_products.length);
  var random2 = Math.floor(Math.random() * busmall_products.length);
  var random3 = Math.floor(Math.random() * busmall_products.length);

  var click_count_section = document.createElement('article');
  var left_clicks = document.createElement('p');
  left_clicks.textContent = busmall_products[random1].clicks;
  click_count_section.appendChild(left_clicks);

  var center_clicks = document.createElement('p');
  center_clicks.textContent = busmall_products[random2].clicks;
  click_count_section.appendChild(center_clicks);

  var right_clicks = document.createElement('p');
  right_clicks.textContent = busmall_products[random3].clicks;
  click_count_section.appendChild(center_clicks);

  image_displayed1 = busmall_products[random1];
  image_displayed2 = busmall_products[random2];
  image_displayed3 = busmall_products[random3];

  busmall_products[random1].render_as_img(image1);
  busmall_products[random2].render_as_img(image2);
  busmall_products[random3].render_as_img(image3);
  image1_h2.textContent = busmall_products[random1].name;
  image2_h2.textContent = busmall_products[random2].name;
  image3_h2.textContent = busmall_products[random3].name;
}
product_container.addEventListener('click', handle_bus_click);

var render_image_chart = function () {
  var canvas_el = document.getElementById('myChart'); 
  var ctx = canvas_el.getContext('2d');

  var image_click_data = [];
  var image_click_labels = [];

  for (var i = 0; i < busmall_products.length; i++) {
    image_click_data.push(busmall_products[i].clicks);
    image_click_labels.push(busmall_products[i].name);
  }

  render_chart(image_click_data, image_click_labels, ctx);

};

var render_chart = function (image_click_data, image_click_labels, ctx) {
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: image_click_labels,
      datasets: [{
        label: 'Votes',
        data: image_click_data,
        backgroundColor: [
          'red',
          'blue',
          'green',
          'orange',
          'yellow',
          'purple',
          'black',
          'magenta',
          'aquamarine',
          'brown',
          'teal',
          'gold',
          'silver',
          'pink',
          'gray',
          'tan',
          'crimson',
          'indigo',
          'salmon',
          'navy'
        ],
        borderColor: [
          'red',
          'blue',
          'green',
          'orange',
          'yellow',
          'purple',
          'black',
          'magenta',
          'aquamarine',
          'brown',
          'teal',
          'gold',
          'silver',
          'pink',
          'gray',
          'tan',
          'crimson',
          'indigo',
          'salmon',
          'navy'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

};



