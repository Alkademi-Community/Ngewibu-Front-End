<script lang="ts" setup>
import { EventInfoInterface } from "~/utils/interfaces/cards"

const detailEvent = {
  title: `Event Siaran Langsung Twitch: Genshin Impact Versi 4.1 "Bintang yang Bersinar di Ke-dalaman"`,
  description:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
}

const eventData: EventInfoInterface[] = [
  {
    title: "Date & Time",
    icon: "ri:calendar-todo-fill",
    description: "Friday, 09 Sep 2023 - Saturday, 10 Sep 2023 08:00 AM - 10:00 PM"
  },
  {
    title: "Location",
    icon: "ri:map-pin-line",
    description: "Jl. Cisitu Indah No.6"
  },
  {
    title: "Participants Event",
    icon: "ri:shield-user-line",
    description: "23 Participants"
  }
]
</script>

<template>
  <div class="event__detail__container">
    <MicroButton
      title="Go Back"
      icon="ri:arrow-left-s-line"
      class="button__action--back"
      icon-class="text-xl"
      color="secondary"
    />

    <div class="event__banner">
      <NuxtImg
        src="https://marketplace.canva.com/EAFBiag7Bos/1/0/1131w/canva-black-and-pink-glow-party-night-poster-oeRmI0EKb_I.jpg"
        alt=""
        class="w-full"
        width="auto"
        height="auto"
        loading="lazy"
        format="webp"
      />
    </div>

    <div class="event__content__wrapper mt-16">
      <div class="flex-1">
        <CardDescription :title="detailEvent.title" :description="detailEvent.description" class="mb-6" />
        <FormComment />
        <CardComment />
      </div>

      <div class="event__content--aside">
        <MicroQR level="H" class="event__qrcode" value="heheheh" />
        <CardEventInfo :event-data="eventData" class="event__info" />
        <MicroButton
          title="Join Now"
          rounded="xl"
          size="md"
          color="secondary"
          icon="ri:focus-3-line"
          class="button__action"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/pages/event/detail.css");
</style>
