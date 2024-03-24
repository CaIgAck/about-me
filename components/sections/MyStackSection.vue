<script setup lang="ts">
import StackItem from "~/components/UI/StackItem.vue";

const stackItems = [
  { src: '/assets/images/svg/vue-icon.svg', alt: 'vue' },
  { src: '/assets/images/svg/nuxt-icon.svg', alt: 'nuxt' },
  { src: '/assets/images/svg/js-icon.svg', alt: 'js' },
  { src: '/assets/images/svg/type-script-icon.svg', alt: 'typescript' },
  { src: '/assets/images/svg/html-icon.svg', alt: 'html' },
  { src: '/assets/images/svg/css-icon.svg', alt: 'css' }
];
const glob = import.meta.glob('@/assets/images/svg/*.svg', { eager: true })

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
    <ul class="stack__list">
      <StackItem
        v-for="(item, index) in stackItems"
        :key="item.alt + index"
        :item="item"
        :images-as-object="glob"
      />
      <li class="stack__text">
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
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-10);
    align-items: center;
    clip-path: inset(0 0 var(--spacing-5) 0);
    grid-auto-columns: max-content;
    list-style: none;
    margin-bottom: calc(-1 * var(--spacing-5));
    overflow: auto;
    padding: var(--spacing-5) 0;
  }
  &__text {
    font-size: var(--font-size-1);
    line-height: 130%;
    max-width: 200px;
    opacity: 0.6;
  }
}
</style>
