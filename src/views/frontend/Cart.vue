<template>
  <div>
  <!-- loading 套件 -->
    <loading :active.sync="isLoading"></loading>
    <!-- step -->
    <div class="container pt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-sm-10">
          <ul class="setp d-flex justify-content-between">
              <li class="setp-item active bg-primary text-white">
                <div class="stepContent">
                  <span class="text-center">STEP1</span><br>
                  <span>購物清單</span>
                </div>
              </li>
              <li class="setp-item">
                <div class="stepContent">
                  <span class="text-center">STEP2</span><br>
                  <span>填寫資料</span>
                </div>
              </li>
              <li class="setp-item">
                <div class="stepContent">
                  <span class="text-center">STEP3</span><br>
                  <span>成功結帳</span>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center" v-if="carts.length > 0">
        <div class="col-md-10">
          <div class="text-right mb-3">
            <button type="button" class="btn btn-outline-danger" @click="removeAllCarts">
                刪除所有品項 <i class="far fa-trash-alt"></i>
            </button>
          </div>
          <!-- 清單 -->
          <div class="table-responsive" style="white-space :nowrap;">
            <table class="table">
                <thead class="cartTableTitle text-center font-weight-bold table-borderless">
                  <th>刪除</th>
                  <th class="thumbnail">縮圖</th>
                  <th>商品名稱</th>
                  <th class="cartNum">數量</th>
                  <th class="unit">單位</th>
                  <th>單價</th>
                </thead>
                <tbody class="text-center">
                  <tr v-for="item in carts" :key="item.product.id + 1">
                    <td class="align-middle">
                      <div class="delete">
                          <i class="fas fa-minus-circle" @click="removeItemCart(item.product.id)"></i>
                      </div>
                    </td>
                    <td class="thumbnail"><img :src="item.product.imageUrl" alt="產品縮圖"></td>
                    <td class="align-middle productName">{{ item.product.title }}</td>
                    <td class="align-middle">
                        <div class="input-group">
                            <div class="input-group-append numberBox">
                                <button type="button" class="btn btn-outline-primary"
                                @click="item.quantity --; updateQuantity(item.product.id, item.quantity)"
                                :disabled="item.quantity ===1">-
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                  v-if="status.loadingItem === item.id"></span>
                                </button>
                            </div>
                            <input type="number" class="form-control text-center" v-model="item.quantity" min=1
                              @change="updateQuantity(item.product.id, item.quantity)">
                            <div class="input-group-prepend numberBox">
                                <button type="button" class="btn btn-outline-primary"
                                @click="item.quantity ++; updateQuantity(item.product.id, item.quantity)">+
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"
                                  v-if="status.loadingItem === item.id"></span>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td class="align-middle unit">{{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.product.price | thousands }}</td>
                  </tr>
                </tbody>
            </table>
          </div>
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
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="addCoupon"
                  >
                    套用優惠碼
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- 消費總額計算 -->
          <div class="row d-flex flex-row-reverse mt-2 mb-2">
            <div class="col-md-4">
              <div class="totalCost d-flex justify-content-between pr-1">
                <span class="d-inline mr-3">消費總計</span>
                <span>NT{{ cartTotal | thousands }}</span>
              </div>
              <div class="totalDiscount d-flex justify-content-between pr-1">
                <span class="d-inline text-success mr-3">優惠折扣</span>
                <span class="text-success">NT{{ cartTotal - (cartTotal * (coupon.percent / 100)) || 0 | thousands }}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="totalAmount p-2">
                <p class="text-right">訂單內有 <span class="text-danger">{{ quantity }}</span> 件商品，
                  <span>本筆訂單總金額
                    <span class="text-danger">{{ parseInt(cartTotal * (coupon.percent / 100)) || cartTotal | thousands }}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-3 mb-5">
            <div class="col-12">
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-primary btn-block text-white rounded-0"
                    @click="continueShopping">
                      繼續購物
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-secondary text-white btn-block rounded-0"
                    @click="nextStep">
                      下一步
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="emptyCarts d-flex justify-content-center my-7" v-else>
          <h4 class="mb-3 warning-text">哎唷 ! 購物車無商品，快去逛逛
            <router-link to="/products"
                    class="text-dark mt-5 mt-3">
            <i class="fas fa-chevron-left mr-2"></i>
              繼續購物
            </router-link>
          </h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
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
          this.isLoading = false
          this.updateTotal()
        })
        .catch(() => {
          this.$bus.$emit('message:push', '發生錯誤', 'danger')
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
        .catch(() => {
          this.$bus.$emit('message:push', '發生錯誤', 'danger')
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
    // 套用優惠卷
    addCoupon () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.$http.post(url, { code: this.coupon_code }).then(res => {
        this.$bus.$emit('message:push', '成功使用此優惠券', 'success')
        this.coupon = res.data.data
      }).catch(() => {
        if (this.coupon_code) {
          this.$bus.$emit('message:push', '沒有此優惠券 ╥﹏╥', 'danger')
        } else {
          this.$bus.$emit('message:push', '請輸入優惠券 ╥﹏╥', 'danger')
        }
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
