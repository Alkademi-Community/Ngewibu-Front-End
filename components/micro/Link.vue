<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: "link__container"
  },
  path: {
    type: String,
    default: "/"
  },
  title: {
    type: String,
    default: "Login"
  },
  exactActiv: {
    type: String,
    default: "active__link"
  }
})
</script>

<template>
  <NuxtLink :class="[className]" :exact-active-class="exactActiv" :to="path">
    {{ title }}
  </NuxtLink>
</template>

<style scoped>
@import url("~/assets/css/components/micro/link.css");
</style>
