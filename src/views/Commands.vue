<template>
  <div class="Commands">
    <div class="loading container" v-if="loaded == false">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>
    <div class="loaded container" v-else>
      <table class="highlight responsive-table striped">
        <thead>
          <tr>
            <th>Название команды</th>
            <th>Модуль</th>
            <th>Описание</th>
            <th>Использование</th>
            <th>Кулдаун</th>
            <th>Алиасы</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(mdl, name) in commands">
            <tr :key="command.name" v-for="command in commands[name]">
              <td>{{command.name}}</td>
              <td>{{name}}</td>
              <td>{{command.description}}</td>
              <td>{{command.usage}}</td>
              <td>{{command.cooldown || 0}}сек.</td>
              <td>{{command.aliases.join(" ")}}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Commands{
  margin-top: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.progress{
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<script>
export default {
  data: () => ({
    commands: {},
    loaded: false
  }),
  async mounted(){
    const resp = await fetch(`${process.env.API_HOST}/public/commands`);
    this.commands = await resp.json();
    this.loaded = true;
  }
}
</script>
