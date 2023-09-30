<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default:
      "https://marketplace.canva.com/EAFBiag7Bos/1/0/1131w/canva-black-and-pink-glow-party-night-poster-oeRmI0EKb_I.jpg"
  }
})
</script>

<template>
  <div :class="['event__image__wrapper group', className]">
    <div class="card__image__container">
      <NuxtImg
        :src="image"
        class="card__image--size"
        height="auto"
        format="webp"
        width="auto"
        loading="lazy"
      />
      <div class="card__outer group-hover:bg-black/20 group-hover:backdrop-blur-sm" />
    </div>
    <div class="button__container group-hover:!opacity-100 group-hover:!translate-y-0">
      <Icon name="ri:eye-line" class="text-2xl" />
      <span>Read More</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/cards/event-image.css");
</style>
