<template>
  <main>
    <section class="max-w-7xl space-y-4">
      <h1>Some more things</h1>
      <!-- <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
        <label v-for="tool in tools" :key="tool.name" :for="tool.name" class="cursor-pointer">
          <input v-model="activeFilters" type="checkbox" :value="tool.name" :id="tool.name" class="peer appearance-none" />
          <Icon :name="'devicon:' + tool.icon" class="opacity-40 peer-checked:opacity-100 duration-200" />
        </label>
      </div> -->
      <div class="flex flex-wrap gap-4 justify-center">
        <TransitionGroup name="flip">
          <ThingCard v-for="(thing, index) in things" :key="thing.name" :thing="thing" :index="index" :enableFlip="true" :enableHover="true" />
        </TransitionGroup>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'
// import { tools } from '~/assets/skills'

useSeoMeta({
  title: "Malthe Kusk's things",
  ogTitle: "Malthe Kusk's things",
  description: 'Things of Malthe Kusk',
  ogDescription: 'Things of Malthe Kusk'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

// const activeFilters: Ref<ToolName[]> = ref([])
// const filteredThings: Ref<Thing[]> = computed(() => {
//   return things.filter((thing) => activeFilters.value.every((filter) => thing.tools.includes(filter)))
// })
</script>
