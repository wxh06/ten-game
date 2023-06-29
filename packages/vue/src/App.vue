<script setup lang="ts">
import UltimateTicTacToe from './components/UltimateTicTacToe.vue'
</script>

<template>
  <div class="mx-auto aspect-square max-h-full">
    <UltimateTicTacToe class="h-full w-full" />
  </div>
</template>

<style>
html,
body,
#app {
  @apply h-full;
}
</style>
