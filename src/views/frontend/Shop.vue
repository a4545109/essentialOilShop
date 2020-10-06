<template>
  <div>
    <div class="shop">
      <Sidebar></Sidebar>
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
