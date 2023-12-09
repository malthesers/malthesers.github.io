<template>
  <main>
    <section class="space-y-4">
      <h1>things i've made</h1>
      <div class="flex gap-4">
        <Icon name="devicon:vuejs" />
        <Icon name="devicon:react" />
        <Icon name="devicon:tailwindcss" />
        <Icon name="devicon:sass" />
        <Icon name="devicon:html5" />
        <Icon name="devicon:css3" />
        <Icon name="devicon:javascript" />
        <Icon name="devicon:typescript" />
      </div>
      <div class="flex flex-wrap gap-4">
        <TransitionGroup name="flip">
          <ThingCard v-for="(thing, index) in things" :key="thing.name" :thing="thing" :index="index" />
        </TransitionGroup>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'

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
/* .flip-enter-active,
.flip-leave-active {
  transition: all 250ms;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(180deg);
} */
</style>