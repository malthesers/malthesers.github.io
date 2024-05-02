<template>
  <main>
    <!-- <SplashScreen />
    <CavernTopTransition /> -->
    <SectionOfLanding />
    <SectionOfThings />
    <SectionOfAbout />
    <SectionOfSkills />
    <SectionOfContact />
    <!-- <LayoutMenuCards /> -->
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'malthesers',
  ogTitle: 'malthesers',
  description: 'portfolio of malthesers',
  ogDescription: 'portfolio of malthesers'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

onMounted(() => {
  console.log('👀👀👀')
})
</script>
