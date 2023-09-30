<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: "/images/char-anime-1.png"
  }
})
</script>

<template>
  <div :class="className">
    <NuxtImg class="h-[550px] object-cover" :src="url" />
  </div>
</template>
