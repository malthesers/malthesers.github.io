<template>
  <div>
    <section>
      <div class="flex flex-wrap gap-4 justify-center mb-4">
        <TransitionGroup name="flip">
          <ThingCard v-for="(thing, index) in showcasedThings" :key="thing.name" :thing="thing" :index="index" />
        </TransitionGroup>
      </div>
      <div class="flex flex-row justify-center">
        <NuxtLink to="things" class="text-xl">more things</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'
const showcase: Ref<string[]> = ref(['Diable III', 'Soulsborndle', 'Hogwarts'])
const showcasedThings: Ref<Thing[]> = computed(() => {
  return things.filter((thing) => showcase.value.includes(thing.name))
})
</script>
