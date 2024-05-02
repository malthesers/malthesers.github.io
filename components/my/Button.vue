<template>
  <div class="flex flex-row items-center">
    <NuxtLink
      :to="to"
      class="mx-auto px-3 py-2 font-display text-xl border-accent border-2 rounded-lg duration-200 hover:bg-accent hover:text-dark focus-within:translate-x-1 focus-within:translate-y-1"
    >
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>
