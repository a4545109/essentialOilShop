<template>
    <div>
        <div id="nav">
            <router-link to="/cart_checkout">我的訂單</router-link>|
            <router-link to="/admin/products">後台產品列表</router-link>|
            <hr>
        </div>
        <!-- sidebar -->
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container">
            <a class="navbar-brand d-md-block d-none" href="index.html">
              <div class="sidebarLogo d-flex align-items-center">
                <img class="navbarIcon" src="../../static/img/clover.png" style="width: 40px;" alt="">
                <h1>芳草小舖</h1>
              </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/">
              <a class="logo navbar-brand d-flex align-items-center d-md-none d-block">
                <img class="navbarIcon" src="../../static/img/clover.png" style="width: 35px;" alt="">芳草小舖
              </a>
            </router-link>
            <router-link to="/cart" class="order-md-1">
              <a class="nav-link" href="#">
                <i class="fas fa-cart-plus"></i>
              </a>
            </router-link>
            <div class="sidebar navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <router-link to="/">
                    <a class="nav-link">
                      <i class="fas fa-home mr-1"></i>
                      <span>首頁</span>
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/products">
                    <a class="nav-link">
                      <i class="fab fa-product-hunt mr-1"></i>
                      <span>周邊商品</span>
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/login">
                    <a class="nav-link" href="login.html">
                      <i class="fas fa-user mr-1"></i>
                      <span>後台登入</span>
                    </a>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>
<script>
export default {
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    // getCart () {
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
    //   this.$http.get(url)
    //     .then((res) => {
    //       this.quantity = res.data.data.length
    //     })
    //     .catch(() => {
    //       this.quantity = 0
    //     })
    // }
  },
  created () {
    // this.getCart()
    // this.$bus.$on('updateQuantity', (quantity, reset = 0) => {
    //   this.quantity = reset === 1 ? quantity : this.quantity + quantity
    // })
  }
}
</script>
