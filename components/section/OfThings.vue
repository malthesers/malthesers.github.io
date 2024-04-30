<template>
  <div id="section-of-things">
    <section class="space-y-12">
      <h2 class="text-4xl text-center">Some Things</h2>
      <ThingCardDisplay v-for="(thing, index) in showcasedThings" :thing="thing" :index="index" />
      <div class="flex flex-row justify-center">
        <NuxtLink to="things" class="text-xl">more things</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { things } from '~/assets/things'

const showcase: Ref<string[]> = ref(['Soulsborndle', 'Diable III', 'Hogwarts'])
const showcasedThings: ComputedRef<Thing[]> = computed(() => {
  const thing1 = things.find((thing) => thing.name === showcase.value[0]) || things[0]
  const thing2 = things.find((thing) => thing.name === showcase.value[1]) || things[1]
  const thing3 = things.find((thing) => thing.name === showcase.value[2]) || things[2]

  return [thing1, thing2, thing3]
})
</script>
