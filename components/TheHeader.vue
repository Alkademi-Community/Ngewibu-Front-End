<script lang="ts" setup>
import { DropdownMenu } from "~/utils/types/menu"

const isAuthroized = ref(false)
const dropdownMenu: Ref<
  {
    name: string
    value: DropdownMenu
    icon: string
  }[]
> = ref([
  { name: "Profile", value: "profile", icon: "ri:map-pin-user-line" },
  { name: "Pending Event", value: "pending", icon: "ri:calendar-todo-fill" },
  { name: "Logout", value: "logout", icon: "ri:logout-circle-r-line" }
])

const onMenuClick = async (value: DropdownMenu) => {
  if (value === "profile") {
    await navigateTo("/")
  }
}
</script>

<template>
  <header class="header__container">
    <section class="header__wrapper">
      <NuxtLink to="/" class="header__brand"> NGE<span class="header__brand header__brand--blue">WIBU</span> </NuxtLink>

      <nav class="header__navigation">
        <button type="button" class="action__button action__button--icon" @click="$router.push('/event/create')">
          <Icon name="ri:add-line" />
          Event
        </button>
        <button
          v-if="!isAuthroized"
          type="button"
          class="action__button action__button--border"
          @click="$router.push('/login')"
        >
          Login
        </button>

        <HeadlessPopover v-if="isAuthroized" class="dropdown__menu relative">
          <HeadlessPopoverButton class="outline-none">
            <NuxtImg src="images/profile.png" class="" width="50" height="50" format="webp" loading="lazy" />
          </HeadlessPopoverButton>

          <TransitionBottomFade>
            <HeadlessPopoverPanel class="dropdown__menu--item">
              <button
                v-for="(menu, idx) of dropdownMenu"
                :key="idx"
                type="button"
                class="dropdown__item"
                @click="onMenuClick(menu.value)"
              >
                <span>{{ menu.name }}</span>
                <Icon :name="menu.icon" class="text-2xl" />
              </button>
            </HeadlessPopoverPanel>
          </TransitionBottomFade>
        </HeadlessPopover>
      </nav>
    </section>
  </header>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/header.css");
</style>
