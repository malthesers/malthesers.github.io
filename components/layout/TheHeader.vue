<template>
  <Transition name="slide">
    <header v-if="showHeader" class="fixed z-50 w-full font-display font-medium">
      <div class="relative bg-dark bg-opacity-50 backdrop-blur-xl flex z-20 justify-between px-6 py-3">
        <NuxtLink to="/#section-of-landing" class="text-xl">M</NuxtLink>
        <button class="sm:hidden text-xl" @click="showMenu = !showMenu">{{ showMenu ? '-' : '+' }}</button>
        <nav class="hidden sm:flex gap-4 place-items-center text-lg">
          <NuxtLink to="#section-of-things">Things</NuxtLink>
          <NuxtLink to="#section-of-about">About</NuxtLink>
          <NuxtLink to="#section-of-skills">Skills</NuxtLink>
          <NuxtLink to="#section-of-contact">Contact</NuxtLink>
        </nav>
      </div>
      <Transition name="slide">
        <aside v-if="showMenu" class="relative z-10 sm:hidden">
          <div class="flex flex-col gap-4 text-lg bg-dark px-6 py-3">
            <NuxtLink to="#section-of-things">Things</NuxtLink>
            <NuxtLink to="#section-of-about">About</NuxtLink>
            <NuxtLink to="#section-of-skills">Skills</NuxtLink>
            <NuxtLink to="#section-of-contact">Contact</NuxtLink>
          </div>
          <!-- <img src="~/assets/images/cavern-transitions/cavern-top-front.svg" alt="header bottom cavern" /> -->
        </aside>
      </Transition>
    </header>
  </Transition>
</template>

<script setup lang="ts">
const showHeader: Ref<boolean> = ref(true)
const showMenu: Ref<boolean> = ref(false)

const { $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  console.log('👀👀👀')

  $ScrollTrigger.create({
    start: 'top',
    end: 'max',
    onUpdate: (self) => (showHeader.value = self.direction === -1)
  })
})
</script>

<style scoped>
/* nav a {
  position: relative;
  display: inline-block;
}

nav a::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: transform 200ms ease-out;
  transform: scaleX(0);
}

nav a:hover::after,
.router-link-active::after {
  transform: scaleX(1);
} */

.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms ease 200ms;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
