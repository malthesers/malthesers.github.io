<template>
  <div id="section-of-about" class="bg-dark">
    <section class="opacity-0">
      <h2>About me</h2>
      <div class="text-lg sm:text-xl font-display *:mb-4 *:text-pretty">
        <p>
          <span>Hi again - my name is Malthe Kusk Lauritsen and I'm an aspiring </span>
          <span class="text-highlight">web developer</span>
          <span>. I previously graduated from </span>
          <NuxtLink to="https://www.kea.dk/">KEA</NuxtLink>
          <span> with an AP degree in </span>
          <NuxtLink to="https://kea.dk/uddannelser/erhvervsakademi/multimediedesigner">multimedia design </NuxtLink>
          <span>and a bachelor's degree in </span>
          <NuxtLink to="https://kea.dk/uddannelser/top-up/webudvikling">web development</NuxtLink>
          <span>.</span>
        </p>
        <p>
          <span>In my spare time, I might be caught developing my own </span>
          <NuxtLink to="things">side projects</NuxtLink>
          <span>, but when my eyes are starting to melt from looking at coloured words on a dark background, </span>
          <span>I may enjoy some of my other hobbies.</span>
        </p>
        <p>
          <span>These include gaming, watching football and playing card games like the </span>
          <span class="text-highlight">Pokémon TCG </span>
          <span>and </span>
          <span class="text-highlight">Yu-Gi-Oh!</span>
          <span>.</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.to('#section-of-about > section', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '#section-of-about',
      start: 'top 65%'
    }
  })
})
</script>
