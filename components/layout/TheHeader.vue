<template>
  <Transition name="slide-down">
    <header v-if="showHeader" class="fixed z-50 w-full font-display font-medium">
      <div class="relative bg-dark bg-opacity-50 backdrop-blur-xl flex z-20 justify-between px-6 py-3">
        <NuxtLink to="/#section-of-landing" class="text-xl">M</NuxtLink>
        <nav class="hidden sm:flex gap-4 place-items-center text-lg">
          <NuxtLink to="/#section-of-things">Things</NuxtLink>
          <NuxtLink to="/#section-of-about">About</NuxtLink>
          <NuxtLink to="/#section-of-skills">Skills</NuxtLink>
          <NuxtLink to="/#section-of-contact">Contact</NuxtLink>
        </nav>
        <button class="sm:hidden text-xl" @click="showMenu = !showMenu">
          <Transition :key="showMenu" mode="out-in" name="fade">
            <Icon v-if="!showMenu" name="gravity-ui:bars-descending-align-right" size="24" />
            <Icon v-else name="gravity-ui:xmark" size="28" />
          </Transition>
        </button>
      </div>
      <!-- <Transition name="slide-in"> -->
      <aside id="mobile-menu" class="relative z-10 sm:hidden">
        <nav class="flex flex-col text-lg *:px-6 *:py-3 *:bg-dark *:bg-opacity-50 *:backdrop-blur-xl *:translate-x-full">
          <NuxtLink to="/#section-of-things">Things</NuxtLink>
          <NuxtLink to="/#section-of-about">About</NuxtLink>
          <NuxtLink to="/#section-of-skills">Skills</NuxtLink>
          <NuxtLink to="/#section-of-contact">Contact</NuxtLink>
        </nav>
        <!-- <img src="~/assets/images/cavern-transitions/cavern-top-front.svg" alt="header bottom cavern" /> -->
      </aside>
      <!-- </Transition> -->
    </header>
  </Transition>
</template>

<script setup lang="ts">
const showHeader: Ref<boolean> = ref(true)
const showMenu: Ref<boolean> = ref(false)

const { $gsap, $ScrollTrigger } = useNuxtApp()

watch(showMenu, () => {
  if (showMenu.value) {
    $gsap.to('#mobile-menu > nav > a', {
      duration: 0.1,
      stagger: 0.1,
      x: '0%',
      ease: 'back.in'
    })
  } else {
    $gsap.to('#mobile-menu > nav > a', {
      duration: 0.1,
      stagger: -0.1,
      x: '100%',
      ease: 'back.in'
    })
  }
})

onMounted(() => {
  console.log('👀👀👀')

  $ScrollTrigger.create({
    start: 'top',
    end: 'max',
    onUpdate: (self) => {
      showHeader.value = self.direction === -1
      showMenu.value = false
    }
  })
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 300ms ease 200ms;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 300ms ease;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
