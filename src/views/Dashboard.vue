<template>
  <div class="Dashboard">
    <div class="auth-form container" v-if="$store.getters.authed == false">
      <h4 class="auth-form__title">Введите ваш токен доступа, чтобы продолжить</h4>
      <div class="input-field auth-form__input">
        <i class="material-icons prefix">vpn_key</i>
        <input id="token" type="password" v-model="token">
        <label for="token">Ваш токен</label>
      </div>
      <div class="auth-form__btn-wrap">
        <a class="waves-effect waves-light btn-large deep-purple auth-form__login" @click.prevent="login">Войти</a>
      </div>

    </div>
    <div class="control-panel" v-else>
      <div class="banner" :style="{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + guildData.icon + ')'}">
        <div class="container">
          <h1>{{guildData.name}}</h1>
        </div>

      </div>
      <h1 class="wip">Work in progress...</h1>
    </div>
  </div>
</template>

<script>
import NicoryApi from '../api'

export default {
  data: () => ({
    token: "",
    guildData: {}
  }),
  methods: {
    async login(){
      await this.$store.dispatch("login", this.token);
      const api = new NicoryApi(this.$store.getters.token);
      this.guildData = await api.getGuildInfo();
      this.$store.commit("setData", this.guildData);
    }
  },
  async mounted(){
    await this.$store.dispatch("login");
    const api = new NicoryApi(this.$store.getters.token);
    this.guildData = await api.getGuildInfo();
    this.$store.commit("setData", this.guildData);
  }
}
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 400px;
  background-size: cover;
  color: white;
  h1{
    margin: 0;
  }
  padding: 30px;
  display: flex;
  align-items: center;
}

.control-panel{
  align-self: flex-start;
  width: 100%;
}

.Dashboard{
  margin-top: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  height: 100%;
}

.wip{
  text-align: center;
}

.auth-form{
  margin-top: auto;
  margin-bottom: auto;
  &__title{
    text-align: center;
  }
  &__input{
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  &__btn-wrap{
    display: flex;
    justify-content: center;
  }
}
</style>
