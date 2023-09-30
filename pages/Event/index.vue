<script lang="ts" setup></script>

<template>
  <div class="event__page__container">
    <h1 class="page__title">List <span class="text-primary">Event</span></h1>

    <div class="page__filter__wrapper">
      <MicroSearch class="flex-1" placeholder="Search what's event you want to see here..." />
      <MicroDropdown class="w-72" icon="ic:outline-preview" title="Event Status" />
      <MicroDropdown class="w-72" icon="ri:equalizer-line" title="Filter By" />
    </div>

    <div class="page__cards__wrapper">
      <CardEvent class="w-[31.5%]" />
      <CardEvent class="w-[31.5%]" />
      <CardEvent class="w-[31.5%]" />
      <CardEvent class="w-[31.5%]" />
      <CardEvent class="w-[31.5%]" />
      <CardEvent class="w-[31.5%]" />
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/pages/event/index.css");
</style>
