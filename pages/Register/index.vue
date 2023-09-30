<script lang="ts" setup>
const inputFormRegister = [...InputFormRegister]
</script>

<template>
  <section class="register__wrapper">
    <div class="relative h-screen w-full overflow-hidden max-w-[45%] 2xl:max-w-xl">
      <BgHero description="“ Gain Access to Cool Anime Events ”">
        <template #title>
          <span>Join <span class="title__span">The Journey</span> </span>
        </template>
      </BgHero>

      <BgImage class-name="absolute right-[150px] bottom-0" url="/images/char-anime-2.png" />
    </div>
    <div class="register__form">
      <FormBase
        title="Join Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et."
        class-name="register__form__container"
        button-text="Register Now"
        button-font="outfit"
        :input-form="inputFormRegister"
        title-font="outfit"
        description-font="outfit"
      />
      <div class="button__wrapper">
        <MicroLink path="/login" title="Sign In" />
        <MicroLink path="/register" title="Sign Up" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("~/assets/css/pages/register.css");
</style>
