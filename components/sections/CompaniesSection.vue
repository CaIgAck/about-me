<script setup lang="ts">

import Card from "~/components/UI/Card.vue";

const redboxBadges = [
    'vue 2',
    'vue 3',
    'nuxt 2',
    'js'
]
const comngoBadges = [
    'vue 2',
    'vue-property-decorator',
    'ts',
    'js'
]
const sovcomBadges = [
    'vue 2',
    'vue 3',
    'js',
    'ts',
]
</script>

<template>
  <div
    id="portfolio"
    class="companies"
  >
    <div class="companies-heading">
      <h2
        class="companies-heading__title"
      >
        Компании
      </h2>
    </div>
    <div class="companies-site">
      <Card
        :badges-list="redboxBadges"
        link-on-company="https://rdbx.ru/"
      >
        <template #title>
          <h3>Redbox.solutions</h3>
        </template>
        <template #description>
          <p>
            Разработка
            корпоративных решений
            и интегратор digital.
          </p>
        </template>
      </Card>
      <Card
        :badges-list="comngoBadges"
        link-on-company="https://comngo.online/"
      >
        <template #title>
          <h3>Comngo</h3>
        </template>
        <template #description>
          <p>
            Разработка тревел тех проектов.
          </p>
        </template>
      </Card>
      <Card
        :badges-list="sovcomBadges"
        link-on-company="https://sovcombank.it/"
      >
        <template #title>
          <h3>Совкомбанк технологии</h3>
        </template>
        <template #description>
          <p>
            Разработка
            корпоративных и внешних сервисов.
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.companies {
  &-heading {
    &__title {
      margin-bottom: var(--spacing-7);
    }
  }
  &-site {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;


    .card {
      &:last-child {
        grid-column: 1 / 3;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .companies-site {
    grid-template-columns: 1fr;
    .card:nth-child(3) {
      grid-column: auto;
    }
  }
}

</style>
