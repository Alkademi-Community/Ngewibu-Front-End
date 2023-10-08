<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

const props = defineProps({
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
  label: {
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
  },
  inputStyle: {
    type: String as PropType<"base" | "variant">,
    default: "base"
  }
})
defineEmits(["update:modelValue"])

const style = computed(() => `input__field--${props.inputStyle}`)
</script>

<template>
  <label :for="name" :class="['input__wrapper', className]">
    <span v-if="inputStyle === 'base'" class="input__label">{{ label }}</span>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      :class="style"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style lang="postcss" scoped>
.input__wrapper {
  @apply block;

  .input__label {
    @apply mb-2.5 block;
  }
  .input__field {
    &--base {
      @apply outline-none w-full bg-white px-5 py-3
      shadow-[0_0_2px_0_rgba(0,0,0,0.25)] rounded-xl;
    }
    &--variant {
      @apply outline-none w-full bg-gray-soft px-6 py-4
      shadow-[0_2px_1px_0_rgba(0,0,0,0.25)] rounded-xl;
    }
  }
}
</style>
