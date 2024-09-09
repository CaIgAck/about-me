<script setup lang="ts">

import FooterSection from "~/components/HomeSections/FooterSection.vue";
</script>

<template>
  <footer class="footer">
    <h2
      class="footer-heading__title"
    >
      Контакты
    </h2>
    <FooterSection />
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-bottom: var(--spacing-10);
  color: var(--primary-text-color);

  &-heading__title {
    margin-bottom: var(--spacing-7);
  }
}
</style>
