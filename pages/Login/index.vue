<script lang="ts" setup>
const inputForm = [...InputFormLogin]
</script>

<template>
  <section class="login__wrapper">
    <div class="login__container">
      <div class="login__form">
        <FormBase
          title="Welcome Back"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et."
          class-name="login__form__container"
          :input-form="inputForm"
          button-font="outfit"
          title-font="outfit"
          description-font="outfit"
          button-text="Login"
        >
          <template #before-button>
            <NuxtLink to="/">
              <div class="">
                <p class="forgot__password">Forgot Password?</p>
              </div>
            </NuxtLink>
          </template>
        </FormBase>
        <div class="button__wrapper">
          <MicroLink path="/login" class="hover:!bg-shakespeare bg-secondary" title="Sign In" />
          <MicroLink path="/register" class="hover:bg-secondary hover:text-white" title="Sign Up" />
        </div>
      </div>
      <div class="relative w-full h-full overflow-hidden max-w-lg 2xl:max-w-xl">
        <BgHero description="“ More you explore, more you get the values “">
          <template #title>
            <span> Explore <span class="title__span">Together</span> </span>
          </template>
        </BgHero>

        <BgImage class-name="absolute bottom-0 -right-[200px]" />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
@import url("~/assets/css/pages/login.css");
</style>
