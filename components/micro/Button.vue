<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

type ColorType = "primary" | "secondary" | "gray" | "danger" | "warning" | "info" | "light" | "dark"

const props = defineProps({
  className: {
    type: String,
    default: "w-full",
  },
  title: {
    type: String,
    default: "Login"
  },
  font: {
    type: String as PropType<"sans" | "heading" | "outfit" | "carterOne">,
    default: "sans",
  },
  color: {
    type: String as PropType<ColorType>,
    default: "primary"
  },
  buttonType: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "sm",
  },
})

const renderedFont = computed(() => `font-${props.font}`)
const colors = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  gray: "",
  danger: "",
  info: "",
  light: "",
  dark: "",
  warning: "",
}
const sizes = {
  sm: "py-1.5 font-medium",
  md: "py-3 text-lg font-medium",
  lg: "",
}
defineEmits(["onClick"])
</script>

<template>
  <button
    :type="buttonType"
    :class="[,
      renderedFont,
      sizes[size] ?? null,
      colors[color] ?? null,
      className,
    ]"
    @click="$emit('onClick')"
  >
    {{ title }}
  </button>
</template>
