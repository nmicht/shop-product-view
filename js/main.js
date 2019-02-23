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
    details: [
      '80% cotton',
      '20% polyester',
      'Gender-natural',
    ],
    variants: [
      {
        id: 2234,
        color: 'green',
        image: './assets/socks.jpeg',
      },
      {
        id: 2235,
        color: 'blue',
        image: './assets/socks-blue.jpeg',
      },
    ],
    sizes: [
      'small',
      'medium',
      'large',
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart = this.cart >= 1 ? this.cart -= 1 : 0;
    },
    updateProduct(image) {
      this.image = image;
    },
  },
})
