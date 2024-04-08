<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import MoonIcon from "~/components/UI/MoonIcon.vue";
import SunIcon from "~/components/UI/SunIcon.vue";
import {ref} from "vue";

const isDarkTheme = ref(true)

const toggleTheme = () => {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    body.removeAttribute('data-theme');
  } else {
    body.setAttribute('data-theme', 'light');
  }
  isDarkTheme.value = !isDarkTheme.value
}
</script>

<template>
  <div class="container__toggle-theme">
    <TheButton
      class="toggle-theme"
      type-button="icon"
      @click="toggleTheme"
    >
      <MoonIcon
        v-if="!isDarkTheme"
      />
      <SunIcon v-else />
    </TheButton>
  </div>
</template>

<style scoped lang="scss">
.container__toggle-theme {
  position: absolute;
  top: 50px;
  right: 100px;
  .toggle-theme {
    position: sticky;
  }
}
</style>
