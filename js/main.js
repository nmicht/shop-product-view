// var product = 'Socks';
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" :alt="product">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show="onSale">On Sale!</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <p>{{ description }}</p>
        <product-details :details="details"></product-details>

        <p>Variants</p>
        <div v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-box"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateProduct(index)"
            :aria-label="variant.color" >
        </div>

        <p>Sizes</p>
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>
        <a :href="link">More products</a>
      </div>

      <button @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock}" >
        Add to cart
      </button>
      <button @click="removeFromCart">Remove from cart</button>

      <product-review></product-review>
    </div>
  `,
  data() {
    return {
      brand: 'Michelle',
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks',
      selectedVariant: 0,
      inventory: 100,
      onSale: true,
      link: '/more-products.html',
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
          quantity: 10,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/socks-blue.jpeg',
          quantity: 0,
        },
      ],
      sizes: [
        'small',
        'medium',
        'large',
      ],
    };
  },
  methods: {
    addToCart() {
      // this.cart += 1;
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      // this.cart = this.cart >= 1 ? this.cart -= 1 : 0;
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99
    },
  }
})

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `,
});

Vue.component('product-review', {
  template: `
    <form>
      <label for="name">Name</label>
      <input v-model="name" type="text" name="name" placeholder="Who are you?">

      <label for="review">Review</label>
      <textarea v-model="review" name="review" placeholder="What do you think about this product? Do you like? Will you recommend it?"></textarea>

      <label for="rating">Rating</label>
      <select v-model.number="rating" name="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: 5,
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      }
      this.name = null;
      this.review = null;
      this.rating = 5;
    }
  }
});

var app = new Vue({
  el: '#app', // The id to use on the html
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      index = this.cart.findIndex((e) => e === id);
      if (index >= 0) {
        this.cart.splice(index, 1)
      }
    },
  },
})
