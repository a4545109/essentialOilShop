<template>
  <div>
    <div
      v-for="(item, i) in messages"
      :id="`toast-${i}`"
      :key="i"
      class="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="false"
    >
      <div class="toast-header">
        <div class="alertIcon" v-if="item.status === 'success'">
          <img src="~@/../public/static/img/success.png" alt="">
        </div>
        <div class="alertIcon" v-else>
          <img src="~@/../public/static/img/failure.png" alt="">
        </div>
        <strong class="mr-auto">{{ item.message }}</strong>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          @click="closeToast(`toast-${i}`)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Toasts',
  data () {
    return {
      messages: []
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMessage(message, status)
    })
  },
  methods: {
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 10000)
      this.messages.push({
        message,
        status,
        timestamp
      })
      this.removeMessageWithTiming(timestamp)
    },
    removeMessage (num) {
      this.messages.splice(num, 1)
    },
    removeMessageWithTiming (timestamp) {
      const vm = this
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1)
          }
        })
      }, 5000)
    },
    closeToast (element) {
      $(`#${element}`).toast('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.toast{
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 300px;
  z-index: 11000;
}
.toast-header{
  position: relative;
  overflow: hidden;
}
.alertIcon img{
  animation: bounceInLeft 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
@keyframes bounceInLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: none;
  }
}
</style>
