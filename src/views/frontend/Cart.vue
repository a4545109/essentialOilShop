<template>
    <div>
      <!-- loading 套件 -->
      <loading :active.sync="isLoading"></loading>
      <!-- step -->
      <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-10">
            <ul class="setp d-flex justify-content-between">
                <li class="setp-item active bg-kiwiGreen text-white">
                  <div class="stepContent">
                    <p class="text-center mb-2">STEP1</p>
                    <p>購物清單</p>
                  </div>
                </li>
                <li class="setp-item">
                  <div class="stepContent">
                    <p class="text-center mb-2">STEP2</p>
                    <p>填寫資料</p>
                  </div>
                </li>
                <li class="setp-item">
                  <div class="stepContent">
                    <p class="text-center mb-2">STEP3</p>
                    <p>成功結帳</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="emptyCar" v-if="cartTotal === 0"></div>
      <div class="container" v-else>
          <div class="row d-flex justify-content-center">
              <div class="col-md-10">
                  <div class="text-right m-3">
                      <button class="btn btn-outline-danger" @click="removeAllCarts">
                          刪除所有品項 <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                  <!-- 清單 -->
                  <table class="table">
                      <thead class="bg-primaryLight font-weight-bold table-borderless">
                          <th>刪除</th>
                          <th>縮圖</th>
                          <th>商品名稱</th>
                          <th width="150px">數量</th>
                          <th>單位</th>
                          <th>單價</th>
                      </thead>
                      <tbody>
                          <tr v-for="item in carts" :key="item.product.id + 1">
                              <td class="align-middle">
                                <div class="delete">
                                    <img src="~@/../static/img/trash.png" @click="removeItemCart(item.product.id)" alt="">
                                </div>
                              </td>
                              <td><img :src="item.product.imageUrl" style="width: 30px; height: 30px; border-radius: 5px;" alt=""></td>
                              <td class="align-middle">{{ item.product.title }}</td>
                              <td class="align-middle">
                                  <div class="input-group">
                                      <div class="input-group-append">
                                          <button type="button" class="btn btn-outline-primary"
                                          @click="item.quantity --; updateQuantity(item.product.id, item.quantity)"
                                          :disabled="item.quantity ===1">-
                                          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                            v-if="status.loadingItem === item.id"></span>
                                          </button>
                                      </div>
                                      <input type="number" class="form-control text-center" v-model="item.quantity" min=1
                                        @change="updateQuantity(item.product.id, item.quantity)">
                                      <div class="input-group-prepend">
                                          <button type="button" class="btn btn-outline-primary"
                                          @click="item.quantity ++; updateQuantity(item.product.id, item.quantity)">+
                                          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                            v-if="status.loadingItem === item.id"></span>
                                          </button>
                                      </div>
                                  </div>
                              </td>
                              <td class="align-middle">{{ item.product.unit }}</td>
                              <td class="align-middle">{{ item.product.price | thousands }}</td>
                          </tr>
                      </tbody>
                  </table>
                  <!-- 套用優惠碼 -->
                  <div class="row d-flex flex-row-reverse">
                    <div class="col-md-6">
                       <div class="input-group mb-3 input-group-sm">
                        <input
                          v-model="coupon_code"
                          type="text"
                          class="form-control"
                          placeholder="請輸入優惠碼"
                        >
                        <div class="input-group-append">
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            @click="addCoupon"
                          >
                            套用優惠碼
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 消費總額計算 -->
                  <div class="row d-flex flex-row-reverse mt-5">
                    <div class="col-md-3">
                      <div class="totalCost">
                        <p class="d-inline mr-3">消費總計</p><span>NT{{ cartTotal | thousands}}</span>
                      </div>
                      <div class="totalDiscount mt-3 mb-3">
                        <p class="d-inline text-success mr-3">優惠折扣</p>
                        <span class="text-success">NT{{ cartTotal - (cartTotal * (coupon.percent / 100)) || 0 | thousands}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="totalAmount p-2" style="background-color: #e5e1e1;">
                        <p class="text-right">訂單內有 {{ quantity }} 件商品，
                          <span>本筆訂單總金額 NT$
                            <span class="text-danger">{{ parseInt(cartTotal * (coupon.percent / 100)) || cartTotal }}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3 mb-5">
                    <div class="col-12">
                      <div class="row">
                        <div class="col-6">
                          <button type="button" class="btn btn-primary text-white btn-block rounded-0"
                            @click="continueShopping">
                              繼續購物
                          </button>
                        </div>
                      <div class="col-6">
                        <button type="button" class="btn btn-secondary btn-block text-white rounded-0"
                          @click="nextStep">
                            下一步
                        </button>
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
  data () {
    return {
      carts: [],
      cartTotal: 0,
      quantity: 0,
      isLoading: false,
      coupon: {},
      coupon_code: '',
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    // 取得購物車
    getCarts () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.carts = res.data.data
          this.quantity = res.data.data.length
          console.log(this.carts)
          this.isLoading = false
          this.updateTotal()
        })
        .catch(error => {
          console.log(error.response)
          this.isLoading = false
        })
    },
    // 更新數量
    updateQuantity (id, quantity) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: quantity
      }
      this.$http.patch(url, cart)
        .then(res => {
          this.cartTotal = 0
          this.getCarts()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    // 更新總價
    updateTotal () {
      this.carts.forEach(item => {
        this.cartTotal += item.product.price * item.quantity
      })
    },
    // 刪除全部產品
    removeAllCarts () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http.delete(url)
        .then(res => {
          this.getCarts()
          this.cartTotal = 0
          this.$bus.$emit('updateQuantity')
        })
    },
    // 刪除單一產品
    removeItemCart (id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url)
        .then(res => {
          this.getCarts()
          this.$bus.$emit('updateQuantity')
        })
    },
    // ${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}
    addCoupon () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`
      // 輸入 coupon 之前必須先戳一下 api/{{ uuid }}/coupon/search API 確定該 coupon 是存在的
      this.$http.post(url, { code: this.coupon_code }).then(res => {
        // 若 coupon 存在就回寫回去到 this.coupon
        // 該資料會是一個物件格式，詳情可見 API 文件
        // https://course-ec-api.hexschool.io/document#frontend-search-coupon-code-code
        this.coupon = res.data.data
        this.isLoading = false
      }).catch(error => {
        console.log(error)
      })
    },
    continueShopping () {
      this.$router.push('/products')
    },
    nextStep () {
      this.$router.push('/customer_profile')
    }
  },
  created () {
    this.getCarts()
  }
}
</script>
<style scoped>
  .delete{
    cursor:pointer;
  }
</style>
