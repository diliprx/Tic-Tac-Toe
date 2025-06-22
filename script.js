
  const cells = document.querySelectorAll('.cell');
  const status = document.getElementById('status');
  const moveSound = document.getElementById('moveSound');
  const winSound = document.getElementById('winSound');
  const drawSound = document.getElementById('drawSound');

  let currentPlayer = 'X';
  let gameActive = true;

  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],  
    [0,3,6], [1,4,7], [2,5,8],  
    [0,4,8], [2,4,6]            
  ];

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      if (cell.textContent !== '' || !gameActive) return;
      cell.textContent = currentPlayer;
      moveSound.play();
      checkWinner();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      if (gameActive) status.textContent = `Player ${currentPlayer}'s Turn`;
    });
  });

  function checkWinner() {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent
      ) {
        gameActive = false;
        status.textContent = `Player ${cells[a].textContent} Wins!`;
        highlightWinner(pattern);
        winSound.play();
        return;
      }
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
      gameActive = false;
      status.textContent = `It's a Draw!`;
      drawSound.play();
    }
  }

  function highlightWinner(pattern) {
    pattern.forEach(index => {
      cells[index].classList.add('winner');
    });
  }

  function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('winner');
    });
    currentPlayer = 'X';
    gameActive = true;
    status.textContent = `Player X's Turn`;
  }

const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙 Switch to Dark Mode';
  } else {
    toggleBtn.textContent = '🌞 Switch to Light Mode';
  }
});


//   const cells = document.querySelectorAll('.cell');
//   const status = document.getElementById('status');
//   const moveSound = document.getElementById('moveSound');
//   const winSound = document.getElementById('winSound');
//   const drawSound = document.getElementById('drawSound');

//   let currentPlayer = 'X';
//   let gameActive = true;
//   let avatarX = 'cat.png';
//   let avatarO = 'fox.png';

//   const winPatterns = [
//     [0,1,2], [3,4,5], [6,7,8],
//     [0,3,6], [1,4,7], [2,5,8],
//     [0,4,8], [2,4,6]
//   ];

//   function getAvatar(player) {
//     return player === 'X' ? avatarX : avatarO;
//   }

//   function updateAvatarsFromSelection() {
//     avatarX = document.querySelector('input[name="avatarX"]:checked').value;
//     avatarO = document.querySelector('input[name="avatarO"]:checked').value;
//   }

//   updateAvatarsFromSelection();

//   document.querySelectorAll('input[name="avatarX"], input[name="avatarO"]').forEach(input => {
//     input.addEventListener('change', () => {
//       updateAvatarsFromSelection();
//       resetGame(); // restart if avatar changes
//     });
//   });

//   cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//       if (cell.children.length > 0 || !gameActive) return;

//       const img = document.createElement('img');
//       img.src = getAvatar(currentPlayer);
//       img.alt = currentPlayer;
//       cell.appendChild(img);

//       moveSound.play();
//       checkWinner();

//       if (gameActive) {
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         status.textContent = `Player ${currentPlayer}'s Turn`;
//       }
//     });
//   });

//   function checkWinner() {
//     for (let pattern of winPatterns) {
//       const [a, b, c] = pattern;
//       if (
//         cells[a].children.length > 0 &&
//         cells[a].children[0].alt === cells[b].children[0]?.alt &&
//         cells[a].children[0].alt === cells[c].children[0]?.alt
//       ) {
//         gameActive = false;
//         status.textContent = `Player ${cells[a].children[0].alt} Wins!`;
//         highlightWinner(pattern);
//         winSound.play();
//         return;
//       }
//     }

//     if ([...cells].every(cell => cell.children.length > 0)) {
//       gameActive = false;
//       status.textContent = `It's a Draw!`;
//       drawSound.play();
//     }
//   }

//   function highlightWinner(pattern) {
//     pattern.forEach(index => {
//       cells[index].classList.add('winner');
//     });
//   }

//   function resetGame() {
//     cells.forEach(cell => {
//       cell.innerHTML = '';
//       cell.classList.remove('winner');
//     });
//     currentPlayer = 'X';
//     gameActive = true;
//     status.textContent = `Player X's Turn`;
//   }



//   const cells = document.querySelectorAll('.cell');
//   const status = document.getElementById('status');
//   const moveSound = document.getElementById('moveSound');
//   const winSound = document.getElementById('winSound');
//   const drawSound = document.getElementById('drawSound');

//   let currentPlayer = 'X';
//   let gameActive = true;
//   let avatarX = '';
//   let avatarO = '';

//   const winPatterns = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
//   ];

//   // ✅ Picks correct avatar for each player
//   function getAvatar(player) {
//     return player === 'X' ? avatarX : avatarO;
//   }

//   // ✅ Get selected avatar URLs from radio buttons
//   function updateAvatarsFromSelection() {
//     const selectedX = document.querySelector('input[name="avatarX"]:checked');
//     const selectedO = document.querySelector('input[name="avatarO"]:checked');

//     if (selectedX) avatarX = selectedX.value;
//     if (selectedO) avatarO = selectedO.value;

//     console.log('Avatar X:', avatarX);
//     console.log('Avatar O:', avatarO);
//   }

//   // ✅ Initial call
//   updateAvatarsFromSelection();

