<template>
  <div>
    <div is="swiper" ref="mySwiper" class="sale_content swiper-container" :options="swiperOption">
      <div class="swiper-slide" is="swiper-slide" v-for="product in products" :key="'product' + product.id">
        <router-link :to="`/product/${products.id}`" target="_blank">
          <div>
            <img class="productsPic" :src="`${product.img[0]}`" alt="">
          </div>
          <div class="product-name">
            <h5>{{ product.title }}</h5>
            <p>NT${{ product.price }}</p>
            <div class="orign">NT${{ product.origin_price }}</div>
          </div>
        </router-link>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is >= 768px
          768: {
            slidesPerView: 3
          }
        }
      },
      products: [
        {
          id: '0',
          img: [
            'https://i.imgur.com/azf0z1D.jpg'
          ],
          title: '海鷗芳療機',
          price: 4999,
          origin_price: 5999
        },
        {
          id: '1',
          img: [
            'https://i.imgur.com/3gkQPk6.jpg'
          ],
          title: '杏桃核油-Apricot-Seed',
          price: 799,
          origin_price: 899
        },
        {
          id: '2',
          img: [
            'https://i.imgur.com/U3ZSDql.jpg'
          ],
          title: '超經濟套組',
          price: 3690,
          origin_price: 3980
        },
        {
          id: '3',
          img: [
            'https://i.imgur.com/azf0z1D.jpg'
          ],
          title: '海鷗芳療機3',
          price: 4999,
          origin_price: 5999
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 3000, true)
  }
}
</script>
<style scoped>
  .productsPic{
    width: 100%;
  }
</style>
