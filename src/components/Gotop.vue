<template>
  <div :class="{ 'goTopShow': goTopShow }" @click="goTop()" title="Back to Top">
    <img src="~@/../public/static/img/Top.png" class="shake-little" alt="Top">
  </div>
</template>

<script>
export default {
  data () {
    return {
      goTopShow: false
    }
  },
  created () {
    window.addEventListener('scroll', this.showGotop)
  },
  methods: {
    showGotop () {
      if (window.pageYOffset > 50) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    },
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Go Top 按鈕 */
.goTopShow {
  position: fixed;
  bottom: 2%;
  right: 2%;
  opacity: 0.8;
  cursor: pointer;
  transition: all .5s;
  z-index: 1;
}
.goTopShow:hover {
  opacity: 1; /* 透明度 */
  transform:rotate(6.25rad);
}
</style>
