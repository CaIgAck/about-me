<script setup lang="ts">

</script>

<template>
  <div
    class="stack"
  >
    <h2
      class="stack__title"
    >
      Стек
    </h2>
    <ul
      class="stack__list"
    >
      <li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/vue-icon.svg"
          class="stack__img"
          alt="vue"
          loading="lazy"
        >
      </li>
      <li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/nuxt-icon.svg"
          class="stack__img"
          alt="nuxt"
          loading="lazy"
        >
      </li><li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/js-icon.svg"
          class="stack__img"
          alt="js"
          loading="lazy"
        >
      </li><li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/type-script-icon.svg"
          class="stack__img"
          alt="typescript"
          loading="lazy"
        >
      </li><li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/html-icon.svg"
          class="stack__img"
          alt="html"
          loading="lazy"
        >
      </li><li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__item"
      >
        <img
          src="/assets/images/svg/css-icon.svg"
          class="stack__img"
          alt="css"
          loading="lazy"
        >
      </li><li
        class="stack__delimiter"
      >
        +
      </li><li
        class="stack__text"
      >
        другие языки и технологии, которые я использую реже, или собираюсь изучить
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.stack {
  overflow: hidden;

  &__title {
    margin-bottom: var(--spacing-7);
  }

  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: var(--spacing-10);
    align-items: center;
    -webkit-clip-path: inset(0 0 var(--spacing-5) 0);
    clip-path: inset(0 0 var(--spacing-5) 0);
    grid-auto-columns: max-content;
    list-style: none;
    margin-bottom: calc(-1 * var(--spacing-5));
    overflow: auto;
    padding: var(--spacing-5) 0;
  }

  &__delimiter {
    opacity: 0.4;
  }

  &__text {
    font-size: var(--font-size-1);
    line-height: 130%;
    max-width: 200px;
    opacity: 0.6;
  }
}
</style>
