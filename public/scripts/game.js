const game = {}

game.x_mark = 'x';
game.cir_mark = 'cir';
game.player;
game.cpu;
game.mark;


game.startGame = () => {
   game.mark = false;
   game.gameBoard();
}

game.restartGame = () => {
   if (document.querySelector('#main-body')) {
      const mainDiv = document.querySelector('#main-body');
      mainDiv.classList.remove(game.x_mark);
      mainDiv.classList.remove(game.cir_mark);
      const boardSets = document.querySelectorAll('.boardSet');
      for (boardSet of boardSets) {
         boardSet.classList.remove(game.x_mark);
         boardSet.classList.remove(game.cir_mark);
      }
      const message = document.getElementById('message');
      message.classList.remove('show');
      game.startGame();
      if (document.querySelector('#game-display .game-message').innerText != 'You VS Me') {
         setTimeout(() => {
            if (document.querySelector('#game-display')) {
               const message = document.querySelector('#game-display .game-message');
               message.innerText = '';
               message.innerText = 'You VS Me!'
            }
         }, 10000);
      }
   }
};

game.gameBoard = () => {
   const waitTime = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
   if (document.querySelector('#main-body')) {
      const mainDiv = document.querySelector('#main-body');
      mainDiv.classList.remove(game.x_mark);
      mainDiv.classList.remove(game.cir_mark);
      if (game.mark) {
         mainDiv.classList.add(game.cir_mark);
         setTimeout(() => {
            cpu.checkAndRespond();
         }, waitTime);
      } else {
         mainDiv.classList.add(game.x_mark);
      }
   }
}

game.checkDraw = () => {
   const allCells = ['tFirst', 'mFirst', 'bFirst', 'tSecond', 'mSecond', 'bSecond', 'tThird', 'mThird', 'bThird'];
   let i = 0;
   for (cell of allCells) {
      const thisCell = document.getElementById(cell);
      if (thisCell.classList[1]) {
         i++;
         if (i == 9) {
            const message = document.getElementById('winner');
            const reset = document.getElementById('message');
            message.innerText = "We Have A Draw!"
            reset.classList.add('show');
            return;
         }
      }
   }
   game.changeTurns();
   game.gameBoard();
}

game.checkWin = (thisMark) => {
   game.winningComb = [
      ['tFirst', 'tSecond', 'tThird'],
      ['mFirst', 'mSecond', 'mThird'],
      ['bFirst', 'bSecond', 'bThird'],
      ['tFirst', 'mFirst', 'bFirst'],
      ['tSecond', 'mSecond', 'bSecond'],
      ['tThird', 'mThird', 'bThird'],
      ['tFirst', 'mSecond', 'bThird'],
      ['tThird', 'mSecond', 'bFirst']
   ];
   for (groups of game.winningComb) {
      let i = 0;
      for (cell of groups) {
         const cellSet = document.getElementById(cell);
         console.log(cellSet);
         if (cellSet.classList[1] == thisMark) {
            i++
            if (i == 3) {
               const message = document.getElementById('winner');
               const reset = document.getElementById('message');
               const winner = thisMark == 'x' ? 'X' : "O";
               cpu.addScore(winner);
               message.innerText = winner + " Wins!"
               reset.classList.add('show');
               return;
            }
         }
      }
   }
   game.checkDraw();
}

game.changeMark = (id) => {
   const check = document.getElementById(id);
   if (check.classList.length > 1) {
      return;
   }
   const currentMark = game.mark ? game.cir_mark : game.x_mark;
   check.classList.add(currentMark);
   game.checkWin(currentMark);
}

game.changeTurns = () => {
   game.mark = !game.mark;
}

game.display = () => {
   const header = [{
      main: 'header',
      type: 'div',
      id: 'game-display',
      cn: 'show-time'
   }, {
      main: '#game-display',
      type: 'div',
      cn: 'game-title',
      text: 'Tic-Tac-Toe'
   }, {
      main: '#game-display',
      type: 'div',
      cn: 'game-message',
      text: 'You VS Me'
   }];
   const display = [{
      main: 'main',
      type: 'div',
      id: 'display'
   }, {
      main: '#display',
      type: 'div',
      id: 'user'
   }, {
      main: '#display',
      type: 'div',
      id: 'board'
   }, {
      main: '#display',
      type: 'div',
      id: 'me'
   }, {
      main: '#board',
      type: 'div',
      id: 'main-body',
      cn: 'main'
   }];
   const createBoard = ['tFirst', 'tSecond', 'tThird', 'mFirst', 'mSecond', 'mThird', 'bFirst', 'bSecond', 'bThird'];
   const fillBoard = [];
   for (const board of createBoard) {
      const doneBoard = {
         main: '#main-body',
         type: 'div',
         cn: 'boardSet',
         id: board
      };
      fillBoard.push(doneBoard);
   }
   const resetButt = [{
      main: '#main-body',
      type: 'div',
      id: 'message'
   }, {
      main: '#message',
      type: 'div',
      id: 'winner'
   }, {
      main: '#message',
      type: 'button',
      text: 'Restart',
      id: 'restart'
   }];
   const player = [{
      main: '#user',
      type: 'div',
      cn: 'game-title'
   }, {
      main: '#user .game-title',
      type: 'h3',
      text: 'You'
   }, {
      main: '#user',
      type: 'h1',
      text: '0',
      cn: 'score'
   }];
   const me = [{
      main: '#me',
      type: 'div',
      cn: 'game-title'
   }, {
      main: '#me .game-title',
      type: 'h3',
      text: 'I Play To Win'
   }, {
      main: '#me .game-title',
      type: 'h1',
      text: '0',
      cn: 'score'
   }];
   app.loadUp(header);
   app.loadUp(display);
   app.loadUp(fillBoard);
   app.loadUp(resetButt);
   app.loadUp(player);
   app.loadUp(me);
   app.renameTitle('Game Page');
   part.footer('Game Page');
}

game.init = () => {
   game.display();
   if (document.querySelector('#main-body')) {
      const mainDiv = document.querySelector('#main-body');
      mainDiv.addEventListener("click", function(e) {
         if (e.target.id == "main-body" || e.target.id == "restart" || e.target.id == "winner") {
            return;
         }
         if (!game.mark) {
            game.changeMark(e.target.id);
         }
      });
      if (document.getElementById('restart')) {
         const restartButton = document.getElementById('restart');
         restartButton.addEventListener("click", game.restartGame);
      }
      game.startGame();
   }
}
