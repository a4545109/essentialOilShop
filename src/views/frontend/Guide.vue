<template>
  <div>
    <div class="guide container">
      <div class="row align-items-center">
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12">
              <div class="fuideItem rounded">
                <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide-7.jpg')+')'">
                  <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">8大精油推薦</p></a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="fuideItem rounded">
                <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide-6.jpg')+')'">
                  <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">優惠券 happy8</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12">
              <div class="fuideItem rounded">
                <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide-2.jpg')+')'">
                  <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">其它精油推薦</p></a>
                </div>
              </div>
            </div>
            <div class="col-12 d-none d-md-block">
              <div class="fuideCenterItem d-flex align-items-center justify-content-center">
                <img class="fuideCenterImg" src="../../../public/static/img/compass.png" alt="">
                <h2 class="text-center font-weight-bolder">健康指南</h2>
              </div>
            </div>
            <div class="col-12">
              <div class="fuideItem rounded">
                <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide.jpg')+')'">
                  <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">2021 前十熱銷品</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="col-12">
            <div class="fuideItem rounded">
              <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide-4.jpg')+')'">
                <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">按摩精油使用方法</p></a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="fuideItem rounded">
              <div class="fuideImg bg-cover d-flex align-items-center rounded" :style="'background-image:url('+require('./../../../public/static/img/guide-3.jpg')+')'">
                <a class="guideContent" href="#"><p class="w-100 text-center font-weight-bold">新手精油推薦</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  name: 'Guide',
  created () {
    AOS.init()
  }
}
</script>
