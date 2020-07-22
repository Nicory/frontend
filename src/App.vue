<template>
  <div class="NicoryApp">
    <Header />
        <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
         <router-view/>
       </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  components: {Header, Footer},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity, height;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
