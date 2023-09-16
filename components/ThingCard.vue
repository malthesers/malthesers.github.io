<template>
  <article class="h-96">
    <div :class="{ 'card-flip' : flip }" class="relative h-full preserve-3d duration-700 ease-in-out">
      <div class="absolute w-full h-full bg-dark rounded-xl grid place-content-center">
        <p class="text-3xl">m</p>
      </div>
      <div :style="{ backgroundImage: `url(/images/things/${thing.image}.png)` }" class="absolute w-full h-full rounded-xl backface-hidden flex flex-col bg-cover bg-center bg-no-repeat">
        <div class="bg-dark bg-opacity-75 mt-auto p-4 rounded-b-xl">
          <h2 class="lowercase">{{ thing.name }}</h2>
          <p class="mb-4">{{ thing.desc }}</p>
          <div class="flex justify-between">
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
              <Icon v-if="thing.tools.includes('react')" name="vscode-icons:file-type-reactjs"/>
              <Icon v-if="thing.tools.includes('html')" name="vscode-icons:file-type-html"/>
              <Icon v-if="thing.tools.includes('css')" name="vscode-icons:file-type-css"/>
              <Icon v-if="thing.tools.includes('js')" name="vscode-icons:file-type-js-official"/>
            </div>
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
article > div {
  transform: perspective(40rem);
}
.card-flip {
  transform: rotateY(180deg);
}
</style>