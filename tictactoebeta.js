//CREATE A GAME OF TICTAC TOE WITH A RANDOM AI
//FIRST CREATE THE BOARD
//create two players
//
function tictactoe (user){
let winner;
let goesCounter = 0
const userTictac = "X"
const aiTicTac = "O"
const aiNums = []
const userNums = []
const prompt = require("prompt-sync")({ sigint: true });
const board = ["-","-","-",
               "-","-","-",
               "-","-","-"]



function tictacIntro(user){
console.log("Your board will look like the below - please use this for reference numbers \n [0],[1],[2]\n [3],[4],[5]\n [6],[7],[8]")
console.log(board)
console.log("You will need to pick your numbers accordingly to win the game!")
console.log("You will be user X!")
}

function userturn(user){
    let run = true
    while (run){
    let userInput = prompt("Please pick a number from 0-8!")
    userInput = parseInt(userInput)
    
    if (userInput > 8 || userInput < 0 || isNaN(userInput)){
        console.log("please select a new number that is between 0 and 8!!!")
    }else if (board[userInput] !== "-"){
        console.log("This space has already been taken! Please try a different one!")
    }else{
        board.splice(userInput,1,userTictac)
        userNums.push(userInput)
        run = false
    }
    }
console.log(board)
goesCounter +=1
}

function aiTurn(){
    let run = true
    while (run){
    let aiInput = Math.floor(Math.random() * 89)
    if (board[aiInput] === "-"){
        board.splice(aiInput,1,aiTicTac)
        aiNums.push(aiInput)
        run = false
    
}
}
console.log(board)
goesCounter += 1
}

  function isSolved() {
    //const solutions = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[6,7,8]] 
      if ((board[0] === board[1]) && (board[1] === board[2]) && (board[0] !== "-")){
        winner = board[0]
        console.log(`${board[0]} wins!`)
        goesCounter = 9
      }else if ((board[0] === board[3]) && (board[3] === board[6]) && (board[0] !== "-")){
        winner = board[0]
        console.log(`${board[0]} wins!`)
        goesCounter = 9
     }else if ((board[0] === board[4]) && (board[4] === board[8]) && (board[0] !== "-")){
      winner = board[0]
      console.log(`${board[0]} wins!`)
      goesCounter = 9
     }else if ((board[1] === board[4]) && (board[4] === board[7]) && (board[1] !== "-")){
      winner = board[1]
      console.log(`${board[1]} wins!`)
      goesCounter = 9
    }else if ((board[2] === board[5]) && (board[5] === board[8]) && (board[2] !== "-")){
      winner = board[2]
      console.log(`${board[2]} wins!`)
      goesCounter = 9
    }else if ((board[3] === board[4]) && (board[4] === board[5]) && (board[3] !== "-")){
      winner = board[3]
      console.log(`${board[3]} wins!`)
      goesCounter = 9
    }else if ((board[6] === board[7]) && (board[7] === board[8]) && board[6] !== "-"){
      winner = board[6]
      console.log(`${board[6]} wins!`)
      goesCounter = 9
    }
    let dashCount = 0;
    for (let i = 0; i < board.length;i++){
      if (board[i] !== "-"){
      dashCount +=1
      }
    }
    if (dashCount === 9){
      goesCounter = 9
    }
  
    }

   function rungame(user){
    tictacIntro()
    while (goesCounter < 9){
        aiTurn()
        isSolved()
        if (goesCounter === 9){
          break
        }
        userturn(user)
        isSolved()
        if (goesCounter === 9){
          break
        }
    }
if (winner ===userTictac){
  console.log ("User tictac won")
}else if (winner === aiTicTac){
console.log("The ")
}else{
  console.log("It was a draw!")
}
}

  rungame(user)
}
const user = "lol"
tictactoe(user)
 // console.log((board[0] === board[1]) && (board [1]=== board[2]))
  //console.log(board[0])
 // console.log(board[1])
  //console.log(board[2])