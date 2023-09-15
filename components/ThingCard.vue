<template>
  <article @click="flip = !flip" class="h-80">
    <div :class="{ 'card-flip' : flip }" class="relative h-full duration-700 ease-in-out">
      <div class="absolute w-full h-full bg-dark backface-hidden grid place-content-center">
        <p>m</p>
      </div>
      <div class="absolute w-full h-full bg-dark backface-hidden flex flex-col px-4 py-2">
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
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  thing: Object
})

const flip = ref(false)
</script>

<style scoped>
.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-flip {
  transform: perspective(20rem) rotateY(180deg);
}
</style>