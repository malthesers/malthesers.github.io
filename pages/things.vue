<template>
  <main>
    <section class="space-y-4">
      <h1>things i've made</h1>
      <div class="grid md:grid-cols-2 gap-4">
        <TransitionGroup name="flip">
          <ThingCard v-for="thing in things" :key="thing.name" :thing="thing"/>
        </TransitionGroup>
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

<style scoped>
.flip-enter-active,
.flip-leave-active {
  transition: all 250ms;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(180deg);
}
</style>