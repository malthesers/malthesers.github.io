<template>
  <main>
    <!-- <SplashScreen />
    <CavernTopTransition /> -->
    <SectionOfLanding />
    <CavernTopTransition />
    <SectionOfThings />
    <CavernBottomTransition class="-scale-x-100" />
    <SectionOfAbout />
    <CavernTopTransition class="-scale-x-100" />
    <SectionOfSkills />
    <CavernBottomTransition />
    <SectionOfContact />
    <!-- <LayoutMenuCards /> -->
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Malthe Kusk',
  ogTitle: 'Malthe Kusk',
  description: 'Portfolio of Malthe Kusk',
  ogDescription: 'Portfolio of Malthe Kusk'
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})
</script>
