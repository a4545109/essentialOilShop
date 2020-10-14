<template>
  <div>
    <!-- loading 套件 -->
    <loading :active.sync="isLoading"></loading>
    <!-- banner -->
    <div class="container">
        <div class="p-banner-img bg-cover">
        </div>
    </div>
    <!-- 產品類別 -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <div class="p-list list-group mb-5" id="myList" role="tablist">
            <p class="list-group-item list-group-item-action text-center bg-primary text-white rounded-0"
              data-toggle="list" href="#">商場類別</p>
            <a class="list-group-item list-group-item-action"
              data-toggle="list" href="#" role="tab"
              @click.prevent="selectCategory('all')">
              <i class="p-icon fab fa-product-hunt mr-1"></i>全部產品</a>
            <a class="list-group-item list-group-item-action"
              data-toggle="list" href="#" role="tab"
              @click.prevent="selectCategory('essential')">
              <i class="p-icon fas fa-fan mr-1"></i>香氛精油</a>
            <a class="list-group-item list-group-item-action"
              data-toggle="list" href="#" role="tab"
              @click.prevent="selectCategory('machine')">
              <i class="p-icon text-center fas fa-tint mr-1"></i>芳療機</a>
            <a class="list-group-item list-group-item-action rounded-0"
              data-toggle="list" href="#" role="tab"
              @click.prevent="selectCategory('other')">
              <i class="p-icon fas fa-ellipsis-h mr-1"></i>其他</a>
          </div>
        </div>
        <div class="col-md-9 mb-4">
          <div class="row">
            <div class="col-md-6 mb-3" v-for="item in filterProducts" :key="item.id">
              <div class="card">
                <span class="category badge badge-secondary">{{ item.category }}</span>
                <div class="productsImg bg-cover"
                    :style="{ backgroundImage:`url(${item.imageUrl[0]})` }"></div>
                <div class="card-body productsContent">
                  <div class="h5 font-weight-bold card-title">{{ item.title }}</div>
                  <p class="p-text mb-3">{{ item.content }}</p>
                  <div class="h5" v-if="!item.price || item.price === item.origin_price">
                      <!-- 售價(price)欄位是可選的,因此售價若為空,就顯示原價(origin_price)
                          售價若不為空,就顯示原價(origin_price)與售價(price) -->
                      原價{{ item.origin_price }}元
                  </div>
                  <div class="row productsPrice" v-else>
                    <div class="col-6 h5 text-secondary">原價<p>NT{{ item.origin_price | thousands }}</p></div>
                    <div class="col-6 h5 text-danger">優惠價<p>NT{{ item.price | thousands }}</p></div>
                  </div>
                </div>
                <div class="cardFooter">
                  <div class="row no-gutters">
                    <div class="col-6">
                      <button type="button" class="btn btn-outline-primaryLight text-primary btn-block rounded-0"
                        @click="getProduct(item.id)"
                        :disabled="status.loadingItem === item.id">
                        查看詳情
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                        v-if="status.loadingItem === item.id"></span>
                      </button>
                    </div>
                    <div class="col-6">
                      <button type="button" class="btn btn-primary text-white btn-block rounded-0"
                        @click="addToCart(item.id)"
                        :disabled="status.loadingItem === item.id">
                        加到購物車
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                        v-if="status.loadingItem === item.id"></span>
                      </button>
                    </div>
                  </div>
                </div>
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
  name: 'Products',
  data () {
    return {
      products: {},
      tempProduct: {},
      filterProducts: [],
      category: 'all',
      isLoading: false,
      status: {
        loadingItem: ''
      },
      carts: []
    }
  },
  methods: {
    // 取得產品列表
    getProducts (page = 1) { // 參數預設值
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.products = res.data.data
          this.filterProducts = res.data.data
          this.isLoading = false
        })
        .catch(() => {
          this.$bus.$emit('message:push', '發生錯誤', 'danger')
          this.isLoading = false
        })
    },
    // 取得單一產品列表
    getProduct (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(url)
        .then(res => {
          this.tempProduct = {
            ...res.data.data,
            num: 1
          }
          this.status.loadingItem = ''
          this.$router.push(`/product/${id}`)
        })
    },
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
    selectCategory (status) {
      const vm = this
      switch (status) {
        case 'all':
          vm.category = '全部產品'
          vm.filterProducts = vm.products
          break
        case 'essential':
          vm.filterProducts = []
          vm.category = '香氛精油'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
        case 'machine':
          vm.filterProducts = []
          vm.category = '芳療機'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
        case 'other':
          vm.filterProducts = []
          vm.category = '其他'
          vm.products.forEach((item) => {
            if (item.category === vm.category) {
              vm.filterProducts.push(item)
            }
          })
          break
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
