<template>
  <article class="bg-dark flex flex-col px-4 py-2 rounded-xl">
    <h2 class="lowercase">{{ thing.name }}</h2>
    <p class="mb-4">{{ thing.desc }}</p>
    <div class="mt-auto flex justify-between">
      <div class="flex gap-2">
        <NuxtLink :to="thing.repo" target="_blank" class="duration-200 hover:opacity-75">
          <Icon name="uil:github"/>
        </NuxtLink>
        <NuxtLink :to="thing.site" target="_blank" class="duration-200 hover:opacity-75">
          <Icon name="uil:rocket"/>
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <Icon v-if="thing.tools.includes('vue')" name="vscode-icons:file-type-vue"/>
        <Icon v-if="thing.tools.includes('tw')" name="vscode-icons:file-type-tailwind"/>
        <Icon v-if="thing.tools.includes('html')" name="vscode-icons:file-type-html"/>
        <Icon v-if="thing.tools.includes('css')" name="vscode-icons:file-type-css"/>
        <Icon v-if="thing.tools.includes('js')" name="vscode-icons:file-type-js-official"/>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  thing: Object
})
</script>