<template>
  <div>
    <!-- banner -->
    <div class="container mb-10">
      <div class="banner bg-cover">
        <div class="bannerDecoration">
          <img src="~@/../public/static/img/bannerDecoration.png" alt="space life fragrant">
        </div>
      </div>
    </div>
    <!-- swiper -->
    <div class="container">
      <div class="row justify-content-end mb-10" data-aos="fade-up">
        <div class="col-12 col-lg-10">
          <div class="row align-items-center">
            <div class="col-12 col-md-4 col-lg-3">
              <div class="d-sm-flex d-md-block align-items-center justify-content-center text-center text-md-right">
                <h2 class="font-weight-bold font-italic fs-9 mr-3">限時優惠</h2>
                <p class="fs-5 font-weight-bold">
                  <i class="fas fa-stopwatch fs-5 mr-1"></i>
                  <span>11/9 ~ 11/13</span>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9">
              <h3 class="homeSubtitle font-weight-bold text-center text-lg-left">全館滿 <span class="text-primary">$499</span> 免運</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-9" is="swiper"></div>
    </div>
    <!-- wall -->
    <div class="wall container mb-10">
      <div class="row wallF no-gutters" :class="{ 'wallFlower': wallFlower }">
        <div class="col-md-6">
          <div class="wallFlowerImg bg-cover">
            <div class="wallLinesUp"></div>
            <div class="wallLinesDown"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wallFlowerContent p-3 p-sm-5">
            <h2 class="wallFlowerTitle mb-5">七夕情人節</h2><span>送禮首選</span>
            <div class="wallFlowerText">
              <p class="mb-3">聽說<br>
                  牛郎與織女不是搭上鵲橋相會的
              </p>
              <p>而是<br>
                  戀上彼此熟悉的味道 ❤
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row wallS no-gutters" :class="{ 'wallSky': wallSky }">
        <div class="col-md-6 d-md-none d-block">
          <div class="wallSkyImg bg-cover">
            <div class="wallLinesUp"></div>
            <div class="wallLinesDown"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="wallSkyContent p-3 p-sm-5">
            <h2 class="wallSkyTitle mb-5">開創新世界 讓生活更美好</h2>
            <div class="wallSkyText">
                <p>淨化空氣 消除異味 <br>
                    促進新層代謝 增強免疫功能 <br>
                    使情緒 放鬆 舒緩 </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-md-block d-none">
          <div class="wallSkyImg bg-cover">
            <div class="wallLinesUp"></div>
            <div class="wallLinesDown"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- customerFeedback -->
    <div class="container mb-5">
        <div class="customerFeedback mb-10">
          <div class="text-center" data-aos="fade-up">
            <h2 class="font-weight-bold fs-9">客戶回饋</h2>
            <p class="fs-5">優良的品質，快速到貨的速度<i class="fas fa-shipping-fast ml-2"></i><br>
              來自四面八方人們的使用心得，為使用者帶來滿滿幸福
            </p>
          </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
              <div class="customerImg w-100 bg-cover mb-5" :style="'background-image:url('+require('./../../../public/static/img/customerFeedback.jpg')+')'" data-aos="fade-right"></div>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-12">
                  <div class="d-flex align-items-center mb-5" data-aos="fade-up">
                    <img class="customer bg-cover" src="~@/../public/static/img/peopleB.png" alt="peopleB">
                    <div class="customerContent ml-3">
                        <h2 class="customerName mb-2">陳先生B</h2>
                        <p class="customerText">產品運送速度快速 質感良好<br>
                            當作送親朋好友的禮物很適合(ﾟ3ﾟ)～♪</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center mb-5" data-aos="fade-up">
                    <img class="customer bg-cover" src="~@/../public/static/img/peopleC.png" alt="peopleC">
                    <div class="customerContent ml-3">
                        <h2 class="customerName mb-2">簡小姐C</h2>
                        <p class="customerText">真的很喜歡這家精油的香味<br>
                            聞著心情也會跟著好起來ㄟ(—ω—ㄟ)</p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex align-items-center mb-5" data-aos="fade-up">
                    <img class="customer bg-cover" src="~@/../public/static/img/peopleA.png" alt="peopleA">
                    <div class="customerContent ml-3">
                        <h2 class="customerName mb-2">鍾小姐A</h2>
                        <p class="customerText">試過這家的八角茴香精油<br>
                            有長期便祕的我，感覺身體真的有變好呢!<br>
                            下次想會試試看別款精油</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <Gotop></Gotop>
  </div>
</template>

<script>
/* global $ */
import Gotop from '@/components/Gotop.vue'
import Swiper from '@/components/Swiper.vue'
import AOS from 'aos'

export default {
  name: 'Home',
  components: {
    Gotop,
    Swiper
  },

  data () {
    return {
      wallFlower: false,
      wallSky: false
    }
  },
  created () {
    window.addEventListener('scroll', this.bounceInLeft)
    AOS.init()
  },
  methods: {
    bounceInLeft () {
      if (window.pageYOffset > 350) {
        $('.wallF').addClass('wallFlower')
        $('.wallS').addClass('wallSky')
      }
    }
  }
}
</script>
