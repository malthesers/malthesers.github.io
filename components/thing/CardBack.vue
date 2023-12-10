<template>
  <div class="absolute w-full h-full bg-land rounded-xl overflow-hidden">
    <div class="w-full h-full flex flex-col justify-between border-dark border-8">
      <CavernTopTransition />
      <img src="~/assets/images/moon.png" alt="moon" class="w-20 self-center transform rotate-180">
      <CavernTopTransition class="transform rotate-180" />
    </div>
  </div>
</template>