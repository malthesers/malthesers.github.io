<template>
  <div id="section-of-about" class="bg-dark">
    <section class="opacity-0">
      <h2>About me</h2>
      <div class="text-lg sm:text-xl font-display">
        <p class="text-pretty mb-4">
          <span>Hi again - my name is Malthe Kusk Lauritsen and I'm an aspiring </span>
          <span class="text-highlight">front-end web developer</span>
          <span>. Having previously graduated from </span>
          <NuxtLink to="https://www.kea.dk/">KEA</NuxtLink>
          <span> with an AP degree in </span>
          <NuxtLink to="https://kea.dk/en/programmes/academy-profession-degree/multimedia-design">multimedia design</NuxtLink>
          <span>- I am now studying - </span>
          <NuxtLink to="https://kea.dk/en/programmes/top-up-bachelor-degree/web-development">web development</NuxtLink>
          <span> also at KEA, while looking for an </span>
          <span class="text-highlight">internship </span>
          <span>that will help me gain real-world experience.</span>
        </p>
        <p class="text-pretty">
          <span>In my spare time, I might be caught developing my own </span>
          <NuxtLink to="things">side projects</NuxtLink>
          <span>, but when my eyes are starting to melt from looking at coloured words on a dark background, </span>
          <span>I may enjoy other of my hobbies, such as gaming, football and playing card games like </span>
          <span class="text-highlight">Yu-Gi-Oh!</span>
          <span> and </span>
          <span class="text-highlight">Pokémon</span>
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
