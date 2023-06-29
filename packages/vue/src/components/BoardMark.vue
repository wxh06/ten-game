<script setup lang="ts">
import Cross from './icons/bi-x-lg.vue'
import Nought from './icons/bi-circle.vue'

defineProps<{ value: boolean | null }>()
</script>

<template>
  <div class="grid place-items-center">
    <Nought class="h-1/2 w-1/2" v-if="value" />
    <Cross class="h-1/2 w-1/2" v-else-if="value !== null" />
  </div>
</template>
