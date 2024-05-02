<template>
  <div id="section-of-things">
    <section>
      <h2>Some Things</h2>
      <p>Below are some of the things I have created since starting my journey as developer.</p>
      <div class="space-y-10 mb-12">
        <ThingCardDisplay v-for="(thing, index) in showcasedThings" :key="thing.name" :thing="thing" :index="index" />
      </div>
      <MyButton to="things">More Things</MyButton>
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
