<script setup lang="ts">

import AboutMeSection from "~/components/HomeSections/AboutMeSection.vue";
import MyStackSection from "~/components/HomeSections/MyStackSection.vue";
import CompaniesSection from "~/components/HomeSections/CompaniesSection.vue";
</script>

<template>
  <main class="main">
    <BaseSectionWrapper>
      <AboutMeSection />
    </BaseSectionWrapper>
    <BaseSectionWrapper>
      <MyStackSection />
    </BaseSectionWrapper>
    <BaseSectionWrapper>
      <CompaniesSection />
    </BaseSectionWrapper>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-row-gap: 15rem;
  margin-bottom: var(--spacing-10);
  color: var(--primary-text-color)
}

</style>
