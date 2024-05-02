<template>
  <article class="min-w-[9rem] w-[9rem] aspect-[2/3]">
    <div class="h-full grid *:grid-center bg-dark border-dark border-4 rounded-xl overflow-hidden shadow-2xl">
      <Icon size="100%" :name="skill.devIcon" class="scale-[200%] opacity-50" />
      <div class="z-10 flex flex-col">
        <div class="rounded-b-lg">
          <p class="p-2 bg-dark/70 font-display text-lg text-center">{{ skill.name }}</p>
          <!-- <Icon size="60" :name="'devicon:' + skill.icon" /> -->
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  skill: Skill
}>()
</script>

<style></style>
