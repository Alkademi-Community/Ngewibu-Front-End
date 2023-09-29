<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

import { FormFields } from "~/utils/types/forms"
import { FontType } from "~/utils/types/theme"

const props = defineProps({
  className: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  titleFont: {
    type: String as PropType<FontType>,
    default: "heading"
  },
  descriptionFont: {
    type: String as PropType<FontType>,
    default: "sans"
  },
  inputForm: {
    type: Array as PropType<FormFields[]>,
    default: () => []
  },
  buttonFont: {
    type: String as PropType<FontType>,
    default: "heading"
  },
  buttonText: {
    type: String,
    default: ""
  }
})

const renderedTitleFont = computed(() => `font-${props.titleFont}`)
const renderedDescFont = computed(() => `font-${props.descriptionFont}`)
</script>

<template>
  <div :class="['form__container', className]">
    <h1 :class="['form__title', renderedTitleFont]">
      {{ title }}
    </h1>
    <p :class="['form__description', renderedDescFont]">
      {{ description }}
    </p>

    <form class="form__wrapper" @submit.prevent="() => {}">
      <MicroInput
        v-for="input of inputForm"
        :id="input.name"
        :key="input.name"
        v-model="input.value"
        :name="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
        class-name="mb-4"
      />

      <slot name="before-button" />

      <MicroButton
        type="submit"
        :title="buttonText"
        color="secondary"
        :font="buttonFont"
        size="md"
        rounded="xl"
      />
    </form>
  </div>
</template>

<style lang="css">
@import url("~/assets/css/components/form/base.css");
</style>
