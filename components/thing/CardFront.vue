<template>
  <div
    :style="{ backgroundImage: `url(/images/things/${thing.image})`, color: thing.appearance.textColour, borderColor: thing.appearance.borderColour }"
    class="group absolute size-full rounded-xl backface-hidden flex flex-col bg-cover bg-center bg-no-repeat border-4"
  >
    <div class="bg-gradient-to-t from-black/50 mt-auto p-4 rounded-b-lg">
      <div class="text-center overflow-hidden mb-4">
        <p class="font-medium text-2xl" :class="`font-${thing.appearance.fontFamily}`">{{ thing.name }}</p>
        <p class="max-h-0 group-hover:max-h-20 duration-300">{{ thing.desc }}</p>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-2">
          <NuxtLink :to="thing.repo" target="_blank" :aria-label="`GitHub repository of ${thing.name}`" class="duration-200 hover:opacity-70">
            <Icon name="uil:github" />
          </NuxtLink>
          <NuxtLink :to="thing.site" target="_blank" :aria-label="`Deployment of ${thing.name}`" class="duration-200 hover:opacity-70">
            <Icon name="uil:external-link-alt" />
          </NuxtLink>
        </div>
        <div class="flex gap-2">
          <Icon v-if="thing.tools.includes('vue')" name="devicon:vuejs" />
          <Icon v-if="thing.tools.includes('react')" name="devicon:react" />
          <Icon v-if="thing.tools.includes('tw')" name="devicon:tailwindcss" />
          <Icon v-if="thing.tools.includes('scss')" name="devicon:sass" />
          <Icon v-if="thing.tools.includes('html')" name="devicon:html5" />
          <Icon v-if="thing.tools.includes('css')" name="devicon:css3" />
          <Icon v-if="thing.tools.includes('js')" name="devicon:javascript" />
          <Icon v-if="thing.tools.includes('ts')" name="devicon:typescript" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  thing: Thing
}>()
</script>
