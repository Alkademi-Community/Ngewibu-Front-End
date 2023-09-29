<script lang="ts" setup>
const route = useRoute()
const pageList = ["Login", "Register"]

const isHeaderHide = computed(() => pageList.find(item => item === route.name))
</script>

<template>
  <main>
    <TheHeader v-show="!isHeaderHide" />
    <slot />
  </main>
</template>
