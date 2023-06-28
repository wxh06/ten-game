<script setup lang="ts">
import TicTacToe from './TicTacToe.vue'

const boards = Array(3)
  .fill(undefined)
  .map(() =>
    Array(3)
      .fill(undefined)
      .map(() =>
        Array(3)
          .fill(undefined)
          .map(() => Array(3).fill(true))
      )
  )
</script>

<template>
  <div class="grid grid-rows-3 border-4">
    <div class="grid grid-cols-3" v-for="(row, x) in boards" :key="x">
      <TicTacToe
        class="h-full w-full border-4"
        v-for="(col, y) in row"
        :key="y"
        :board="col"
      />
    </div>
  </div>
</template>