//   // ✅ Re-run on change
//   document.querySelectorAll('input[name="avatarX"], input[name="avatarO"]').forEach(input => {
//     input.addEventListener('change', () => {
//       updateAvatarsFromSelection();
//       resetGame(); // optional
//     });
//   });

//   // ✅ Game logic
//   cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//       if (cell.children.length > 0 || !gameActive) return;

//       const img = document.createElement('img');
//       img.src = getAvatar(currentPlayer);
//       img.alt = currentPlayer;

//       // fallback if image breaks
//       img.onerror = () => {
//         img.remove();
//         cell.textContent = currentPlayer;
//       };

//       cell.appendChild(img);
//       moveSound.play();
//       checkWinner();

//       if (gameActive) {
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         status.textContent = `Player ${currentPlayer}'s Turn`;
//       }
//     });
//   });

//   function checkWinner() {
//     for (let pattern of winPatterns) {
//       const [a, b, c] = pattern;
//       if (
//         cells[a].children.length > 0 &&
//         cells[a].children[0].alt === cells[b].children[0]?.alt &&
//         cells[a].children[0].alt === cells[c].children[0]?.alt
//       ) {
//         gameActive = false;
//         status.textContent = `Player ${cells[a].children[0].alt} Wins!`;
//         highlightWinner(pattern);
//         winSound.play();
//         return;
//       }
//     }

//     if ([...cells].every(cell => cell.children.length > 0)) {
//       gameActive = false;
//       status.textContent = `It's a Draw!`;
//       drawSound.play();
//     }
//   }

//   function highlightWinner(pattern) {
//     pattern.forEach(index => {
//       cells[index].classList.add('winner');
//     });
//   }

//   function resetGame() {
//     cells.forEach(cell => {
//       cell.innerHTML = '';
//       cell.classList.remove('winner');
//     });
//     currentPlayer = 'X';
//     gameActive = true;
//     status.textContent = `Player X's Turn`;
//   }

// const cells = document.querySelectorAll('.cell');
// const status = document.getElementById('status');
// const moveSound = document.getElementById('moveSound');
// const winSound = document.getElementById('winSound');
// const drawSound = document.getElementById('drawSound');

// let currentPlayer = 'X';
// let gameActive = true;
// let avatarX = '';
// let avatarO = '';

// const winPatterns = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
//   [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
//   [0, 4, 8], [2, 4, 6]              // diagonals
// ];

// // Get avatar URL for player
// function getAvatar(player) {
//   return player === 'X' ? avatarX : avatarO;
// }

// // Update avatarX and avatarO from selected radio inputs
// function updateAvatarsFromSelection() {
//   const selectedX = document.querySelector('input[name="avatarX"]:checked');
//   const selectedO = document.querySelector('input[name="avatarO"]:checked');

//   if (selectedX) avatarX = selectedX.value;
//   if (selectedO) avatarO = selectedO.value;

//   console.log("Avatar X:", avatarX);
//   console.log("Avatar O:", avatarO);
// }

// // Initial avatar load
// updateAvatarsFromSelection();

// // Listen for avatar changes
// document.querySelectorAll('input[name="avatarX"], input[name="avatarO"]').forEach(input => {
//   input.addEventListener('change', () => {
//     updateAvatarsFromSelection();
//     resetGame(); // restart game if avatar changed
//   });
// });

// // Add click listener for each cell
// cells.forEach(cell => {
//   cell.addEventListener('click', () => {
//     if (!gameActive || cell.children.length > 0) return;

//     const avatarURL = getAvatar(currentPlayer);
//     console.log(`Rendering avatar for ${currentPlayer}:`, avatarURL);

//     const img = document.createElement('img');
//     img.src = avatarURL;
//     img.alt = currentPlayer;
//     img.onerror = () => {
//       img.remove();
//       cell.textContent = currentPlayer; // fallback to text
//     };
//     img.classList.add('avatar');
//     cell.appendChild(img);

//     moveSound?.play();

//     checkWinner();

//     if (gameActive) {
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//       status.textContent = `Player ${currentPlayer}'s Turn`;
//     }
//   });
// });

// function checkWinner() {
//   for (let pattern of winPatterns) {
//     const [a, b, c] = pattern;
//     if (
//       cells[a].children.length > 0 &&
//       cells[b].children.length > 0 &&
//       cells[c].children.length > 0 &&
//       cells[a].children[0].alt === cells[b].children[0].alt &&
//       cells[a].children[0].alt === cells[c].children[0].alt
//     ) {
//       gameActive = false;
//       status.textContent = `Player ${cells[a].children[0].alt} Wins!`;
//       highlightWinner(pattern);
//       winSound?.play();
//       return;
//     }
//   }

//   if ([...cells].every(cell => cell.children.length > 0)) {
//     gameActive = false;
//     status.textContent = `It's a Draw!`;
//     drawSound?.play();
//   }
// }

// function highlightWinner(pattern) {
//   pattern.forEach(index => {
//     cells[index].classList.add('winner');
//   });
// }

// function resetGame() {
//   cells.forEach(cell => {
//     cell.innerHTML = '';
//     cell.classList.remove('winner');
//   });
//   currentPlayer = 'X';
//   gameActive = true;
//   status.textContent = `Player X's Turn`;
// }
