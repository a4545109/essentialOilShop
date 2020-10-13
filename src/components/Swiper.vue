<template>
  <div>
    <div is="swiper" ref="mySwiper" class="sale_content swiper-container" :options="swiperOption">
      <div class="swiper-slide" is="swiper-slide" v-for="product in products" :key="'product' + product.id">
        <div class="productsPic d-flex justify-content-center align-items-center bg-cover" :style="{ backgroundImage:`url(${product.img[0]})` }">
          <router-link class="routerLink" :to="`/product/${product.id}`" target="_blank">
            <div class="SeeMore">
              <button class="SeeMoreText">ReadMore</button>
            </div>
          </router-link>
        </div>
        <div class="productsName mt-3">
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
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WF2MYHtHyK5PI4DUDokt6Sl8czYZSDNUIwQg8zNQFm7Z9wSFIn9MS5wv7u7mg3Qz3LR6HZK1FRKf53L3xhPklpTw496aqhprZ0m0deMw3cHLhfon5vGCgrCCkCK1WV8r.jpg'
          ],
          title: '海鷗芳療機'
        },
        {
          id: 'PVhLoP1eRiDxOtP8n8oG3yPpqURWyakFELyPvJvIhqoJOVYQj45va6EyghwNDIeX',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UW6sv47LQ6K9vdcr43ZSq2jMaO2CAaLij6Pkrt2nXvG467P0BDBo6krVDgfMox8a23Q5Xh2ETJzdRUkwvRzxLCz7O8pQsvKDvzAHMJcgEevLO41yiVoqF6c3SmwNshzd.jpg'
          ],
          title: '杏桃核茴香精油'
        },
        {
          id: 'yW4bAxN01H6AzECWM6jQ2KiNZlqRdGHqyvdFhuX38964qw5LlMjYyfwqW2ty6ncx',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/OtKQfFaWlGXN0qLta5sY2YX7VSNiaKnNv3A75kOxNrwDBaQwbOsL1LjbtuUJUiobgQIfy7hHBZoSnzyOvYrkSlXB6PCdWl6CH4cjv8flsb60oZrX5aQqtm1yrz40qpGA.jpg'
          ],
          title: '超經濟套組'
        },
        {
          id: 'OQVtqP3flKBe1hIufUOJavhb8qv4LJ2tN8ZE4mGZJdRpFb4pKNrbhsMe9hGgK7kx',
          img: [
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tjeLZO3jRyX0VozBUKDuYRkMqaoPju4C23q9CGAmfIehWagQrQVdfdQ3SXVNV7He1Nf7yplNdQh2M8v4tgrRnhPWJtTdjyJ7qllMj3z1tTZXyKbuTtyqgYnqNqYUBUE8.jpg'
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
