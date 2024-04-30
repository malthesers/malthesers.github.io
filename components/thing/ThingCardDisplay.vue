<template>
  <div ref="nodeRef" class="group flex odd:flex-row even:flex-row-reverse justify-center max-w-3xl mx-auto">
    <ThingCard class="z-10" @animationend="showInfo = true" :key="thing.name" :thing="thing" :index="1" :enableFlip="enableFlip" :enableHover="false" />
    <Transition name="slide" @afterEnter="showText = true">
      <div
        v-if="showInfo"
        :style="{ color: thing.appearance.textColour, backgroundColor: thing.appearance.borderColour }"
        class="hidden sm:block w-full my-12 group-odd:rounded-r-2xl group-even:rounded-l-2xl overflow-hidden"
      >
        <Transition name="fade">
          <div v-if="showText" class="my-auto p-6 text-wrap">
            <h3 :class="`font-${thing.appearance.fontFamily}`" class="text-4xl text-center mb-2">{{ thing.name }}</h3>
            <p class="italic text-center">{{ thing.desc }}</p>
            <MyDivider :color="thing.appearance.textColour" />
            <p v-for="text in thing.descDev" class="text-pretty mb-2">{{ text }}</p>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  thing: Thing
  index: number
}>()

const { $ScrollTrigger } = useNuxtApp()

const showInfo: Ref<boolean> = ref(false)
const showText: Ref<boolean> = ref(false)
const enableFlip: Ref<boolean> = ref(false)
const nodeRef: Ref<HTMLDivElement | null> = ref(null)

onMounted(() => {
  $ScrollTrigger.create({
    trigger: nodeRef.value,
    start: 'top 65%',
    onToggle: () => (enableFlip.value = true)
  })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: width 700ms ease-in;
}

.slide-enter-from,
.slide-leave-to {
  width: 0%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
