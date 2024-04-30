<template>
  <article class="w-[18rem] h-[29rem]">
    <div :style="{ animation: flipAnimation }" class="flipped relative h-full preserve-3d duration-700 ease-in-out">
      <!-- Card back -->
      <ThingCardBack />
      <!-- Card front -->
      <ThingCardFront :thing="thing" />
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  thing: Thing
  index: number
}>()

const enableFlip = ref<boolean>(true)
const flipAnimation = computed<string>(() => (enableFlip.value ? `flipped 500ms ease-in ${props.index * 100}ms both` : ''))
</script>

<style>
article > div {
  transform: perspective(40rem) rotateY(180deg);
}

@keyframes flipped {
  0% {
    transform: perspective(40rem) rotateY(180deg);
  }

  100% {
    transform: perspective(40rem) rotateY(0deg);
  }
}
</style>
