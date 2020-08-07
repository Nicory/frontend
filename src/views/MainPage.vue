<template>
  <div class="MainPage">
    <div class="main-banner">
      <div class="md-display-2 main-banner__title">NicoryBot</div>
      <svg xmlns="http://www.w3.org/2000/svg" class="main-banner__curve" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,101.3C672,85,768,139,864,144C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div class="why-nicory">
      <h1 class="why-nicory__title">Почему Nicory?</h1>
      <div class="why-nicory__features-container container">
        <div class="feature" data-aos="fade-right">
          <div class="feature__text-wrapper">
            <h1 class="feature__title">Модерация</h1>
            <p class="feature__description">В NicoryBot есть инструментарий для удобного управления вашим сервером: начиная от команд !!ban до системы логирования действий участников и автомодерации!</p>
          </div>
          <discord-messages class="feature__messages" data-aos="fade-left">
            <discord-message author="Кислый" avatar="kislball">!!ban <mention>Neros2k</mention> очень плохой человек!</discord-message>
            <discord-message author="NicoryBot" bot avatar="nicory">Пользователь <mention>Neros2k</mention> успешно забанен по причине: <code>очень плохой человек!</code></discord-message>
          </discord-messages>
        </div>
        <div class="feature">
          <discord-messages class="feature__messages" data-aos="fade-right">
            <discord-message author="EnotKEK3" avatar="enot">!!moder <mention></mention></discord-message>
            <discord-message author="NicoryBot" bot avatar="nicory"><mention></mention> получил модера по желанию <mention>EnotKEK3</mention> с помощью кастомной команды!</discord-message>
          </discord-messages>
          <div class="feature__text-wrapper tar" data-aos="fade-left">
            <h1 class="feature__title">Кастомные команды</h1>
            <p class="feature__description">В боте нет функционала, который вам нужен? Не проблема! Используйте мощную систему кастомных команд Handlebars, чтобы реализовать кастомный функционал!</p>
          </div>
        </div>
        <div class="feature">
          <div class="feature__text-wrapper" data-aos="fade-right">
            <h1 class="feature__title">Панель управления</h1>
            <p class="feature__description">Наконец-то была добавлена панель управления на сайта, с помощу которой вам не нужно будет 10 часов разбиратся в командах!</p>
          </div>
          <discord-messages class="feature__messages" data-aos="fade-left">
            <discord-message author="Сладкий" avatar="kislball">!!token</discord-message>
            <discord-message author="NicoryBot" bot avatar="nicory">Ваш токен доступа для вебпанели(https://nicory.xyz/dashboard): <code>{{random}}</code></discord-message>
          </discord-messages>
        </div>
        <div class="feature">
          <discord-messages class="feature__messages" data-aos="fade-right">
            <discord-message author="EnotKEK3" avatar="enot">!!work кодер</discord-message>
            <discord-message author="NicoryBot" bot avatar="nicory">
              <discord-embed>
                <mention>EnotKEK3</mention> работает на работе кодер и получает {{randomCash}} кредитов!
              </discord-embed>
            </discord-message>
          </discord-messages>
          <div class="feature__text-wrapper tar" data-aos="fade-left">
            <h1 class="feature__title">Экономика</h1>
            <p class="feature__description">Любите азарт во время игры в казино, но можете себе это позволить только в боте? Не проблема! Бот имеет простую систему экономики и магазин ролей!</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    random(){
      return Math.random().toString(16).split(".")[1]
    },
    randomCash(){
      return Math.floor(Math.random() * Math.floor(250));
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";

.why-nicory {
  margin-top: 3rem;
  &__title{
    text-align: center;
    letter-spacing: 1px;
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 4rem;
  }
}

.feature{
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 5rem;
  width: 100%;
  grid-gap: 10px;

  &__title{
    letter-spacing: 1px;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 300;
  }

  &__description{
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 200;
    opacity: 0.7;
  }

  &__messages{
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    code {
      width: auto;
      height: auto;
      padding: .2em;
      margin: -.2em 0;
      border-radius: 3px;
      font-size: 85%;
      font-family: Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace;
      text-indent: 0;
      border: none;
      white-space: pre-wrap;
      background: #2f3136;
    }
  }
}

@media (max-width: 740px){
    .feature{
      grid-template-columns: 100%;
    }
  }

.main-banner {
  width: 100%;
  height: 100vh;
  color: white;
  background: linear-gradient(326deg, $main 0%, $secondary 74%);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;

  &__curve {
    margin-top: auto;
    grid-row-start: 3;
  }

  &__title {
    margin-top: 60px;
    font-size: 4rem;
    grid-row-start: 2;
    color: white;
  }
}
</style>
