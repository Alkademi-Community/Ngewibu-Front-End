<script lang="ts" setup></script>

<template>
  <form class="form__container">
    <div class="form__profile">
      <NuxtImg
        src="images/profile.png"
        alt="Profile"
        width="auto"
        height="auto"
        class="w-full"
        format="webp"
        loading="lazy"
      />
    </div>
    <label class="form__wrapper">
      <input id="content" type="text" name="content" placeholder="Leave a comment..." class="form__field" />
      <MicroButton type="submit" icon="ri:send-plane-2-fill" color="secondary" rounded="full" class="button__action" />
    </label>
  </form>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/form/comment.css");
</style>
