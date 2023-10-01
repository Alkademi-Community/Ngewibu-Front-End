<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="card__container">
    <MicroButton title="Fri, 23 Oktober 2023" class="card__date" font="heading" />

    <h2 class="card__title">
      {{ title }}
    </h2>

    <h3 class="card__title card__title--sub"><span class="text-primary">#</span> About Event</h3>

    <div class="card__body" v-html="description" />
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/cards/description.css");
</style>
