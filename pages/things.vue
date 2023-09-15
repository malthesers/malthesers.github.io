<template>
  <main>
    <section>
      <h1 class="mb-4">things i've made</h1>
      <div class="grid md:grid-cols-2 gap-4">
        <ThingCard v-for="thing in things" :key="thing.name" :thing="thing"/>
      </div>
    </section>
  </main>
</template>

<script setup>
import things from '~/assets/things.json'

useSeoMeta({
  title: 'malthesers\' things',
  ogTitle: 'malthesers\' things',
  description: 'things of malthesers',
  ogDescription: 'things of malthesers',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})
</script>