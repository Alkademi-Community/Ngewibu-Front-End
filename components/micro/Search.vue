<script lang="ts" setup>
defineProps({
  className: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: "",
    required: true
  }
})
</script>

<template>
  <label :class="['search__wrapper', className]">
    <div class="search__icon">
      <Icon name="ri:search-line" />
    </div>
    <input :id="name" type="text" :name="name" class="search__input" :placeholder="placeholder" />
  </label>
</template>

<style lang="css" scoped>
@import url("~/assets/css/components/micro/search.css");
</style>
