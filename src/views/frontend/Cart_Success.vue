<template>
  <div>
    <!-- step -->
    <div class="container pt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-sm-10">
          <ul class="setp d-flex justify-content-between">
              <li class="setp-item">
                <div class="stepContent">
                  <h6 class="text-center">STEP1</h6>
                  <h6>購物清單</h6>
                </div>
              </li>
              <li class="setp-item">
                <div class="stepContent">
                  <h6 class="text-center">STEP2</h6>
                  <h6>填寫資料</h6>
                </div>
              </li>
              <li class="setp-item active bg-primary text-white">
                <div class="stepContent">
                  <h6 class="text-center">STEP3</h6>
                  <h6>成功結帳</h6>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- bannerSucess -->
    <div class="container mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-sm-10">
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
  name: 'CartSuccess',
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
