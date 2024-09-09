<script setup lang="ts">

import LinkButton from "~/components/UI/LinkButton.vue";
</script>

<template>
  <div class="footer-section">
    <div
      id="contacts"
      class="contacts"
    >
      <ul
        class="links"
      >
        <li>
          <LinkButton
            href="mailto:ivan.kapitonov2002@gmail.com"
          >
            <img
              src="/assets/images/svg/mail-icon.svg"
              width="14"
              height="14"
              alt="Email"
            >
            ivan.kapitonov2002@gmail.com
          </LinkButton>
        </li>
        <li>
          <LinkButton
            href="https://t.me/ISKapitonoff"
          >
            <img
              src="/assets/images/svg/telegram-icon.svg"
              width="14"
              height="14"
              alt="Telegram"
            > telegram
          </LinkButton>
        </li>
        <li>
          <LinkButton
            href="https://career.habr.com/saigak"
          >
            career.habr
          </LinkButton>
        </li>
      </ul>
    </div>
    <ul
      class="stats"
    >
      <li>
        <div
          class="stats__number"
        >
          3+
        </div><div
          class="stats__description"
        >
          лет коммерческой разработки
        </div>
      </li><li>
        <div
          class="stats__number"
        >
          5 000+
        </div><div
          class="stats__description"
        >
          коммитов
        </div>
      </li><li>
        <div
          class="stats__number"
        >
          1 000+
        </div><div
          class="stats__description"
        >
          литров выпитого чая :)
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-section {
  display: grid;
}

.links, .stats {
  display: grid;
  list-style: none;
}

.links {
  grid-row-gap: 1rem;
}

.stats {
  grid-row-gap: 2rem;
}

@media screen and (min-width: 769px) {
  .stats {
    justify-content: center;
  }
}

@media screen and (min-width: 769px){
  .footer-section {
    grid-template-columns: repeat(3,1fr);
  }
}

@media screen and (max-width: 768px){
  .footer-section {
    grid-row-gap: var(--spacing-10);
  }
}
</style>
