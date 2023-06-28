<script setup lang="ts">
import Cross from './icons/bi-x-lg.vue'
import Nought from './icons/bi-circle.vue'

defineProps<{ board: (boolean | null)[][] }>()
</script>

<template>
  <div class="grid grid-rows-3 divide-y-2">
    <div class="grid grid-cols-3 divide-x-2" v-for="(row, x) in board" :key="x">
      <div class="grid place-items-center" v-for="(col, y) in row" :key="y">
        <Nought class="h-1/2 w-1/2" v-if="col" />
        <Cross class="h-1/2 w-1/2" v-else-if="col !== null" />
      </div>
    </div>
  </div>
</template>
