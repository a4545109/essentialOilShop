<template>
  <div>
    <!-- step -->
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <ul class="setp d-flex justify-content-between">
            <li class="setp-item">
              <div class="stepContent">
                <p class="text-center mb-2">STEP1</p>
                <p>購物清單</p>
              </div>
            </li>
            <li class="setp-item active bg-kiwiGreen text-white">
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
    <!-- 表單驗證 -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submitOrder">
            <!-- 姓名 -->
            <div class="form-group">
                <label for="username">收件人姓名</label>
                <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid':errors.has('name')}"
                  v-model="user.name" placeholder="輸入姓名" v-validate="'required'">
                <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
            </div>
            <!-- 信箱 -->
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="email" id="email" :class="{'is-invalid':errors.has('email')}"
                v-model="user.email" placeholder="輸入信箱" v-validate="'required'">
              <span class="text-danger" v-if="errors.has('email')">信箱必須輸入</span>
            </div>
            <!-- 電話 -->
            <div class="form-group">
              <label for="tel">電話</label>
              <input type="tel" class="form-control" name="tel" id="tel" :class="{'is-invalid':errors.has('tel')}"
                v-model="user.tel" placeholder="輸入電話" v-validate="'required'">
              <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
            </div>
            <!-- 地址 -->
            <div class="form-group">
              <label for="address">地址</label>
              <input type="text" class="form-control" name="address" id="address" :class="{'is-invalid':errors.has('address')}"
                v-model="user.address" placeholder="輸入地址" v-validate="'required'">
              <span class="text-danger" v-if="errors.has('address')">地址必須輸入</span>
            </div>
            <!-- 購買方式 -->
            <div class="form-group">
              <label for="payment">購買方式</label>
              <select class="form-control" id="payment" v-model="user.payment">
                <option value="" disabled>請選擇付款方式</option>
                <option value="WebATM">WebATM</option>
                <option value="ATM">ATM</option>
                <option value="CVS">CVS</option>
                <option value="Barcode">Barcode</option>
                <option value="Credit">Credit</option>
                <option value="ApplePay">ApplePay</option>
                <option value="GooglePay">GooglePay</option>
              </select>
            </div>
            <!-- 留言 -->
            <div class="form-group">
              <label for="message">留言</label>
              <textarea name="message" id="message" cols="30" rows="3" v-model="user.message"
                  class="form-control"></textarea>
            </div>
            <div class="text-right mb-5">
              <button type="submit" class="btn btn-primary">送出表單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coupon: {},
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      }
    }
  },
  methods: {
    // 提交訂單
    submitOrder () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`
      const order = { ...this.user }
      this.isLoading = true
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code // 更新折扣後的總價
      }
      this.$http.post(url, order)
        .then((res) => {
          this.isLoading = false
          if (res.data.data.id) {
            this.$router.push('/cart_success')
            this.$bus.$emit('message:push', '成功送出訂單', 'success')
          }
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    }
  }
}
</script>
