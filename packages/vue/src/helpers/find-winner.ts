function line(board: unknown[][], x: number, y: number, dx: number, dy: number) {
  const last = board[x][y]
  if (typeof last !== 'boolean') return null
  for (let i = 1; i < 3; i += 1) if (board[x + dx * i][y + dy * i] !== last) return null
  return last
}

export default (board: unknown[][]) =>
  [
    line(board, 0, 0, 0, 1),
    line(board, 0, 0, 1, 1),
    line(board, 0, 0, 1, 0),
    line(board, 0, 1, 1, 0),
    line(board, 0, 2, 1, 0),
    line(board, 0, 2, 1, -1),
    line(board, 1, 0, 0, 1),
    line(board, 2, 0, 0, 1)
  ].filter((r) => typeof r === 'boolean')[0]
