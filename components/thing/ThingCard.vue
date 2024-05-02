<template>
  <article class="thing-card min-w-[18rem] w-[18rem] min-h-[29rem] h-[29rem]">
    <div
      @animationend="$emit('animationend')"
      :style="{ animation: flipAnimation }"
      class="flipped relative h-full preserve-3d duration-700 ease-in-out shadow-2xl"
    >
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
  enableFlip: boolean
}>()

defineEmits(['animationend'])

const flipAnimation = computed<string>(() => (props.enableFlip ? `flipped 500ms ease-in ${props.index * 100}ms both` : ''))
</script>

<style>
.thing-card > div {
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
