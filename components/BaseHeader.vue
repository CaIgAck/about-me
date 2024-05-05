<script setup lang="ts">
import LinkButton from "~/components/UI/LinkButton.vue";
import BaseContainerToggleTheme from "./BaseContainerToggleTheme.vue";
</script>

<template>
  <header
    class="header"
  >
    <a
      href="/"
      class="header__logo"
      title="Kapitonoff"
    >Kapitonoff</a>
    <nav
      class="navigation"
    >
      <a
        href="#portfolio"
        class="navigation__link"
      >
        Портфолио
      </a>
      <a
        href="#contacts"
        class="navigation__link"
      >
        Контакты
      </a>
      <LinkButton
        class="header__resume"
        href="https://kazan.hh.ru/resume/c9f32b57ff082686b10039ed1f657149335061"
      >
        <img
          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='19'%20height='19'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%23D6001C'%20d='M9.5%2019A9.5%209.5%200%200%200%2019%209.5%209.5%209.5%200%200%200%209.5%200%209.5%209.5%200%200%200%200%209.5%209.5%209.5%200%200%200%209.5%2019Z'/%3e%3cpath%20fill='%23FEFEFE'%20d='M5.403%205.213v3.231c.492-.586%201.082-.882%201.766-.882.352%200%20.668.068.95.201.284.133.497.303.64.51.144.208.241.437.294.688.052.25.078.64.078%201.17v3.455H7.603v-3.112c0-.618-.028-1.009-.086-1.175a.759.759%200%200%200-.307-.396.963.963%200%200%200-.552-.148c-.253%200-.48.063-.678.189a1.077%201.077%200%200%200-.438.569c-.094.253-.14.627-.139%201.122l-.002%202.95H3.875V5.214h1.528m6.02%200v3.231c.492-.586%201.081-.882%201.765-.882.351%200%20.669.068.952.201.283.133.495.303.638.51.143.207.243.441.294.688.052.25.079.64.079%201.17v3.455h-1.528v-3.112c0-.618-.029-1.009-.087-1.175a.757.757%200%200%200-.307-.396.96.96%200%200%200-.552-.148c-.253%200-.48.063-.678.189-.2.127-.345.316-.438.569-.092.253-.139.627-.139%201.122v2.95H9.896V5.214h1.526Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h19v19H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
          class="hh-logo"
          width="16"
          height="16"
          alt="hh.ru"
        > Моё резюме
      </LinkButton>
    </nav>
    <BaseContainerToggleTheme class="toggle-theme" />
  </header>
</template>

<style scoped lang="scss">
.header {
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  margin-bottom: var(--spacing-10);
  &__logo {
    font-size: var(--font-size-3);
    font-weight: 700;
    margin-right: var(--spacing-5);
    text-decoration: none;
    letter-spacing: 2px;
  }
  &__resume{ 
    margin-right: var(--spacing-5);
  }
}
.navigation {
  margin-left: auto;
  margin-right: var(--spacing-10);
}
.navigation__link {
  font-size: var(--font-size-2);
  text-decoration: none;
  &:not(:last-child) {
    margin-right: var(--spacing-10);
  }
}


@media screen and (max-width: 769px) {
  .navigation {
    border-bottom: 1px solid rgba(0,0,0,.1);
    border-top: 1px solid rgba(0,0,0,.1);
    grid-column: 1/3;
    grid-row: 2;
    margin-left: -20px;
    margin-right: -20px;
    padding: 10px 20px;
  }
}

@media screen and (max-width: 680px) {
  .navigation {
    display: none;
  }
  .toggle-theme {
    display: none;
  }
}
</style>
