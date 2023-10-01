<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"
import QrcodeVue, { Level, RenderAs } from "qrcode.vue"

import { ColorType } from "~/utils/types/theme"

defineProps({
  level: {
    type: String as PropType<Level>,
    default: "H"
  },
  renderAs: {
    type: String as PropType<RenderAs>,
    default: "svg"
  },
  value: {
    type: String,
    default: "",
    required: true
  },
  background: {
    type: String as PropType<ColorType>,
    default: "white"
  },
  foreground: {
    type: String as PropType<ColorType>,
    default: "black"
  }
})

const colors: { [_key in ColorType]: string } = {
  primary: "#87CEEB",
  secondary: "#70ACC4",
  danger: "",
  dark: "",
  gray: "",
  info: "",
  light: "",
  warning: "",
  black: "#333333",
  white: "#F9F9F9"
}
</script>

<template>
  <div>
    <QrcodeVue
      :level="level"
      :render-as="renderAs"
      :value="value"
      :background="colors[background]"
      :foreground="colors[foreground]"
      class="mx-auto"
    />
  </div>
</template>
