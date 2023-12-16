<template>
  <div
    :style="{ backgroundImage: `url(/images/things/${thing.image})`, color: thing.appearance.textColour, borderColor: thing.appearance.borderColour }"
    class="group absolute w-full h-full rounded-xl backface-hidden flex flex-col bg-cover bg-center bg-no-repeat border-4">
    <div class="bg-gradient-to-t from-black/50 mt-auto p-4 rounded-b-lg">
      <div class="text-center overflow-hidden mb-4">
        <h2 :class="`font-${thing.appearance.fontFamily}`" class=" font-spectral">{{ thing.name }}</h2>
        <p class="max-h-0 duration-300 group-hover:max-h-20">{{ thing.desc }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-2">
          <NuxtLink :to="thing.repo" target="_blank" class="duration-200 hover:opacity-75">
            <Icon name="uil:github" />
          </NuxtLink>
          <NuxtLink :to="thing.site" target="_blank" class="duration-200 hover:opacity-75">
            <Icon name="uil:rocket" />
          </NuxtLink>
        </div>
        <div class="flex gap-2">
          <Icon v-if="thing.tools.includes('vue')" name="vscode-icons:file-type-vue" />
          <Icon v-if="thing.tools.includes('react')" name="vscode-icons:file-type-reactjs" />
          <Icon v-if="thing.tools.includes('js')" name="vscode-icons:file-type-js-official" />
          <Icon v-if="thing.tools.includes('html')" name="vscode-icons:file-type-html" />
          <Icon v-if="thing.tools.includes('css')" name="vscode-icons:file-type-css" />
          <Icon v-if="thing.tools.includes('tw')" name="vscode-icons:file-type-tailwind" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  thing: Thing,
}>()
</script>