<template>
    <div>
      <!-- loading 套件 -->
      <loading :active.sync="isLoading"></loading>
      <!-- banner -->
      <div class="container">
          <div class="p-banner-img bg-cover">
          </div>
      </div>
      <!-- 產品列表 -->
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3">
             <div class="p-list list-group sticky-top mb-5" id="myList" role="tablist">
                  <p class="list-group-item list-group-item-action active text-center bg-primary text-white rounded-0"
                      data-toggle="list" href="#">商場類別</p>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab"><i
                          class="p-icon fab fa-product-hunt mr-1"></i>全部產品</a>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab"><i
                          class="p-icon fas fa-fan mr-1"></i>香氛精油</a>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab"><i
                          class="p-icon text-center fas fa-tint mr-1"></i>芳療機</a>
                  <a class="list-group-item list-group-item-action rounded-0" data-toggle="list" href="#"
                      role="tab"><i class="p-icon fas fa-ellipsis-h mr-1"></i>其他</a>
              </div>
          </div>
          <div class="col-md-9 mb-4">
              <div class="row">
                <div class="col-md-6 mb-3" v-for="item in products" :key="item.id">
                    <div class="card">
                        <div class="p-card-img bg-cover"
                            :style="{ backgroundImage:`url(${item.imageUrl[0]})` }"></div>
                        <!-- <img :src="item.imageUrl" class="card-img-top" alt="..."> -->
                        <div class="card-body productsContent">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <span href="#" class="category badge badge-secondary">{{ item.category}}</span>
                            <p class="card-text mb-3">{{ item.content }}</p>
                            <!-- <p class="card-text" v-html="item.description"></p> -->
                            <div class="h5" v-if="!item.price || item.price === item.origin_price">
                                <!-- 售價(price)欄位是可選的,因此售價若為空,就顯示原價(origin_price)
                                    售價若不為空,就顯示原價(origin_price)與售價(price) -->
                                原價{{item.origin_price}}元
                            </div>
                            <div v-else>
                                <del class="h6">原價{{item.origin_price}}元</del>
                                <div class="h5 price">現在只要{{ item.price }}</div>
                            </div>
                        </div>
                        <div class="cardFooter">
                            <div class="row no-gutters">
                                <div class="col-6">
                                  <button type="button" class="btn btn-outline-primary text-primary btn-block rounded-0"
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
      <!-- 產品細節 -->
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content border-0">
                  <div class="modal-header">
                      <h5 id="exampleModalLabel" class="modal-title">
                          <h2>{{ tempProduct.title }}</h2>
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <p>{{ tempProduct.content }}</p>
                      <del class="h6">原價{{ tempProduct.origin_price }}</del>
                      <div class="form-group mt-3">
                          <select class="form-control" id="payment" v-model="tempProduct.num">
                              <option value="0" disabled>請選擇數目</option>
                              <option v-for="num in 10" :key="num" :value="num">
                                  選購 {{ num }} {{ tempProduct.unit }}
                              </option>
                          </select>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <div v-if="tempProduct.num" class="text-muted text-nowrap mr-3">
                          小計
                          <strong>{{ tempProduct.num * tempProduct.price }}</strong>元
                      </div>
                      <button type="button" class="btn btn-primary"
                            @click="addToCart(tempProduct.id, tempProduct.num)">
                          <i v-if="tempProduct.id === status.loadingItem" class="fas fa-spinner fa-spin"></i>
                          加到購物車
                      </button>
                  </div>
              </div>
          </div>
      </div>
      <!-- 購物車 -->
      <!-- <table>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>
            <router-link :to="`/product/${item.id}`">連結</router-link>
            <button @click="goProduct(item)">進入單一產品頁面</button>
            <a href="#" @click.prevent="goProduct(item)">進入頁面</a>
          </td>
        </tr>
      </table> -->
    </div>
</template>

<script>
/* global $ */
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
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
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
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
      console.log(cart)
      this.$http.post(url, cart)
        .then(res => {
          $('#productModal').modal('hide')
          this.$bus.$emit('message:push', '成功加入購物車', 'success')
          this.status.loadingItem = ''
        })
        .catch(error => {
          console.log(error.response)
          this.$bus.$emit('message:push', '已加入購物車', 'danger')
          this.status.loadingItem = ''
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
