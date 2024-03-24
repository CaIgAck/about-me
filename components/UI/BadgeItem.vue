<script setup lang="ts">
const props = defineProps({
  text: {
    required: true,
    type: String
  }
})
</script>

<template>
  <li
    class="badges__item"
  >
    {{ props.text }}
  </li>
</template>

<style scoped lang="scss">
.badges__item {
  font-size: var(--font-size-1);
  padding: var(--spacing-2) var(--spacing-4);
  border: 1px solid #ffffff;
  border-radius: var(--border-radius-7);
}
</style>
