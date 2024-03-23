<script setup lang="ts">

import AboutMeSection from "~/components/sections/AboutMeSection.vue";
import MyStackSection from "~/components/sections/MyStackSection.vue";
</script>

<template>
  <main class="main">
    <BaseSectionWrapper>
      <AboutMeSection />
    </BaseSectionWrapper>
    <BaseSectionWrapper>
      <MyStackSection />
    </BaseSectionWrapper>
    <section>projects</section>
    <section>contacts</section>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-row-gap: var(--spacing-10);
  margin-bottom: var(--spacing-10);
  color: var(--primary-text-color)
}

</style>
