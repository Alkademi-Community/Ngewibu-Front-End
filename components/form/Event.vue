<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi"

import { FormFields } from "~/utils/types/forms"

defineProps({
  inputForm: {
    type: Array as PropType<FormFields[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="bg-white py-6 px-7 shadow-small rounded-xl">
    <h2 class="text-lg font-semibold mb-4">Details</h2>
    <form class="grid grid-cols-2 gap-x-6">
      <template v-for="input of inputForm">
        <MicroInput
          v-if="input.type !== 'textarea' && input.type !== 'radio' && input.type !== 'file'"
          :id="input.name"
          :key="input.name"
          v-model="input.value"
          :name="input.name"
          :type="input.type"
          :label="input.label"
          :placeholder="input.placeholder"
          :class="['mb-4', input.type !== 'datetime-local' ? 'col-span-2' : '']"
        />
        <!-- <MicroEditor
          v-if="input.type === 'textarea'"
          :key="input.name"
        /> -->
        <!-- <MicroTiny
          v-if="input.type === 'textarea'"
          :key="input.name"
        /> -->
      </template>
    </form>
    <MicroEditor />
    <MicroTiny />
  </div>
</template>
