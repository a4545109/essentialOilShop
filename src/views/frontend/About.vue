<template>
  <div>
    <div class="about container">
      <div class="aboutBannerImg bg-cover mb-6"></div>
      <div>
        <h2 class="fs-8 mb-2">品牌故事</h2>
        <p class="mb-5">「芳草小舖」創辦於 1994 年，創辦人就讀生物科技學系在和幾個大學好朋友共同創辦合作，且想運用一生所學造福社會人群。芳草意旨「來自於大自然的芳香草本植物」的意思，精油是萃取植物中的精華，芳草小舖運用各種各樣的植物調配出最好的精油，且完全不使用化學物質，對人體具有療效且無害，贈與這最自然的禮物芬香給大家，讓大家享受植物根本的美妙。</p>
      </div>
      <div class="aboutInfo row mb-10">
        <div class="col-12 col-md-4">
          <div class="aboutInfoItem" :style="'background-image:url('+require('./../../../public/static/img/about-1.gif')+')'"
                data-aos="fade-up" data-aos-duration="1000"></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="aboutInfoItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/about-2.gif')+')'"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"></div>
        </div>
        <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div class="row">
            <div class="col-12">
              <div class="aboutInnerItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/about-3.gif')+')'"></div>
            </div>
            <div class="col-12">
              <div class="aboutInnerItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/about-4.gif')+')'"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="fs-8 mb-2">產品保證</h2>
        <p class="mb-5">芳草小舖在產品把關上嚴格要求歐洲進口精油原料供應商，經由分析化學成分檢測，我們產品所用的精油材料已取得各項檢測報告證書，使用之精油符合國際標準，且具有詳記紀載精油資料規範，我們擁有完整的檢驗相關報告，天然優質且安全的成份，確保產品功效及品質，安心地用於身體上，並對其身心產生莫大的幫助。</p>
      </div>
      <div class="aboutInfo row mb-6">
        <div class="col-12 col-md-4">
          <div class="text-center">
            <h3 class="mb-4">產品檢測報告</h3>
            <div class="aboutReportItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/report-1.jpg')+')'"
              data-aos="fade-up" data-aos-duration="1000"></div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="text-center">
            <h3 class="mb-4">物質安全資料表</h3>
            <div class="aboutReportItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/report-2.jpg')+')'"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"></div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="text-center">
            <h3 class="mb-4">技術分析報告</h3>
            <div class="aboutReportItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/report-3.jpg')+')'"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"></div>
          </div>
        </div>
      </div>
      <p class="text-center mb-10"><i class="far fa-bell mr-1"></i>產品各項詳細檢測報告及證明可給予觀看及查詢</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
