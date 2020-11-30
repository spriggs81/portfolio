const cpu = {};

cpu.addScore = (win) => {
   let playerScore = Number(document.querySelector('#user .score').innerText);
   let cpuScore = Number(document.querySelector('#me .score').innerText);
   if (win == 'X') {
      playerScore += 1;
      document.querySelector('#user .score').innerText = playerScore;
      cpu.letsTalk('lost');
   }
   if (win == 'O') {
      cpuScore += 1;
      document.querySelector('#me .score').innerText = cpuScore;
      cpu.letsTalk('win');
   }
   game.player = playerScore;
   game.cpu = cpuScore;
   return game;
};

cpu.checkAndRespond = () => {
   cpu.checkLoad('x', (win, cell) => {
      if (win && cell) {
         game.changeMark(cell);
      } else {
         game.changeMark(cell);
      }
   });
};

cpu.checkLoad = (player, cb) => {
   const playerPlace = [];
   const otherPlayerPlace = [];
   const openSpots = [];
   for (cell of document.querySelectorAll('.boardSet')) {
      const list = cell.classList.value;
      if (list.indexOf(player) > -1) {
         playerPlace.push(cell.id);
      }
      if (cell.classList[1] != player && cell.classList[1] != null) {
         otherPlayerPlace.push(cell.id);
      }
      if (cell.classList[1] == null) {
         openSpots.push(cell.id);
      }
   }
   const takeWin = cpu.canCpuWin(openSpots, otherPlayerPlace);
   const checkPlayer = cpu.checkPlayerPossibleWin(openSpots, playerPlace);
   if (takeWin) {
      cb(false, takeWin);
   }
   if (!takeWin && checkPlayer) {
      cb(true, checkPlayer);
   }
   if (!takeWin && !checkPlayer) {
      const selectPlay = cpu.pickMove(openSpots, otherPlayerPlace);
      cb(false, selectPlay);
   }
};

cpu.pickMove = (openSpots, otherPlayerPlace) => {
   if (openSpots.indexOf('mSecond') > -1) {
      return 'mSecond';
   }
   for (group of game.winningComb) {
      let i = 0;
      for (cell of group) {
         if (openSpots.indexOf(cell) > -1 || otherPlayerPlace.indexOf(cell) > -1) {
            i++;
            if (i === 3) {
               for (newCell of group) {
                  if (openSpots.indexOf(newCell) > -1) {
                     return newCell;
                  }
               }
            }
         }
      }
   }
   return openSpots[1];
};

cpu.checkPlayerPossibleWin = (openSpots, playerPlace) => {
   const prob = ['tSecond', 'mThird', 'bSecond'];
   if (playerPlace.length == 1) {
      console.log("it's me");
      for (problem of prob) {
         console.log("it's me agin\n\t", problem);

         if (playerPlace.indexOf(problem) > -1) {
            console.log("it's me again agin");
            const answer = problem == 'bSecond' ? 'bThird' : 'tThird';
            console.log(answer);
            return answer;
         }
      }
   }
   for (group of game.winningComb) {
      let i = 0,
         j = 0,
         take = false;
      for (cell of group) {
         if (playerPlace.indexOf(cell) > -1) {
            i++
         }
         if (openSpots.indexOf(cell) > -1) {
            j++
            take = cell;
         }
         if (i == 2 && j == 1) {
            console.log('still here');
            return take;
         }
      }
   }
};

cpu.canCpuWin = (openSpots, otherPlayerPlace) => {
   for (group of game.winningComb) {
      let i = 0,
         j = 0,
         take = false;
      for (cell of group) {
         if (otherPlayerPlace.indexOf(cell) > -1) {
            i++
         }
         if (openSpots.indexOf(cell) > -1) {
            j++
            take = cell;
         }
         if (i == 2 && j == 1) {
            return take;
         }
      }
   }
};

cpu.letsTalk = (mood) => {
   const userWins = ['Okay, I have to say it "You got some skills!"', 'What? You won!  How in the world!', 'No way, I want a rematch!', 'I see!  This is why you make the big bucks...', 'This is not the last time you hear the name "JOHN"...'];
   const cpuWins = ['Well, I do play to win.', 'So taking a lost is working too.', 'Didn\'t we bet for the position?  Pretty sure we did!', 'Wow I won, logic wins!', 'You can contact me now, unless you want to take another lost!'];
   const randomness = Math.floor(Math.random() * Math.floor(5));
   const message = document.querySelector('#game-display .game-message');
   message.innerText = '';
   if (mood == 'lost') {
      message.innerText = userWins[randomness];
   }
   if (mood == 'win') {
      message.innerText = cpuWins[randomness];
   }
};
