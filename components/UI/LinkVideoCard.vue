<script setup>

const props = defineProps({
  src: {
    required: true,
    type: String
  },
  alt: {
    required: true,
    type: String
  },
  link: {
    required: true,
    type: String
  },
  target: {
    required: false,
    type: String,
    default: () => '_self'
  }
})

</script>


<template>
  <a
    :href="props.link"
    :target="props.target"
    class="card"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      height="180"
      width="350"
      class="card__img"
    />
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
.card {
  width: 350px;
  height: 260px;
  display: block;
  cursor: pointer;
  text-decoration: none;
  &__img {
     border-radius: 10px;
  }
}
</style>