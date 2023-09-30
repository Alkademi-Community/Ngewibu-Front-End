<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  className: {
    type: String,
    default: ""
  }
})
defineEmits(["update:modelValue"])
</script>

<template>
  <label :for="name" :class="['input__wrapper', className]">
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      class="input__field"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style lang="postcss" scoped>
.input__wrapper {
  @apply block;

  .input__field {
    @apply outline-none w-full bg-gray-soft px-6 py-4
    shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-xl;
  }
}
</style>
