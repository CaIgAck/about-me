<script setup lang="ts">
const props = defineProps({
  href: {
    required: true,
    type: String
  }
})


</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="btn"
  >
    <slot />
  </a>
</template>

<style scoped lang="scss">
.btn {
  background-color: var(--primary-button-background-color);
  border: none;
  cursor: pointer;
  display: inline-grid;
  grid-auto-flow: column;
  padding: var(--spacing-3) var(--spacing-6);
  grid-column-gap: var(--spacing-3);
  align-items: center;
  border-radius: var(--border-radius-6);
  font-family: Stolzl,Stolzl-fallback,Verdana,sans-serif;
  font-size: var(--font-size-2);
  font-weight: 500;
  text-decoration: none;
  transition: box-shadow .15s ease,transform .15s ease;
  color: #fff;
}
</style>
