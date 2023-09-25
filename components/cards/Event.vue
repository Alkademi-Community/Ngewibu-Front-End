<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

defineProps({
  title: {
    type: String,
    default: "Shiroyuki 2023"
  },
  description: {
    type: String,
    default: "Consectetur distinctio maiores suscipit minima eaque vel maxime, est nesciunt rerum quibusdam?"
  },
  image: {
    type: String,
    default:
      "https://marketplace.canva.com/EAFBiag7Bos/1/0/1131w/canva-black-and-pink-glow-party-night-poster-oeRmI0EKb_I.jpg"
  },
  className: {
    type: String,
    default: ""
  },
  isSquare: {
    type: Boolean,
    default: false
  },
  isReadMore: {
    type: Boolean,
    deafult: false
  },
  size: {
    type: String as PropType<"sm" | "md">,
    default: "sm"
  }
})
</script>

<template>
  <div :class="['event__card__container', size === 'sm' && 'p-4', size === 'md' && 'px-6 py-5', className]">
    <div class="card__content">
      <h3 :class="['card__title', size === 'sm' && 'text-lg', size === 'md' && 'text-2xl']">
        {{ title }}
      </h3>
      <p class="card__description">
        {{ description }}
      </p>
      <button v-if="isReadMore" type="button" class="action__button">
        More Detail
      </button>
    </div>
    <div v-if="image" :class="['card__image', isSquare && 'card__image--square']">
      <NuxtImg
        :src="image"
        :class="['card__image--size', isSquare && 'card__image--size--square']"
        format="webp"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style lang="css">
@import url("~/assets/css/components/cards/event.css");
</style>
