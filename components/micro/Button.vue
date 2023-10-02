<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

import { ColorType, FontType, OutlineType, RoundedType } from "~/utils/types/theme"

const props = defineProps({
  className: {
    type: String,
    default: "w-full"
  },
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  iconClass: {
    type: String,
    default: ""
  },
  font: {
    type: String as PropType<FontType>,
    default: "sans"
  },
  color: {
    type: String as PropType<ColorType | OutlineType>,
    default: "primary"
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button"
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "sm"
  },
  rounded: {
    type: String as PropType<RoundedType>,
    default: "none"
  }
})

const renderedFont = computed(() => `font-${props.font}`)
const colors: { [_key in ColorType]: string } & { [_key in OutlineType]: string } = {
  primary: "bg-primary text-white hover:bg-shakespeare",
  secondary: "bg-secondary text-white hover:bg-shakespeare",
  gray: "",
  danger: "",
  info: "",
  light: "",
  dark: "",
  warning: "",
  black: "",
  white: "",
  "outline-primary": "border-2 border-primary text-primary hover:bg-shakespeare",
  "outline-secondary":
    "border-2 border-secondary text-secondary hover:bg-shakespeare hover:text-white hover:border-shakespeare",
  "outline-gray": "",
  "outline-dark": "",
  "outline-danger": "",
  "outline-info": "",
  "outline-light": "",
  "outline-warning": "",
  "outline-black": "",
  "outline-white": ""
}
const sizes = {
  sm: "py-1.5 font-medium",
  md: "py-2 text-lg font-medium",
  lg: ""
}
const roundeds: { [_key in RoundedType]: string } = {
  none: "rounded-none",
  sm: "rounded-sm",
  base: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full"
}
defineEmits(["onClick"])
</script>

<template>
  <button
    :type="type"
    :class="[
      renderedFont,
      sizes[size] ?? null,
      colors[color] ?? null,
      roundeds[rounded] ?? null,
      'button__container',
      className
    ]"
    @click="$emit('onClick')"
  >
    <Icon v-if="icon" :name="icon" :class="iconClass" />
    <span>
      {{ title }}
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.button__container {
  @apply transition-all duration-200;
}
</style>
