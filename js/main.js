// var product = 'Socks';
var app = new Vue({
  el: '#app', // The id to use on the html
  data: {
    brand: 'Michelle',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    selectedVariant: 0,
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
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image
    }
  }
})
