<script setup lang="ts">
import BadgeList from "~/components/UI/BadgeList.vue";

const props = defineProps({
  badgesList: {
    default: () => {
      return []
    },
    required: false,
    type: Array
  },
  linkOnCompany: {
    required: false,
    type: String,
    default: () => {
      return '#'
    }
  }
})
</script>

<template>
  <div
    class="card"
  >
    <div class="card__action">
      <slot name="card__action">
        <a
          :href="props.linkOnCompany"
          target="_blank"
        >
          <i
            class="icon-external"
          ></i>
        </a>
      </slot>
    </div>
    <div
      class="card__logo"
    >
      <slot name="title" />
    </div>
    <div
      class="card__description"
    >
      <slot name="description" />
    </div>
    <div class="card__footer">
      <slot name="card__footer">
        <BadgeList :list="props.badgesList || []" />
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: var(--spacing-8); /* 32px */
  border-radius: var(--border-radius-6); /* 20px */
  display: grid;
  height: 22rem; /* Оставляем без изменений */
  grid-row-gap: var(--spacing-2); /* 8px */
  align-content: space-evenly;
  grid-auto-rows: max-content;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  transition: box-shadow 0.5s ease;
  z-index: 1;
  background-color: var(--primary-card-background-color);
  color: var(--primary-card-text-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &__logo {
    padding-top: var(--spacing-3); /* 12px */
    font-size: var(--font-size-6);
  }

}

.card__action {
  position: absolute;
  right: var(--spacing-8); /* 32px */
  top: var(--spacing-8); /* 32px */
}

.icon-external {
  display: block;
  color: var(--primary-text-color); /* Используем переменную */
  background: #fff url("/assets/images/svg/arrow.svg") 50% no-repeat; /* Используем переменную */
  border-radius: var(--border-radius-round);
  height: var(--spacing-10); /* 32px */
  width: var(--spacing-10); /* 32px */
  will-change: background-position;
  &:hover {
    animation: move-arrow .5s;
  }
  &:after {
    border-radius: 20px;
    content: "";
    height: 100%;
    left: 0;
    opacity: .3;
    position: absolute;
    top: 0;
    width: 100%;
  }
  /* URL оставлен без изменений, так как это SVG-изображение */
}


@keyframes move-arrow {
  0% {
    background-position: 50% 50%;
  }
  49% {
    background-position: 150% -50%;
  }
  50% {
    background-position: -50% 150%;
  }
  100% {
    background-position: 50% 50%;
  }
}
</style>
