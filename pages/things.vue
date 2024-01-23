<template>
  <main>
    <section class="space-y-4">
      <h1>things i've made</h1>
      <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
        <label v-for="tool in tools" :key="tool.name" :for="tool.name">
          <input v-model="activeFilters" type="checkbox" :value="tool.name" :id="tool.name" class="appearance-none" />
          <Icon :name="'devicon:' + tool.icon" />
        </label>
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <TransitionGroup name="flip">
          <ThingCard v-for="(thing, index) in filteredThings" :key="thing.name" :thing="thing" :index="index" />
        </TransitionGroup>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'
import { tools } from '~/assets/tools'

useSeoMeta({
  title: "malthesers' things",
  ogTitle: "malthesers' things",
  description: 'things of malthesers',
  ogDescription: 'things of malthesers'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

const activeFilters: Ref<ToolName[]> = ref([])
const filteredThings: Ref<Thing[]> = computed(() => {
  return things.filter((thing) => activeFilters.value.every((filter) => thing.tools.includes(filter)))
})
</script>
