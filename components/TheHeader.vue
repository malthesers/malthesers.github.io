<template>
  <header class="fixed z-10 w-full font-display font-medium">
    <div class="flex justify-between bg-dark px-6 py-3">
      <NuxtLink to="/" class="text-xl">malthesers</NuxtLink>
      <button class="sm:hidden text-xl" @click="showMenu = !showMenu">{{ showMenu ? '-' : '+' }}</button>
      <nav class="hidden sm:flex gap-4 place-items-center text-lg">
        <NuxtLink to="/">test</NuxtLink>
        <NuxtLink to="/things">things</NuxtLink>
      </nav>
    </div>
    <aside v-if="showMenu">
      <div class="flex flex-col gap-4 text-lg bg-dark px-6 py-3">
        <NuxtLink to="/">test</NuxtLink>
        <NuxtLink to="/things">things</NuxtLink>
      </div>
      <img src="~/assets/images/cavern-transitions/cavern-top-front.svg" alt="header bottom cavern" class="h-20 object-cover">
    </aside>
  </header>
</template>

<script setup>
const showMenu = ref(false)
</script>

<style scoped>
nav a {
  position: relative;
  display: inline-block;
}

nav a::after {
  position: absolute;
  content: "";
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
}
</style>