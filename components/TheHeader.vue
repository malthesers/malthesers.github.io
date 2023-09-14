<template>
  <header class="bg-dark font-display font-medium px-6 py-3 flex justify-between">
    <NuxtLink to="/" class="text-xl">malthesers</NuxtLink>
    <nav class="text-lg flex place-items-center">
      <NuxtLink to="/">test</NuxtLink>
      <NuxtLink to="/things">things</NuxtLink>
    </nav>
  </header>
</template>

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