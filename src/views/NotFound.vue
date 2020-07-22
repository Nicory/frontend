<template>
  <div class="NotFound">
    <div class="container">
      <div class="e404">404</div>
      <h5 class="phrase glitch">{{phrase}}</h5>
    </div>
  </div>
</template>
<style scoped lang="scss">
.NotFound{
  width: 100%;
  height: 100%;
}

.e404{
  color: gray;
  font-weight: 900;
  font-size: 5rem;
  letter-spacing: 20px;
}

.phrase{
  font-style: italic;
  color: gray;
  font-weight: 300;
  line-height: 2rem;
}

.container{
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
}
.container > * {
  margin-top: 30px;
}

</style>
<script>
import sample from 'lodash/sample'

export default {
  data(){
    return{
      phrase: "Нейросети просчитывают ваш ответ, пожалуйста, подождите"
    }
  },
  async mounted(){
    this.phrase = sample([
      "К сожалению, РКН тян ограничила вам доступ к этой странице",
      "К сожалению, я не смогла проиндексировать данную страницу",
      "Чего ты добиваешся?",
      "404 это стандартный код ответа HTTP о том, что клиент был в состоянии общаться с сервером, но сервер не может найти данные согласно запросу.",
      "404, интересные цифры знаете ли, но к сожалению они означают что данные Server returned error code 500 [_.sample is not defined]",
      `Cannot find module ${sample(["vue", "vue-router", "vue-material", "vuex", "lodash"])}`,
      'Кислый наелся, спит и не фиксит эти баги',
      "Упс... Похоже, Вы попали в пространство 404",
      "Что...? Где мы?",
      "Тут кто нибудь есть?",
      "Сервер спит, приходите попозже",
      "Кажется, вы ошиблись порталом...",
      "Эй! Тебя здесь быть не должно!",
      "Что ты тут делаешь? Выход направо, туалет налево.",
      "Тебе здесь не место, сталкер.",
      "О боже! ЛЮДИ! как давно я не видел людей... Эй, ты же не собираешься уходить?",
      "Здравствуй, странник. Тут редко увидишь живого человека...",
      "Похоже, что вы ошиблись с адресом.",
      "Ошибся дорогой, да? с кем не бывает.",
      `${(await (await fetch("https://fish-text.ru/get?type=sentence&number=1")).json()).text}`
    ])
  }
}
</script>
