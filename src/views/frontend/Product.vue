<template>
    <div>
        <h2>單一產品頁面</h2>
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    console.log(this.$route.params.id)
    // 屬性 $route
    // 方法 $router
    const id = this.$route.params.id
    this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`).then((response) => {
      this.product = response.data.data
      console.log(response)
    })
  }
}
</script>
