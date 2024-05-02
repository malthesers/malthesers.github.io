<template>
  <div id="section-of-landing" class="min-h-dvh flex bg-dark">
    <section class="flex flex-col py-4">
      <div class="grow flex flex-col place-content-center">
        <h1 class="*:block">
          <span id="title-intro" class="fade-in text-3xl sm:text-4xl md:text-5xl">Hi, I'm</span>
          <span id="title-name" class="fade-in text-7xl sm:text-8xl md:text-9xl">Malthe.</span>
        </h1>
        <p id="title-tag" class="text-xl md:text-2xl font-display text-balance">
          <span>A </span>
          <span class="text-highlight">front-end web developer </span>
          <span>looking for an </span>
          <span class="text-highlight">internship</span>
          <span>.</span>
        </p>
      </div>
      <NuxtLink id="title-chevron" to="#section-of-things" class="mt-auto text-center duration-200 hover:text-highlight">
        <Icon name="mdi:chevron-down" />
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline()
  const gsapFade: GSAPTweenVars = {
    opacity: '100%',
    duration: 0.4
  }

  tl.to('#title-intro', gsapFade)
  tl.to('#title-name', gsapFade)
  tl.to('#title-tag', gsapFade)
  tl.to('#title-chevron', gsapFade)
})
</script>

<style scoped>
[id^='title-'] {
  opacity: 0%;
}
</style>
