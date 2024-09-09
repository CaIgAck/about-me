<script setup lang="ts">
import VideoSection from './MediaSections/VideoSection.vue';

</script>

<template>
  <main class="main">
    <BaseSectionWrapper>
      <VideoSection />
    </BaseSectionWrapper>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  color: var(--primary-text-color);
  column-gap: 40px;
  align-items: center;
}

</style>
