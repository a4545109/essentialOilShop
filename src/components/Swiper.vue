<template>
  <div>
    <div is="swiper" ref="mySwiper" class="sale_content swiper-container" :options="swiperOption">
      <div class="swiperProducts swiper-slide" is="swiper-slide" v-for="product in products" :key="'product' + product.id">
        <div class="productsPic d-flex justify-content-center align-items-center bg-cover" :style="{ backgroundImage:`url(${product.img[0]})` }">
          <router-link class="routerLink" :to="`/product/${product.id}`" target="_blank">
            <div class="SeeMore">
              <button class="SeeMoreText">ReadMore</button>
            </div>
          </router-link>
        </div>
        <div class="productsName my-3">
          <div class="h4 text-center">{{ product.title }}</div>
        </div>
      </div>
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
        speed: 3000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          // when window width is >= 768px
          768: {
            slidesPerView: 3
          }
        }
      },
      products: [
        {
          id: '9c67hFlhGcCUmXg6U1VLLNNihnIf9sQfMbjn9akZuN1JLc2GC1n89sLDwT4Sc8It',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cRisgRbIoFNL1qOY94geDurGtDfCOIaRlctFZmS2wtRpbgoKPK7SxdoujTnkRSQRh7m5uqyupvaewmEbdf9hkkZgv5hqncHhpqIXH9NNZA2d06WoxdDkzCqBDLX6TKLZ.jpg'
          ],
          title: '海鷗芳療機'
        },
        {
          id: 'PVhLoP1eRiDxOtP8n8oG3yPpqURWyakFELyPvJvIhqoJOVYQj45va6EyghwNDIeX',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rNHtGFro34szNSDWfc9IxPlT8rgJmboZEceoUAzvQbYVWV9vc75LXA5hWjgK7qCtIH17rFQ7hS5JR13fSdfOnYR0FKhN5IPNVRosDTfoLHT8ioHSRmDccx2VCFxhaeYb.jpg'
          ],
          title: '杏桃核茴香精油'
        },
        {
          id: 'yW4bAxN01H6AzECWM6jQ2KiNZlqRdGHqyvdFhuX38964qw5LlMjYyfwqW2ty6ncx',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VkELRbR1SPlHWmogdVNuRL6yA8ZEwZnwyl48mEPl4LQUOuzFpSQ2smkCpWPdY6QfxluzN6qa0x9RZcHHDt2LK58xI7Dd7QRK72GYIo1rpoq1RsQtCGUYME8QD9pnT4Gl.jpg'
          ],
          title: '超經濟套組'
        },
        {
          id: 'OQVtqP3flKBe1hIufUOJavhb8qv4LJ2tN8ZE4mGZJdRpFb4pKNrbhsMe9hGgK7kx',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/upUsqbMwUCDeUuPOv5q47s37TulIHVdgvyeEERdGy3DhPT964hrlwUidiJiMJvlfqfgDq5K4jlKwTnp7ZL5K9zmnhGNrh4heTkCD68vWXUkaTiOApbNHitmHfdu1cNOc.jpg'
          ],
          title: '小森芳療機'
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

<style lang="scss" scoped>
.productsPic{
  min-height: 218px;
  .SeeMoreText{
    font-size: 30px;
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    background-color:  rgba(255, 255, 255, 0.3);
    transition: background-color 1s;
    &:hover{
      background-color:rgba(255, 255, 255, 0.5);
    }
  }
  &:hover{
    .SeeMore{
      display: block;
    }
  }
}
.SeeMore{
  display: none;
}
.routerLink {
  text-decoration: none;
}

</style>
