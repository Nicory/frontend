<template>
  <div class="Header">
    <nav class="nicory-navbar purple darken-2">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">NicoryBot</a>
        <a href="#" @click="switchSidenav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link class="waves-effect waves-light" to="/">Главная</router-link></li>
          <li><router-link class="waves-effect waves-light" to="/commands">Команды</router-link></li>
          <li><router-link class="waves-effect waves-light" to="/stats">Статистика</router-link></li>
          <li><router-link class="waves-effect waves-light" to="/dashboard">Панель управления</router-link></li>
          <li><a class="waves-effect waves-light" href="https://discord.com/api/oauth2/authorize?client_id=706600733931339806&permissions=8&scope=bot">Пригласить</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo" ref="sidenav">
      <li><a href="/">Главная</a></li>
      <li><a href="/commands">Команды</a></li>
      <li><a href="/stats">Статистика</a></li>
      <li><a href="/dashboard">Панель управления</a></li>
      <li><a class="waves-effect waves-light" href="https://discord.com/api/oauth2/authorize?client_id=706600733931339806&permissions=8&scope=bot">Пригласить</a></li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
.nicory-navbar{
  position: fixed;
  z-index: 999999;
}
.sidenav{
  z-index: 9999999;
}
</style>

<script>
import M from 'materialize-css'

export default {
  data: () => ({
    sidenav: false
  }),
  methods: {
    switchSidenav(){
      this.sidenav = !this.sidenav;
    }
  },
  watch: {
    sidenav(){
      let instance = M.Sidenav.getInstance(this.$refs['sidenav']);
      if(this.sidenav == true){
        instance.open();
      }else{
        instance.close();
      }
    }
  }
}
</script>
