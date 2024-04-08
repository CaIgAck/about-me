<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  typeButton: {
    default: () => 'button',
    required: false,
    type: String
  }
})

const classButton = computed(() => {
  return props.typeButton === 'button' ? 'button' : 'button--icon'
})
</script>

<template>
  <button :class="classButton">
    <slot>
    </slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: var(--spacing-1) var(--spacing-4);
  border-radius: var(--border-radius-5);
  background-color: var(--primary-button-background-color);
  border: none;
  &--icon {
    padding: var(--spacing-2) var(--spacing-2);
    border-radius: var(--border-radius-round);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-button-background-color);
    border: none;
  }
}

.button:hover, .button--icon:hover {
  cursor: pointer;
  background-color: var(--primary-button-background-hover-color);
  transition: background-color .3s;

}
</style>
