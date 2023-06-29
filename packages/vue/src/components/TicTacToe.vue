<script setup lang="ts">
import findWinner from '@/helpers/find-winner'
import BoardMark from './BoardMark.vue'

type Board = (boolean | null)[][] | boolean

const props = defineProps<{ board: Board; count: number; disabled: boolean }>()
const emit = defineEmits<{
  'update:board': [board: Board]
  'update:count': [count: number]
  place: [x: number, y: number]
}>()

function place(x: number, y: number) {
  if (!(props.board instanceof Array)) throw Error()
  if (typeof props.board[x][y] === 'boolean' || props.disabled) return
  const { board } = props
  board[x][y] = Boolean(props.count % 2)
  emit('update:count', props.count + 1)
  emit('update:board', findWinner(board) ?? board)
  emit('place', x, y)
}
</script>

<template>
  <div class="grid grid-rows-3 divide-y-2" v-if="board instanceof Array">
    <div class="grid grid-cols-3 divide-x-2" v-for="(row, x) in board" :key="x">
      <BoardMark :value="col" v-for="(col, y) in row" :key="y" @click="place(x, y)" />
    </div>
  </div>
  <BoardMark :value="board" v-else />
</template>
@/helpers/find-winner
