<template>
  <div>
    <TheHeader/>
    <NuxtPage class="max-w-5xl mx-auto p-4"/>
    <TheFooter/>
  </div>
</template>

<script setup>
useHead({
  title: 'malthesers\'s things',
  meta: [
    { name: 'description', content: 'things of malthesers'}
  ]
})
</script>