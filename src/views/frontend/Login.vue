<template>
    <div>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-6">
               <!-- banner -->
              <div class="container">
                  <div class="l-banner-img bg-cover mb-5">
                  </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row d-flex justify-content-center">
                <div class="col-10">
                  <form class="form-signin" @submit.prevent="signin">
                      <h1 class="h3 mb-3 font-weight-normal">
                          請先登入
                      </h1>
                      <div class="form-group">
                          <label for="inputEmail" class="sr-only">Email address</label>
                          <input id="inputEmail" v-model="user.email" type="email" class="form-control"
                              placeholder="Email address" required autofocus>
                      </div>
                      <div class="form-group">
                          <label for="inputPassword" class="sr-only">Password</label>
                          <input id="inputPassword" v-model="user.password" type="password" class="form-control"
                              placeholder="Password" required>
                      </div>
                      <button class="btn btn-primary btn-block" type="submit">
                          登入
                      </button>
                      <button class="btn btn-outline-primary btn-block mb-5" type="button" @click="signout">
                          登出
                      </button>
                  </form>
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
      user: {
        email: '',
        password: ''
      },
      token: ''
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`
      // eslint-disable-next-line no-undef
      this.$http.post(api, this.user).then((response) => {
        const token = response.data.token
        const expired = response.data.expired
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
        this.$bus.$emit('message:push', '登入成功', 'success')
        this.$router.push('/admin/products')
      }).catch((error) => {
        console.log(error)
      })
    },
    signout () {
      document.cookie = 'token=;expires=;'
    }
  }
}
</script>
