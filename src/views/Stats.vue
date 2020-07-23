<template>
  <div class="Stats">
    <div class="loading container" v-if="loaded == false">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>
    <div class="loaded container" v-else>
      <div class="n-card z-depth-3">
        <div class="n-card__icon">
          <i class="material-icons large">supervisor_account</i>
        </div>
        <div class="n-card__text-content">
          <h5>Юзеров</h5>
          <h4>{{stats.users}}</h4>
        </div>
      </div>
      <div class="n-card z-depth-3">
        <div class="n-card__icon">
          <i class="material-icons large">chat</i>
        </div>
        <div class="n-card__text-content">
          <h5>Серверов</h5>
          <h4>{{stats.guilds}}</h4>
        </div>
      </div>
      <div class="n-card z-depth-3">
        <div class="n-card__icon">
          <i class="material-icons large">keyboard</i>
        </div>
        <div class="n-card__text-content">
          <h5>Каналов</h5>
          <h4>{{stats.channels}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    stats: {},
  }),
  async mounted() {
    const resp = await fetch(`${process.env.API_HOST}/public/stats`);
    this.stats = await resp.json();
    this.loaded = true;
  },
};
</script>

<style lang="scss" scoped>
.Stats {
  margin-top: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.progress {
  margin-top: auto;
  margin-bottom: auto;
}

.loaded{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.n-card {
  padding: 25px;
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  &__text-content{
    text-align: right;
  }
}
</style>
