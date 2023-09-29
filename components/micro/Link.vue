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
  }
})

// const active: Ref<boolean> = ref(false)

// const isRouterActive = computed(() => {
//   const route = useRoute()
//   switch (route.path) {
//     case "/register":
//       active.value = !active.value
//       break
//     case "/login":
//       active.value = !active.value
//       break
//     default:
//       return false
//   }
// })
</script>

<template>
  <NuxtLink :class="[className]" exact-active-class="active__link" :to="path">
    {{ title }}
  </NuxtLink>
</template>


<style scoped>
@import url("~/assets/css/components/micro/link.css");
</style>
