<script lang="ts" setup>
// eslint-disable-next-line import/no-named-as-default
import StarterKit from "@tiptap/starter-kit"
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3"

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit]
})
</script>

<template>
  <div>
    <div v-if="editor">
      <BubbleMenu class="bubble-menu" :tippy-options="{ duration: 100 }" :editor="editor">
        <button
          type="button"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          Bold
        </button>
        <button
          type="button"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          Italic
        </button>
        <button
          type="button"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          Strike
        </button>
      </BubbleMenu>

      <FloatingMenu class="floating-menu" :tippy-options="{ duration: 100 }" :editor="editor">
        <button
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          H1
        </button>
        <button
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          H2
        </button>
        <button
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          Bullet List
        </button>
      </FloatingMenu>
    </div>

    <EditorContent :editor="editor" />
  </div>
</template>
