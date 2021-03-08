<template>
  <div>
    <div class="about container">
      <div class="aboutBannerImg bg-cover mb-5"></div>
      <h2 class="fs-8 mb-2">關於我們</h2>
      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat neque quod maxime error optio molestiae reiciendis, iure dolor accusamus nihil ea laborum suscipit! Illo consectetur sed totam quibusdam officiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia exercitationem cum quod mollitia tempore aliquam corporis, nesciunt inventore corrupti quo dolores aperiam ipsum minima, repellendus aliquid ab praesentium, molestiae optio.</p>
      <div class="aboutInfo row mb-5">
        <div class="col-4">
          <div class="aboutInfoItem" :style="'background-image:url('+require('./../../../public/static/img/about-1.gif')+')'"></div>
        </div>
        <div class="col-4">
          <div class="aboutInfoItem bg-cover" :style="'background-image:url('+require('./../../../public/static/img/about-2.gif')+')'"></div>
        </div>
        <div class="col-4">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
