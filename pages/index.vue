<template>
  <main>
    <SplashScreen />
    <CavernTopTransition />
    <section>
      <h2>yo</h2>
    </section>
  </main>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'

useSeoMeta({
  title: 'malthesers',
  ogTitle: 'malthesers',
  description: 'portfolio of malthesers',
  ogDescription: 'portfolio of malthesers'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

const showcase: Ref<string[]> = ref(['Diable III', 'Soulsborndle', "Pablo's Pizza"])
const showcasedThings: Ref<Thing[]> = computed(() => {
  return things.filter((thing) => showcase.value.includes(thing.name))
})
</script>
