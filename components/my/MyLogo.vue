<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262 252" :fill="color">
    <defs></defs>
    <polygon class="cls-1" points="0 0 44 0 130.64 193 219 0 262 0 262 252 220 252 222 82 147 252 116 252 41 81 39 252 0 252 0 0" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string
  }>(),
  {
    color: '#ffd89a'
  }
)
</script>
