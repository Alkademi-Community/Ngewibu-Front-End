<script lang="ts" setup>
defineProps({
  description: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="w-full h-full bg-gradient-to-t from-primary to-secondary py-4 pl-9 font-medium space-y-1">
    <h1 class="text-4xl text-white uppercase">
      <slot name="title" />
    </h1>
    <p class="font-light text-white italic">
      {{ description }}
    </p>
  </div>
</template>
