const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

// Game state
let playerSymbol = null;
let computerSymbol = null;
let difficulty = null;
let board = Array(9).fill(null); // tracks each cell: null | "X" | "O"
let gameOver = false;

// ===== Setup =====

const chooseSymbol = symbol => {
  playerSymbol = symbol;
  computerSymbol = symbol === "X" ? "O" : "X";

  document.getElementById("symbolPicker").classList.add("hidden");
  document.getElementById("difficultyPicker").classList.remove("hidden");
};

const chooseDifficulty = level => {
  difficulty = level;

  document.getElementById("difficultyPicker").classList.add("hidden");
  document.getElementById("board").classList.remove("hidden");
  document.getElementById("status").classList.remove("hidden");
  document.getElementById("status").textContent = `Your turn (${playerSymbol})`;
};

// ===== Player Move =====

const playerMove = index => {
  if (gameOver || board[index]) return;

  makeMove(index, playerSymbol);

  if (gameOver) return;

  // Small delay so the player sees their move before the computer responds
  setTimeout(computerMove, 300);
};

// ===== Computer Move =====

const computerMove = () => {
  if (gameOver) return;

  const move = difficulty === "hard" ? bestMove() : randomMove();
  makeMove(move, computerSymbol);
};

// Easy: pick a random empty cell
const randomMove = () => {
  // Use reduce to collect all empty cell indices
  const emptyCells = board.reduce((acc, cell, i) => {
    if (!cell) acc.push(i);
    return acc;
  }, []);

  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

// Hard: minimax algorithm — never loses
const bestMove = () => {
  let best = -Infinity;
  let move = null;

  board.forEach((cell, i) => {
    if (!cell) {
      board[i] = computerSymbol;
      const score = minimax(board, false);
      board[i] = null;

      if (score > best) {
        best = score;
        move = i;
      }
    }
  });

  return move;
};

const minimax = (boardState, isMaximizing) => {
  const winner = getWinner(boardState);
  if (winner === computerSymbol) return 10;
  if (winner === playerSymbol) return -10;
  if (boardState.every(cell => cell)) return 0; // tie

  if (isMaximizing) {
    let best = -Infinity;
    boardState.forEach((cell, i) => {
      if (!cell) {
        boardState[i] = computerSymbol;
        best = Math.max(best, minimax(boardState, false));
        boardState[i] = null;
      }
    });
    return best;
  } else {
    let best = Infinity;
    boardState.forEach((cell, i) => {
      if (!cell) {
        boardState[i] = playerSymbol;
        best = Math.min(best, minimax(boardState, true));
        boardState[i] = null;
      }
    });
    return best;
  }
};

// ===== Core Logic =====

const makeMove = (index, symbol) => {
  board[index] = symbol;
  const cell = document.getElementById(`cell-${index}`);
  cell.textContent = symbol;
  cell.classList.add(symbol === playerSymbol ? "player" : "computer");

  checkOutcome();
};

const checkOutcome = () => {
  const winner = getWinner(board);

  if (winner) {
    const msg = winner === playerSymbol ? "You win! 🎉" : "Computer wins! 🤖";
    endGame(msg);
    return;
  }

  // Use every() to check for a tie — all cells filled, no winner
  if (board.every(cell => cell)) {
    endGame("It's a tie! 🤝");
    return;
  }

  // Update status for next turn
  const isPlayerTurn =
    board.filter(Boolean).length % 2 === (playerSymbol === "X" ? 0 : 1);
  document.getElementById("status").textContent = isPlayerTurn
    ? `Your turn (${playerSymbol})`
    : `Computer is thinking...`;
};

const getWinner = boardState =>
  winCombos.reduce((winner, [a, b, c]) => {
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
    return winner;
  }, null);

const endGame = message => {
  gameOver = true;
  document.getElementById("status").textContent = message;
  document.getElementById("restartBtn").classList.remove("hidden");

  // Disable all cells
  document
    .querySelectorAll(".cell")
    .forEach(cell => (cell.style.pointerEvents = "none"));
};

// ===== Restart =====

const restartGame = () => {
  board = Array(9).fill(null);
  gameOver = false;
  playerSymbol = null;
  computerSymbol = null;
  difficulty = null;

  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
    cell.className = "cell";
    cell.style.pointerEvents = "auto";
  });

  document.getElementById("board").classList.add("hidden");
  document.getElementById("status").classList.add("hidden");
  document.getElementById("restartBtn").classList.add("hidden");
  document.getElementById("symbolPicker").classList.remove("hidden");
};
