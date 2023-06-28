<script setup lang="ts">
import TenGame from './components/TenGame.vue'
</script>

<template>
  <div class="mx-auto aspect-square h-full">
    <TenGame class="h-full w-full" />
  </div>
</template>

<style>
html,
body,
#app {
  @apply h-full;
}
</style>
