<template>
  <div class="about-me">
    <h1 class="about-me__description">
      Привет, меня зовут Капитонов Иван. Я фронтенд-разработчик 👨‍💻. Делаю сайты эффективными, быстрыми 🚀, красивыми.
    </h1>
    <img
      src="/assets/images/png/me.webp"
      class="about-me__photo"
      alt="Моё фото"
      height="330"
      width="260"
    >
  </div>
</template>

<style scoped lang="scss">
.about-me {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-10);
  align-items: center;
  justify-content: center;

  &__description {
    display: flex;
    flex-basis: 70%;
    font-size: var(--font-size-9);
    font-weight: 400;
  }

  &__photo {
    display: flex;
    border-radius: var(--border-radius-5);
  }
}

@media screen and (max-width: 1034px) {
  .about-me {
    &__description {
      text-align: center;
    }
  }
}
</style>
