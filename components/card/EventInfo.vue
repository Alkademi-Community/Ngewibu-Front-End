<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

import { EventInfoInterface } from "~/utils/interfaces/cards"

defineProps({
  eventStatus: {
    type: String,
    default: "Coming Soon"
  },
  eventData: {
    type: Array as PropType<EventInfoInterface[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="card__info__container">
    <div class="card__header">
      <h3 class="card__header__title">Timeline</h3>
      <MicroButton :title="eventStatus" rounded="full" class-name="px-5" font="heading" />
    </div>

    <div class="card__body">
      <div v-for="item of eventData" :key="item.title" class="card__item">
        <div class="card__item__heading">
          <Icon :name="item.icon" class="text-lg" />
          <span>{{ item.title }}</span>
        </div>
        <p class="card__item__description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/cards/event-info.css");
</style>
