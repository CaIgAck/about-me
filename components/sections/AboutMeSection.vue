<script setup lang="ts">

</script>

<template>
  <div class="about-me">
    <h1 class="about-me__description">
      Привет, меня зовут Капитонов Иван. Я фронтенд-разработчик 👨‍💻. Делаю сайты эффективными, быстрыми 🚀, красивыми.
    </h1><img
      src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
      class="about-me__photo"
      alt="Моё фото"
      width="340"
      height="270"
    >
  </div>
</template>

<style scoped lang="scss">
.about-me {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3.3333333333rem;
  align-items: center;
  &__description {
    font-size: 42px;
    font-weight: 400;
  }
  &__photo {
    border-radius: 1.1111111111rem;
  }
}
</style>
