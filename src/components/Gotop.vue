<template>
  <div :class="{ 'goTopShow': goTopShow }" @click="goTop()" title="Back to Top">
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
      if (window.pageYOffset > 400) {
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
  width: 50px;
  height: 50px;
  background-color: rgb(8, 6, 97);
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  transition: all .5s;
}
.goTop:hover {
  opacity: 1; /* 透明度 */
}
</style>
