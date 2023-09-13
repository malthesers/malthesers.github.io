<template>
  <section>
    <h1 class="mb-4">things i've made</h1>
    <div class="grid md:grid-cols-2 gap-4">
      <article v-for="thing in things" :key="thing.name" class="bg-dark px-4 py-2 rounded-xl">
        <h2 class="mb-4 lowercase">{{ thing.name }}</h2>
        <a :href="thing.repo" rel="nofollow noreferrer noopener">
          <Icon name="uil:github"/>
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'malthesers\' things',
  ogTitle: 'malthesers\' things',
  description: 'things of malthesers',
  ogDescription: 'things of malthesers',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

const things = ref([
  {
    name: 'Soulsborndle',
    repo: 'https://github.com/malthesers/soulsborndle',
    site: 'https://malthesers.github.io/soulsborndle/',
    desc: '',
    tools: ['Vue', 'TailwindCSS']
  },
  {
    name: 'Pablo\'s Pizza',
    repo: 'https://github.com/malthesers/pablos-pizza',
    site: 'https://malthesers.github.io/pablos-pizza/',
    desc: '',
    tools: ['JavaScript', 'TailwindCSS']
  },
])
</script>