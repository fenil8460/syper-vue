<script>
import axios from "axios";

export default {
  data() {
    return {
      product: [],
      page: 0,
      limit: 10
    };
  },
  methods: {
    getInitialProduct() {
      axios.get(`https://api.wall-empire.com/v1/product?productStatus=non-premium&page=${this.page}&limit=${this.limit}&sub_category_id=6261f6cdac39520d1d137ab7`,
        {
          headers: {
            Authorization: "Basic d2FsbGVtcGlyZTp3YWxsZW1waXJl"
          }
        }).then((response) => {
          this.product = response.data.data.post;
        });
    },
    getNextProduct() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page = this.page + 1
          axios.get(`https://api.wall-empire.com/v1/product?productStatus=non-premium&page=${this.page}&limit=${this.limit}&sub_category_id=6261f6cdac39520d1d137ab7`,
            {
              headers: {
                Authorization: "Basic d2FsbGVtcGlyZTp3YWxsZW1waXJl"
              }
            }).then(response => {
              this.product = [
                ...this.product,
                ...response.data.data.post
            ];
            });
        }
      }
    }
  },
  beforeMount() {
    this.getInitialProduct();
  },
  mounted() {
    this.getNextProduct();
  }
};
</script>

<template>
  <div id="app">
    <h1>Random product</h1>
    <div class="product" v-for="product in product" :key="product.first">
      <div class="product-avatar">
        <img :src="product.postImage1" />
      </div>
      <div class="product-details">
        <h2 class="product-name">
          {{ product.postName }}
          {{ product.description }}
        </h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product {
  display: flex;
  background: #ccc;
  border-radius: 1em;
  margin: 1em auto;
}

.product-avatar {
  padding: 1em;
}

.product-avatar img {
  display: block;
  width: 100px;
  height: 100px;
  height: auto;
  border-radius: 10px;
}

.product-details {
  padding: 1em;
}

.product-name {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 900;
}
</style>