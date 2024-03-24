<script setup>
const props = defineProps({
  item: {
    default: () => {
      return {
        src: '',
        alt: ''
      }
    },
    type: Object,
    required: true
  },
  imagesAsObject: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <li class="stack__item">
    <img
      :src="props.imagesAsObject[props.item.src].default"
      class="stack__img"
      :alt="props.item.alt"
    />
  </li>
  <li class="stack__delimiter">
    +
  </li>
</template>
<style scoped lang="scss">
.stack__delimiter {
  opacity: 0.4;
}
</style>
