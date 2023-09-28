<script lang="ts" setup>
const inputForm = [...InputFormLogin]
</script>

<template>
  <section class="login__wrapper">
    <div class="login__form">
      <FormBase
        title="Welcome Back"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et."
        class-name="login__form__container"
        :input-form="inputForm"
        button-font="outfit"
        title-font="outfit"
        description-font="outfit"
      >
        <template #before-button>
          <NuxtLink to="/">
            <p class="forgot__password">
              Forgot Password?
            </p>
          </NuxtLink>
        </template>
      </FormBase>
    </div>
    <div class="h-screen w-full max-w-lg 2xl:max-w-xl">
      <BgHero description="\">
        <template #title>
          <span> Explore <span>Together</span> </span>
        </template>
      </BgHero>
    </div>
  </section>
</template>

<style lang="css" scoped>
@import url("~/assets/css/pages/login.css");
</style>
