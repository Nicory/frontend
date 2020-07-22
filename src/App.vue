<template>
  <div class="NicoryApp">
    <Header />
    <div class="some-random-element">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
      <Footer />
    </div>

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
.some-random-element{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
