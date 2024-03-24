<script setup lang="ts">
import BadgeItem from "~/components/UI/BadgeItem.vue";

const props = defineProps({
  list: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <ul class="badge-list">
    <BadgeItem
      v-for="(text,index) in props.list"
      :key="text + index"
      :text="text"
    />
  </ul>
</template>

<style scoped lang="scss">
.badge-list {
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  grid-column-gap: 10px;
  grid-auto-columns: max-content;
}
</style>
