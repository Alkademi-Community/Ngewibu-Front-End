<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div :class="['dropdown__wrapper', className]">
    <div class="dropdown__content">
      <div class="dropdown__icon">
        <Icon :name="icon" />
      </div>
      <span>{{ title }}</span>
    </div>
    <div class="dropdown__arrow">
      <Icon name="ri:arrow-drop-down-line" />
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/micro/dropdown.css");
</style>
