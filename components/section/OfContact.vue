<template>
  <div id="section-of-contact" class="bg-dark">
    <section class="opacity-0">
      <h2>Get in touch</h2>
      <p class="!mb-4">You can reach out to me through the platforms below.</p>
      <div class="flex justify-center gap-2">
        <NuxtLink to="https://www.linkedin.com/in/malthe-kusk/" target="_blank" class="duration-200 hover:opacity-70">
          <Icon name="mdi:linkedin" size="50" />
        </NuxtLink>
        <NuxtLink to="https://github.com/malthesers" target="_blank" class="duration-200 hover:opacity-70">
          <Icon name="mdi:github" size="50" />
        </NuxtLink>
        <a href="mailto:malthekusk@gmail.com" class="duration-200 hover:opacity-70">
          <Icon name="mdi:email" size="50" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.to('#section-of-contact > section', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '#section-of-contact',
      start: 'top 65%'
    }
  })
})
</script>
