<script lang="ts" setup></script>

<template>
  <div class="comment__container">
    <div class="comment__header">
      <div class="comment__header__profile">
        <div class="profile__image">
          <NuxtImg
            src="images/profile.png"
            alt="Profile"
            class="w-full"
            width="auto"
            height="auto"
            loading="lazy"
            format="webp"
          />
        </div>
        <div class="profile__info">
          <h3>Adnan Erlansyah</h3>
          <p class="profile__info--time">4 days ago</p>
        </div>
      </div>
      <MicroButton
        icon="ri:heart-fill"
        title="35"
        color="outline-secondary"
        rounded="full"
        icon-class="text-lg"
        class="comment__header__button"
      />
    </div>
    <p class="comment__body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque ipsam temporibus in cum optio tempora
      recusandae! Placeat quia incidunt architecto quos, debitis unde quo, modi natus ullam eaque suscipit?
    </p>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/cards/comment.css");
</style>
