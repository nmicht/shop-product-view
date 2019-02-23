// var product = 'Socks';
var app = new Vue({
  el: '#app', // The id to use on the html
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: './assets/socks.jpeg',
    link: '/more-products.html',
    inStock: true,
    inventory: 100,
    onSale: true,
  },
})
