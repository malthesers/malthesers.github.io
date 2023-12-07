<template>
  <main>
    <section class="space-y-4">
      <h1>things i've made</h1>
      <div class="flex gap-4">
        <Icon name="vscode-icons:file-type-vue" />
        <Icon name="vscode-icons:file-type-reactjs" />
        <Icon name="vscode-icons:file-type-tailwind" />
        <Icon name="vscode-icons:file-type-scss" />
        <Icon name="vscode-icons:file-type-html" />
        <Icon name="vscode-icons:file-type-css" />
        <Icon name="vscode-icons:file-type-js-official" />
        <!-- <Icon name="skill-icons:vuejs-light"/>
        <Icon name="skill-icons:react-light"/>
        <Icon name="skill-icons:tailwindcss-light"/>
        <Icon name="skill-icons:sass"/>
        <Icon name="skill-icons:html"/>
        <Icon name="skill-icons:css"/>
        <Icon name="skill-icons:javascript"/> -->
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <TransitionGroup name="flip">
          <ThingCard v-for="(thing, index) in things" :key="thing.name" :thing="thing" :index="index" />
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
/* .flip-enter-active,
.flip-leave-active {
  transition: all 250ms;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(180deg);
} */
</style>