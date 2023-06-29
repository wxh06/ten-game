<script setup lang="ts">
import findWinner from '@/helpers/find-winner'
import { reactive, ref } from 'vue'
import TicTacToe from './TicTacToe.vue'
import BoardMark from './BoardMark.vue'

const count = ref(0)
const winner = ref<boolean | null>(null)
const boards = reactive<((boolean | null)[][] | boolean)[][]>(
  Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Array(3).fill(null)))
  )
)
let last: [number, number] | null = null

const isEnabled = (x: number, y: number) => last === null || (last[0] === x && last[1] === y)
function place(x: number, y: number) {
  last = [x, y]
  if (typeof boards[x][y] === 'boolean') last = null
  const w = findWinner(boards)
  if (typeof w === 'boolean') winner.value = w
}
</script>

<template>
  <span v-if="winner !== null"><BoardMark :value="winner" /></span>
  <div class="grid grid-rows-3 border-4" v-else>
    <div class="grid grid-cols-3" v-for="(row, x) in boards" :key="x">
      <TicTacToe
        class="border-4"
        :class="[isEnabled(x, y) && 'border-green-400']"
        v-for="(_, y) in row"
        :key="y"
        :disabled="!isEnabled(x, y)"
        v-model:board="boards[x][y]"
        v-model:count="count"
        @place="place"
      />
    </div>
  </div>
</template>
