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
  <div :class="['event__card__container', className]">
    <div class="card__image__container">
      <NuxtImg :src="image" width="auto" height="auto" format="webp" loading="lazy" class="card__image--size" />
    </div>
    <div class="card__body__container card__info">
      <p class="card__body--item">
        <Icon name="ic:round-rocket" class="card__body--item--icon" />
        <span>Friday, 09 September 2023</span>
      </p>
      <p class="card__body--item">
        <Icon name="ri:lock-2-line" class="card__body--item--icon" />
        <span>Friday, 09 September 2023</span>
      </p>
      <p class="card__body--item">
        <Icon name="ri:map-pin-line" class="card__body--item--icon" />
        <span>Offline</span>
      </p>
    </div>
    <div class="card__body__container mb-6">
      <h3 class="card__body--title" @click="$router.push('/event/event-1')">OTAKU EXTALIA</h3>
      <p class="card__body--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div class="card__body__container card__action">
      <MicroButton
        type="button"
        title="Read More"
        font="sans"
        rounded="lg"
        color="secondary"
        icon="ri:eye-line"
        class="button__action"
        icon-class="me-2.5 -ms-1.5"
        @on-click="$router.push('/event/event-1')"
      />
      <div class="flex gap-3">
        <MicroButton
          type="button"
          icon="ri:thumb-up-line"
          color="outline-secondary"
          rounded="lg"
          class="w-max px-2 text-xl leading-none"
        />
        <MicroButton
          type="button"
          icon="ri:message-2-line"
          color="outline-secondary"
          rounded="lg"
          class="w-max px-2 text-xl leading-none"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/cards/event.css");
</style>
