<template>
    <div>
         <div id="nav">
            <router-link to="/">前台</router-link>|
            <router-link to="/admin/products">產品管理</router-link>|
            <router-link to="/admin/coupons">優惠卷管理</router-link>|
            <router-link to="/admin/orders">訂單列表</router-link>|
            <router-link to="/admin/storages">圖片儲存列表</router-link>
            <hr>
        </div>
        <router-view :token="token" v-if="checkSuccess"/>
    </div>
</template>

<script>
export default {
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
      // eslint-disable-next-line
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          console.log(res)
          this.checkSuccess = true
        })
        .catch((error) => {
          console.log(error.response)
          this.$router.push('/login')
        })
    }
  }

}
</script>
