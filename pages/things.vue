<template>
  <main>
    <section class="space-y-4">
      <h1>things i've made</h1>
      <div class="flex gap-4">
        <label v-for="tool in tools" :key="tool" :for="tool">
          <input v-model="activeFilters" type="checkbox" :value="tool" :id="tool" class="appearance-none" />
          <Icon :name="'devicon:' + icons[tool]" />
        </label>

        <!-- <Icon :name="'devicon:vuejs'" />
        <Icon name="devicon:react" />
        <Icon name="devicon:tailwindcss" />
        <Icon name="devicon:sass" />
        <Icon name="devicon:html5" />
        <Icon name="devicon:css3" />
        <Icon name="devicon:javascript" />
        <Icon name="devicon:typescript" /> -->
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

useSeoMeta({
  title: "malthesers' things",
  ogTitle: "malthesers' things",
  description: 'things of malthesers',
  ogDescription: 'things of malthesers'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

const tools: Ref<Icon[]> = ref(['vue', 'react', 'tw', 'scss', 'html', 'css', 'js', 'ts'])
const icons = ref({
  vue: 'vuejs',
  react: 'react',
  tw: 'tailwindcss',
  scss: 'sass',
  html: 'html5',
  css: 'css3',
  js: 'javascript',
  ts: 'typescript'
})

const activeFilters: Ref<Icon[]> = ref([])
const filteredThings: Ref<Thing[]> = computed(() => {
  return things.filter((thing) => activeFilters.value.every((filter) => thing.tools.includes(filter)))
})
</script>
