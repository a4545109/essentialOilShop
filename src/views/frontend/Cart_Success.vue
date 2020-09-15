<template>
    <div>
      <!-- step -->
        <div class="container mt-5 mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-10">
              <ul class="setp d-flex justify-content-between">
                <li class="setp-item active">
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
                <li class="setp-item bg-kiwiGreen text-white">
                  <div class="stepContent">
                    <p class="text-center mb-2">STEP3</p>
                    <p>成功結帳</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- bannerSucess -->
        <div class="container mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-10">
              <div class="bannerSuccess bg-cover">
                <div class="bannerSuccessText p-4">
                  <h2 class="h2 text-danger">下單成功!</h2>
                  <p class="mb-4 mt-2">工作天為3~4天，請耐心等候</p>
                  <button type="button" class="btn btn-pink text-white btn-block rounded-0"
                    @click="continueShopping">
                      繼續購物
                  </button>
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
    }
  },
  methods: {
    continueShopping () {
      this.$router.push('/products')
    }
  }
}
</script>
