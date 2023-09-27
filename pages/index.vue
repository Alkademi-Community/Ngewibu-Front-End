<script lang="ts" setup></script>

<template>
  <div class="container py-8">
    <div class="flex gap-8 mb-8">
      <CardEvent class-name="flex-1" size="md" title="Welcome to Ngewibu" image="" />
      <CardEvent
        class-name="flex-1"
        size="md"
        title="Shiroyuki 2023"
        is-read-more
        image="https://marketplace.canva.com/EAFBiag7Bos/1/0/1131w/canva-black-and-pink-glow-party-night-poster-oeRmI0EKb_I.jpg"
      />
    </div>

    <div class="flex gap-8 items-center mb-8">
      <MicroSearch name="search-event" placeholder="Search what's event you want to see here..." class-name="flex-1" />
      <MicroDropdown icon="ri:equalizer-line" title="Filter By" class-name="w-96" />
    </div>

    <div class="flex gap-8 items-start">
      <div class="flex-1 flex gap-7 flex-wrap">
        <CardEventVariant />
        <CardEventVariant />
      </div>
      <div class="w-96 flex flex-col gap-5">
        <div class="flex gap-2.5 items-center">
          <Icon name="ri:flashlight-fill" class="text-secondary text-3xl" />
          <p class="text-2xl font-heading font-semibold translate-y-0.5">
            Upcoming Event
          </p>
        </div>
        <CardEvent is-square />
        <CardEvent is-square />
        <CardEvent is-square />
      </div>
    </div>
  </div>
</template>
