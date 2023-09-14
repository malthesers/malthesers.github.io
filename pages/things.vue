<template>
  <main>
    <section>
      <h1 class="mb-4">things i've made</h1>
      <div class="grid md:grid-cols-2 gap-4">
        <article v-for="thing in things" :key="thing.name" class="bg-dark px-4 py-2 rounded-xl">
          <h2 class="lowercase">{{ thing.name }}</h2>
          <p class="mb-4">{{ thing.desc }}</p>
          <div>
            <Icon name="vscode-icons:file-type-vue"/>
            <Icon name="vscode-icons:file-type-tailwind"/>
            <Icon name="vscode-icons:file-type-html"/>
            <Icon name="vscode-icons:file-type-css"/>
            <Icon name="vscode-icons:file-type-js-official"/>
          </div>
          <NuxtLink :to="thing.repo" target="_blank">
            <Icon name="uil:github"/>
          </NuxtLink>
        </article>
      </div>
    </section>
  </main>
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
    desc: 'A Wordle-like Souls-like web game - guess the boss by using hints from your past guesses!',
    tools: ['vuejs', 'tailwind']
  },
  {
    name: 'Pablo\'s Pizza',
    repo: 'https://github.com/malthesers/pablos-pizza',
    site: 'https://malthesers.github.io/pablos-pizza/',
    desc: 'The famous pizzeria, Pablo\'s Pizza, is under attack and Pablo needs your help!',
    tools: ['html', 'css', 'js']
  },
  {
    name: 'Hogwarts | vue',
    repo: 'https://github.com/malthesers/hogwarts-vue',
    site: 'https://malthesers.github.io/hogwarts-vue/',
    desc: 'Assume the role of a Hogwarts system administrator (but in Vue).',
    tools: ['vuejs', 'tailwind']
  },
  {
    name: 'Hogwarts',
    repo: 'https://github.com/malthesers/hogwarts',
    site: 'https://malthesers.github.io/hogwarts/',
    desc: 'Assume the role of a Hogwarts system administrator.',
    tools: ['html', 'css', 'js']
  },
])
</script>