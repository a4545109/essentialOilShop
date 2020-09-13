<template>
  <div>
     <!-- banner -->
    <div class="container mb-5">
        <div class="banner bg-cover">
            <div class="bannerDecoration">
                <img src="~@/../static/img/bannerDecoration.png" alt="">
            </div>
        </div>
    </div>
    <!-- swiper -->
    <div class="container">
        <div class="limitedTimeOfferTital text-center mb-5">
            限時優惠
        </div>
        <div class="mb-5" is="swiper"></div>
    </div>
    <!-- wall -->
    <div class="container">
        <div class="row wallF no-gutters" :class="{ 'wallFlower': wallFlower }">
            <div class="col-md-6">
                <div class="wallFlowerImg bg-cover">
                    <div class="wallLinesUp"></div>
                    <div class="wallLinesDown"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="wallFlowerContent p-5">
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
                <div class="wallSkyContent p-5">
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
        <div class="customerFeedback">
            <div class="customerFeedbackTital text-center p-5">
                客戶回饋
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="customerFeedbackB d-flex flex-row align-items-center">
                    <img class="customer bg-cover" src="~@/../static/img/peopleB.png" alt="">
                    <div class="customerContent ml-3">
                        <h2 class="customerName mb-2">陳先生B</h2>
                        <p class="customerText">產品運送速度快速 質感良好<br>
                            當作送親朋好友的禮物很適合(ﾟ3ﾟ)～♪</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 mb-5 d-flex justify-content-end">
            <div class="col-md-6">
                <div class="customerFeedbackC d-flex flex-row align-items-center">
                    <img class="customer bg-cover" src="~@/../static/img/peopleC.png" alt="">
                    <div class="customerContent ml-3">
                        <h2 class="customerName mb-2">簡小姐C</h2>
                        <p class="customerText">真的很喜歡這家精油的香味<br>
                            聞著心情也會跟著好起來ㄟ(—ω—ㄟ)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="customerFeedbackA d-flex flex-row align-items-center">
                    <img class="customer bg-cover" src="~@/../static/img/peopleA.png" alt="">
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
    <div is="gotop"></div>
  </div>
</template>
<script>
/* global $ */
import Gotop from '@/components/Gotop.vue'
import Swiper from '@/components/Swiper.vue'
export default {
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
