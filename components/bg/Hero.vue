<script lang="ts" setup>
defineProps({
  description: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="w-full h-full bg-gradient-to-t from-primary to-secondary p-12 font-medium">
    <h1 class="text-4xl text-white">
      <slot name="title" />
    </h1>
    <p>
      {{ description }}
    </p>
  </div>
</template>
