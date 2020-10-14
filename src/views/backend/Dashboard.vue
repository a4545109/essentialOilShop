<template>
  <div>
    <div id="nav">
      <router-link to="/">前台</router-link>|
      <router-link to="/admin/products">產品管理</router-link>|
      <router-link to="/admin/coupons">優惠卷管理</router-link>|
      <router-link to="/admin/orders">訂單列表</router-link>|
      <router-link to="/admin/storages">圖片儲存列表</router-link>|
      <router-link to="/cart_checkout">我的訂單</router-link>
      <hr>
    </div>
    <router-view v-if="checkSuccess"/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          this.$bus.$emit('message:push', '認證成功', 'success')
          this.checkSuccess = true
        })
        .catch(() => {
          this.$bus.$emit('message:push', '發生錯誤', 'danger')
          this.$router.push('/login')
        })
    }
  }
}
</script>
