<template>
  <div class="footer deep-purple">
    <div class="footer__content container">
      <div class="footer__block">
        <h4>NicoryBot</h4>
        <h6>By KislBall and EnotKEK3</h6>
      </div>
      <div class="footer__block footer__icon waves-effect">
        <i class="meduim material-icons">favorite</i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.footer{
  padding-top: 20px;
  padding-bottom: 20px;
  &__content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  &__block{
    color: white;
  }

  &__icon{
    width: 64px;
    height: 64px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

  }

}

</style>
