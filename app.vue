<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import {onMounted} from "vue";

// eslint-disable-next-line no-undef
useHead({
  title: 'ISKapitonoff',
  meta: [
    { name: 'description', content: 'This is site for Kapitonov Ivan Sergeevich' }
  ],
})

const baseThemeSite = () => {
  const body = document.body;

  window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({matches: isDark}) => {
        if(isDark) {
          body.setAttribute('data-theme', 'dark');
        } else {
          body.setAttribute('data-theme', 'light');
        }
      })
}
onMounted(() => {
  baseThemeSite();
})

</script>
