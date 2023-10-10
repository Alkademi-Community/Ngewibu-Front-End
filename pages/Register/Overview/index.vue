<script setup>
definePageMeta({ layout: "custom" })
</script>

<template>
  <div class="overview__container">
    <div class="my-4">
      <h1 to="/" class="header__logo">NGE<span class="header__logo--blue">WIBU</span></h1>
    </div>

    <div class="self-center flex flex-col items-center">
      <p class="text__content">
        Halo, Virlo Mahrian!
        <span class="block">Selamat Datang di Nge<span class="text__content--blue">WIBU</span></span>
      </p>

      <div class="mt-12 space-x-16">
        <MicroLink path="/" class-name="link__button hover:text-secondary" title="Homepage" />
        <MicroLink
          path="#"
          class-name="link__button bg-secondary text-white hover:border hover:border-secondary hover:bg-white hover:text-secondary"
          title="Verifikasi Email"
        />
      </div>
    </div>

    <div class="flex justify-between">
      <NuxtImg class="image__pict" src="/images/klee-genshin-impact.png" />
      <NuxtImg class="image__pict" src="/images/barbara-genshin-impact.png" />
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/register/overview.css");
</style>
