<template>
  <div>
    <!-- loading 套件 -->
    <loading :active.sync="isLoading"></loading>
    <!-- 產品細節 -->
    <div class="container pt-5">
      <div class="row mb-5">
        <div class="col-md-6">
          <div class="productImg bg-cover"
              :style="{ backgroundImage:`url(${product.imageUrl})` }"></div>
        </div>
        <div class="col-md-6">
          <h2 class="productTitle font-weight-bold mb-4">{{ product.title }}</h2>
          <div class="row">
            <div class="col-12 mb-4">
              <pre>{{ product.content }}</pre>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="payment">
                <div class="row">
                  <del class="col-6 h5 text-secondary">原價NT{{ product.origin_price | thousands }}</del>
                  <div class="col-6 h5 text-danger">優惠價NT{{ product.price | thousands }}</div>
                </div>
                <div class="form-group mt-3">
                    <label class="h5 font-weight-bold" for="number">數量</label>
                    <select class="form-control" id="number" v-model="product.num">
                        <option value="0">請選擇數目</option>
                        <option v-for="num in 10" :key="num" :value="num">
                            選購 {{ num }} {{ product.unit }}
                        </option>
                    </select>
                </div>
              </div>
            </div>
            <div class="col-12 mb-5">
              <div class="addToCart">
                <button type="button" class="btn btn-primary btn-block"
                      @click="addToCart(product.id, product.num)">
                    <i v-if="product.id === status.loadingItem" class="fas fa-spinner fa-spin"></i>
                    加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: {},
      tempProduct: {},
      status: {
        loadingItem: ''
      },
      isLoading: false,
      carts: []
    }
  },
  methods: {
    // 加入購物車
    addToCart (id, quantity = 1) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(url, cart)
        .then(res => {
          this.$bus.$emit('updateQuantity')
          this.$bus.$emit('message:push', '成功加入購物車', 'success')
          this.status.loadingItem = ''
        })
        .catch(() => {
          this.$bus.$emit('message:push', '已加入購物車', 'danger')
          this.status.loadingItem = ''
        })
    },
    getProduct () {
      const id = this.$route.params.id
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then((response) => {
          this.product = response.data.data
          this.isLoading = false
        })
    }
  },
  created () {
    this.getProduct()
    // 屬性 $route
    // 方法 $router
  }
}
</script>
