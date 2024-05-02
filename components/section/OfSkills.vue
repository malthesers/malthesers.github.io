<template>
  <div id="section-of-skills">
    <section class="opacity-0">
      <h2>Skills & Tools</h2>
      <p>Throughout my studies and spare time I have picked up some experience with these tools.</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 place-content-center">
        <!-- <SkillCard v-for="skill in skills" :key="skill.icon" :skill="skill" /> -->
        <article v-for="skill in skills" :key="skill.name" class="flex flex-col place-items-center gap-2">
          <Icon size="80" :name="skill.colorlessIcon" />
          <p class="font-display text-center">{{ skill.name }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { skills } from '~/assets/skills'

const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.to('#section-of-skills > section', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '#section-of-skills',
      start: 'top 65%'
    }
  })
})
</script>
