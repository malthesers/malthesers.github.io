<template>
  <Transition name="slide">
    <div v-if="showMenuCards" class="fixed z-50 bottom-0 h-16 hover:h-80 duration-200 w-full">
      <nav class="flex flex-row gap-4 justify-center">
        <NuxtLink v-for="menuCard in menuCards" :to="menuCard.url">
          <article class="min-w-[14rem] w-[14rem] min-h-[22rem] h-[22rem] p-4 bg-dark border-accent border-4 rounded-xl shadow-2xl">
            <p class="text-2xl text-center">{{ menuCard.title }}</p>
          </article>
        </NuxtLink>
      </nav>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
const menuCards = ref([
  {
    title: 'Home',
    url: '#section-of-landing'
  },
  {
    title: 'Things',
    url: '#section-of-things'
  }
])
const showMenuCards: Ref<boolean> = ref(true)

onMounted(() => {
  window.addEventListener('wheel', (e) => {
    showMenuCards.value = e.deltaY < 100 ? true : false
  })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 400ms ease 200ms;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
