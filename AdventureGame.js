//to create a user prototype which will have three different variations, the unit, the ninja or the soldier
//start with a new game where you will select all of your details
///speed hightens the chance of taking your go again with double goes
//import { connect } from "http2";
// require('child_process').exec('start https://www.google.co.in/'); - USE FOR HYPERLINKING
//MAIN BOSS IS CALLED Cozuzu
const prompt = require("prompt-sync")({ sigint: true });
const allchar = []
const allenemies = []
const runArry = []
class character {
    constructor(name, fightstyle, level) {
        this.name = name;
        this.fightstyle = fightstyle;
        this.level = level;
        allchar.push(this);
        if (this.fightstyle === "ninja"){
            this.ninja()
        }else if (this.fightstyle === "unit"){
            this.unit()
        }else if (this.fightstyle === "soldier"){
            this.soldier()
        }else if (this.fightstyle === "enemy"){
            this.enemy()
        }else if(this.fightstyle === "lightenemy"){
            this.lightEnemy()
        }else if(this.fightstyle === "heavyenemy"){
            this.heavyEnemy()
    }else if (this.fightstyle === "bossenemy"){
            this.bossEnemy()
    }}
        
    callintroduction() {
        console.log(`Your character is ${this.name}, who has the fighting style ${this.fightstyle} with stats: Health ${this.health}, speed ${this.speed},power: ${this.power}!`);
    }
    bossEnemy(){
        this.health = 100
        this.speed = 70
        this.power = 45
        if (this.level > 1){
            for (let i = 1; i <= this.level; i++) {
                this.health += (i * 8)
            }
            for (let i = 1; i <= this.level; i++) {
                this.speed += (i * 6)
            }
            for (let i = 1; i <= this.level; i++) {
                this.power += (i * 5)
            }
    }
    }

    heavyEnemy(){
        this.health = 80
        this.speed = 60
        this.power = 35
        if (this.level > 1){
            for (let i = 1; i <= this.level; i++) {
                this.health += (i * 9)
            }
            for (let i = 1; i <= this.level; i++) {
                this.speed += (i * 3)
            }
            for (let i = 1; i <= this.level; i++) {
                this.power += (i * 4)
            }
    }
    allenemies.push(this)
}
    lightEnemy(){
        this.health = 60
        this.speed = 65
        this.power = 35
        if (this.level > 1){
            for (let i = 1; i <= this.level; i++) {
                this.health += (i * 6)
            }
            for (let i = 1; i <= this.level; i++) {
                this.speed += (i * 8)
            }
            for (let i = 1; i <= this.level; i++) {
                this.power += (i * 4)
            }
        }
        allenemies.push(this)
    }
    ninja() {
            this.health = 85,
            this.speed = 120,
            this.power = 40;
    }
    soldier() {
        this.health = 95;
        this.speed = 90;
        this.power = 50;
    }
    unit() {
        this.health = 120;
        this.speed = 70;
        this.power = 40;
    }
    enemy() {
        this.health = 70
        this.speed = 65
        this.power = 30
        if (this.level > 1){
            for (let i = 1; i <= this.level; i++) {
                this.health += (i * 8)
            }
            for (let i = 1; i <= this.level; i++) {
                this.speed += (i * 6)
            }
            for (let i = 1; i <= this.level; i++) {
                this.power += (i * 4)
            }
        }
        allenemies.push(this)

    }
    levelup() {
        this.level += 1;
        this.health += (this.level * 10);
        this.speed += (this.level * 8);
        this.power += (this.level * 5);
    }
    leveldown(){
        this.health -= ((this.level) * 10);
        this.speed -= ((this.level) * 8);
        this.power -= ((this.level) * 5)
        this.level -= 1
    }
    replenish() {
        if (this.fightstyle === "ninja") {
            this.ninja()
        } else if (this.fightstyle === "unit") {
            this.unit()
        } else if (this.fightstyle === "soldier") {
            this.soldier()
        }
        if (this.level > 1){
            for (let i = 1; i <= this.level; i++) {
                this.health += (i * 10)
            }
            for (let i = 1; i <= this.level; i++) {
                this.speed += (i * 8)
            }
            for (let i = 1; i <= this.level; i++) {
                this.power += (i * 5)
            }
        }
    }
    stats() {
        console.log(`${this.name}'s current level is level ${this.level} and your stats are the following: Health ${this.health}, speed ${this.speed},power: ${this.power}!`);
    }
    miniupgrade(){
        this.health += 20
    }
    mindowngrade(){
        this.health -= 20
    }
    healthpotion(){
        this.health = this.health * 1.5
    }
    minipowerupgrade(){
        this.power = this.power *1.2
    }
    powerupgrade(){
        this.powerup = 1
    }


}
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
    console.log("You will be user X, however the AI (user O) will always go first!")
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
        }else if ((board[2] === board[4]) && (board[4] === board[6]) && (board[2] !== "-")){
            winner = board[2]
            console.log(`${board[2]} wins!`)
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
    if (winner === userTictac){
      console.log (`${user.name} has won! Well done!`)
      user.levelup()
      user.stats()
    }else if (winner === aiTicTac){
    console.log("The Ai as won! You have now lost the game! YOU HAVE NOW BEEN TERMINATED!")
    runArry.push("You have lost!")
    playagain()
    }else{
      console.log("It was a draw! your stats will remain")
      user.stats()
    }
    }
    
      rungame(user)
    }

function fight(user,enemy){
    let run = true
    let rand = Math.floor(Math.random() * 2);
    function userattack(user,enemy){
        enemy.health -= user.power
        prompt(`You have inflicted ${user.power} damage to bring the openent down to ${enemy.health}, press any key to proceed`)}
    function enemyattack(user,enemy){
        user.health -= enemy.power
        prompt(`You have taken a hit which has dealt ${enemy.power} damage! This has decreased your health to ${user.health}! press any key to proceed.`)}
        if (rand === 0){
            while (run){
            userattack(user,enemy)
            if (enemy.health <= 0){
                run = false
                break
            }
            enemyattack(user,enemy)
            if (user.health <= 0){
                run = false
                break
            }}
        }else{
            while (run){
            enemyattack(user,enemy)
            if (user.health <= 0){
                run = false
                break
            } 
            userattack(user,enemy)
            if (enemy.health <= 0){
                run = false
                break 
    }}}

    if (user.health > enemy.health){
        user.replenish()
        user.levelup()
        prompt(`Congratulations! You have won the fight! Please press any key to see your new stats after levelling up!`)
        user.stats()
    }else{
        console.log("You have now lost the game! Thanks for playing and be better next time.")
        console.log(`Your runtime has finished, your character ${user.name} reached Rank ${user.level} as the class ${user.fightstyle}.`)
        playagain()
    }
}

function intro(user,enemy){
   user.stats()
   enemy.stats()
   let opening = true
   while (opening){
   console.log("Would you like to use A) speed attack (You will need to have 1.5x the speed of the enemy to perform successfully) , B) perform a light attack (80% power) or C) Power attack (You will need to have 1.25x the power of the enemy to perform successfully)")
   let attack = prompt(`Would you like to use A) speed attack , B) Light attack or C) Power attack`).toUpperCase()
   console.log("LET THE BATTLE COMMENCE!")
   if (attack === "A"){
       if (user.speed > (enemy.speed * 1.49)){
        enemy.health -= user.power *1.2
        console.log(`Your speed is high enough to inflict a speed attack which grants you 1.2x damage! your enemy is severely injured to ${enemy.health}!`)
        return fight(user,enemy)
       }else{
        user.health -= enemy.power * 1.2
        console.log(`You were too slow! Your health has dropped to ${user.health}`)
        return fight(user,enemy)
       }
   }else if (attack === "B"){
        enemy.health -= user.power * 0.8
        console.log(`Safe choice! You have inflicted a light attack which has dropped your enemies health to ${enemy.health}!`)
        return fight(user,enemy)
   }else if (attack === "C"){
    if (user.power > (enemy.power * 1.24)){
        enemy.health -= user.power *1.3
        console.log(`Your power is high enough to inflict a power attack which grants you 1.3x damage! your enemy is severely injured to ${enemy.health}!`)
        return fight(user,enemy)
       }else{
        user.health -= enemy.power * 1.2
        console.log(`You were too weak! Your health has dropped to ${user.health} from a counter attack from the enemy!`)
        return fight(user,enemy)
   }}else{
    attack = prompt ("This input is invalid, please strictly type A or B!!")
   }}
}
//Level9 - MINI BOSS BATTLE
function levelNine(user){
    console.log("You have now found the dreaded Mansion!!")
    prompt("Please press any key to see the mansion!")
    require('child_process').exec('start level9.html');
    console.log("You begin to walk towards the mansion and out of nowhere appears a Undead Knight protecting the mansion!")
    const knight = new character("UNDEADKNIGHT", "bossenemy",user.level)
    prompt("Press any key to see what the knight has to say!");
    require('child_process').exec('start knight.html');
    prompt("There is nothing you can do except fight the beast! press any key to proceed")
    intro(user,knight)
    if (runArry.length < 1){
        console.log("Well done you have Won!")
    }else{
        console.log("You have now lost the game!")
    }
}


//Level 8 = tictac toe mission
function levelEight(user){
    console.log("You have reached the entrance to the South! However, to get into the south you need a specific IQ! This game of Tictactoe will test this!")
    prompt("please press any key to see the entrance to the south!")
    require('child_process').exec('start gate.html');
    console.log("If you win the game you will get be levelled up! If not you will be terminated on the spot and If you draw you will be allowed through but not recieve any upgrades!")
    prompt("Press any key to proceed!")
    tictactoe(user)
    if (runArry.length < 1){
        console.log("Well done you have passed through the gates!")
        levelNine(user)
    }else{
        console.log("You have now lost the game!")
    }
}


function monsterlevel(user){
    let run = true
    console.log("You find an exit to the Cave which will take you south towards the mansion, but you see a creepy creature from a far! You start to approach creature, the creature jumps out of the shadows to Attack!")
    prompt("Press any key to see what the creature says!")
    require('child_process').exec('start monsterlevel.html');
    const monster = new character("monster","enemy",user.level+3)
    console.log(`The ${monster.name} is level ${monster.level} with the stats - Health : ${monster.health}, Speed : ${monster.speed} and Power : ${monster.power}!`)
    console.log("You have a few options! A) Battle the monster and try to defeat him with the odds stacked against you, B) Risk using a sneak assasination, but this will only work with certain Fightstyles or C) Run away!")
    while (run){
    let answer = prompt("Please select your letter").toUpperCase()
    if (answer === "A"){
        intro(user,monster)
        run = false
    }else if (answer === "B"){
            if (user.fightstyle === "ninja"){
                user.levelup()
                console.log(`Well done you have sneak attacked the Monster and killed him! Your level has gone up to ${user.level}!`)
                user.stats()
                run = false
            }else{
                console.log("THE MONSTER SAW YOUR ATTACK COMING AND RIPPED YOUR HEART OUT! YOU HAVE NOW DIED!")
                runArry.push(["Finish"])
                run = false
            }
    }else if (answer === "C"){
        console.log("You have ran away and avoided the monster! Lets hope you do not see him again!")
        run = false
    }else{
        console.log("Sorry, your input is not recognised please try again")
    }
    }
    if (runArry.length  < 1){
        console.log("Well done, you have escaped and are through to the next mission")
        levelEight(user)
    }


}

//LEVEL SEVEN
function levelSeven(user){
    user.minipowerupgrade()
    let run = true
    console.log(`After defeating the troll you have stolen his bone, This has boosted your power to ${user.power} for the next fight!`)
    prompt("You carry on walking towards the south and you approach a hidden cave! press any key to see the cave")
    require('child_process').exec('start Cave.html');
    prompt("You proceed to walk into the cave and find a lost puppy, press any key to see a picture of the puppy!")
    require('child_process').exec('start dog.html');
    console.log("You have two options A) to give the puppy the bone. B) Leave the puppy without the bone.")
    // TO CONTINUE DOING, NEED TO ADD TWO PAGES FOR EACH ANSWER!
    while (run){
    let answer = prompt("Please select your letter").toUpperCase()
    if (answer === "A"){
        user.replenish()
        user.powerupgrade()
        console.log(`You have now gave the Dog the bone, the dog is now Happy! However, your stats now drop to ${user.power}!`)
        run = false
    }else if (answer === "B"){
            console.log(`Your Stats have remained, however this may come back to bite you in the future!`)
            run = false
    }else{
        console.log("Sorry, this is invalid, please try again.")
    }
    }
    console.log("You stumble across a Wizard who has between watching you from a far. You approach the Wizard and tell him how you have been abducted and ask him for help!")
    prompt("Press any key to see his response")
    if (user.powerup === 1){
        user.power = user.power * 1.5
        require('child_process').exec('start level7.html');
        user.stats()
        user.powerup -= 1
    }else{
        require('child_process').exec('start level7bad.html');
        user.stats()
    }
    monsterlevel(user)
    //runArry.push("Finish")
}


//SIXTH LEVEL
function levelSix(user){
    console.log("You have now left the church and need to use your compass, you start heading south slowly and see a troll! He starts to approach you with a bone in his hand!")
    prompt("press any key to see picture of the troll.")
    const troll = new character("Troll","heavyenemy",user.level + 1)
    require('child_process').exec('start level6.html');
    console.log("You have no choice but to defend yourself!")
    prompt("Press any key to proceed to battle")
    intro(user,troll)
    if (runArry.length  < 1){
        levelSeven(user)
    }
    
    

}

function bonusLevel(user){
    prompt ("The bonus level is to kill a chicken and calf its heart for the potion, press any key to proceed!")
    let run = true
    const chicken = new character("Chicken", "unit", 1)
    intro(user,chicken)
    user.leveldown()
    console.log("Due to the chicken being such a low rank, your previous battle would not affect your stats or level, so you will be levelled down to the below: ")
    user.stats()
    prompt("Press any key to proceed.")
    console.log("Well done, you have killed the chicken! Your next task is to calve open the chicken without spilling the to get to its heart! Depending on the method used, will affect if you get the potion!")
    console.log("Will you: A) cut a line down the whole body, B) rip it a part or C) gently remove the skin to retrieve the heart!")
    while (run === true){
        let answer = prompt("Please select your letter.").toUpperCase()
        if (answer === "A"){
            console.log('OH NO YOU HAVE CUT THROUGH THE HEART!! YOU WILL NOT RECIEVE THE POTION!')
            run = false
        }else if (answer === "B"){
                console.log(`Not the smartest idea to use brute force, The heart has split!`)
                run = false
        }else if (answer === "C"){
            console.log("Good choice! This seems to have worked, lets take it back to the Witch.")
            user.powerupgrade()
            run = false
        }else{
            console.log("Sorry your input was not recognised, please strictly enter A or B or C")}   

}
prompt("please press any key to continue")

}

//FIFTH LEVEL
function levelFive(user){
console.log("You have climbed the stairs in the elevator shaft and find an exit! However, the exit leads you into an abandoned church! You find a witch making a potion.")
prompt("You tell her that you have been abducted and tell her you do not want to cause any trouble. Press any key to see her response.")
require('child_process').exec('start level5.html');
let run = true
    while (run === true){
        let help = prompt("Would you like to help her - A) yes, b) No ").toUpperCase()
        if (help === ("A") || help === "YES"){
            console.log("This will be a bonus level! once completed you will be gifted the magic potion")
            bonusLevel(user)
            run = false
            break
        }else if (help === "B" || help === "NO"){
            console.log("You will not help the witch and you will therefore not recieve the potion!")
            run = false
            break
        }else{
            console.log("Sorry, your input was not valid, please retype your outcome.")
        }
    }
    if (user.powerup > 0){
        user.healthpotion()
        user.powerup -= 1
        require('child_process').exec('start witchcorrect.html');
        prompt("Congratulations, please press any key to see your stats below going into the next battle!")
        user.stats()

    }else{
        require('child_process').exec('start witchincorrect.html');
        prompt("Better luck next time, please press any button to see your stats that will remain!")
        user.stats()
    }
    levelSix(user)
}

//FOURTH LEVEL
function levelFour (user){
    console.log(`You have now escaped the forest and defeated the ogre! You have now reached a tunnel that leads to the underground for food!`)
    console.log(`However, there are many many mutant rats in the undergrounds!!`)
    prompt("The rats are too dangerous to face! If faced you will be instantly killed! Please press any key to see the rat.")
    require('child_process').exec('start level4.html');
    prompt("please press any key to see the underground!")
    require('child_process').exec('start underground.html');
    console.log("You will have to hide! You see three spots avaiable to hide, please pick your choice! A) under the stairs, B) lying down beside the pipes, C) in the elevator shaft")
    let run = true
    while (run === true){
    let answer = prompt("Please select your letter.").toUpperCase()
    if (answer === "A"){
        console.log('Good choice! the rats have walked past but they have not noticed you!')
        user.miniupgrade()
        console.log(`You have also found some stale bread which has boosted your health temporarily by 20 points to ${user.health}!`)
        run = false
        if (runArry.length  < 1){
        levelFive(user)
    }
    }else if (answer === "B"){
            user.mindowngrade()
            console.log(`Not a bad choice! You have avoided the rats, but you still have no food and are very hungry! Your health has dropped by 20 points temporarily to ${user.health}!`)
            run = false
            if (runArry.length < 1){
                levelFive(user)
                }
    }else if (answer === "C"){
        let minirun = true
        while (minirun === true){
        let action = prompt("THE RATS HAVE SPOTTED YOU! DO YOU A) RUN OR B) STAY COMPLETELY STILL AND HOPE THEY DON'T GET YOU!").toUpperCase()
        if (action === "A"){
            console.log("YOUR SPEED WAS NO MATCH FOR THE RATS THEY HAVE EATEN YOU ALIVE!!")
            minirun = false
            console.log("GAME OVER!")
            console.log(`Your runtime has finished, your character ${user.name} reached Rank ${user.level} as the class ${user.fightstyle}.`)
            run = false
            playagain()
        }else if (action === "B"){
            console.log("They have not deemed you as a threat and passed you by with no caution! Well done!!")
            if (runArry.length < 1){
            levelFive(user)
            }
            minirun = false
            run = false
        }else{
            console.log("Sorry your input was not recognised, please strictly enter A or B")
        }  }
        run = false
    }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B or C")}
    
}}


//THIRD LEVEL
function levelThree(user){
    const ogre = new character("ogre","heavyenemy",user.level)
    let run = true
    console.log("Well done! You have done well to have defeated the zombie! But you are very tired and need to rest as it was a difficult battle!")
    console.log ("You now have two options, A) to build a hut and camp out overnight, however you will risk the chance of being sneak attacked! B) you can carry on walking throught the night, but your health will drop.")
    while (run === true){
    let answer = prompt("Please select your letter.").toUpperCase()
    if (answer === "A"){
        prompt("Risky choice! We will see how you survive through the night, please press any key to continue")
        let rand = Math.floor(Math.random() * 2);
        if (rand === 0){
            user.levelup()
            console.log(`Due to you having a great night sleep you have now levelled up! Please see your new stats below`)
            user.stats()
            console.log("After your long sleep you have found an ogre who is ready to battle!")
            run = false
        }else{
            user.health -= user.health * (0.2)
            console.log(`You have been Sneak attacked by an ogre! your health is now ${user.health}!`)
            run = false
        
            
        }
        }else if (answer === "B"){
            user.stats()
            user.health -= (user.health * 0.1)
            console.log(`You are very tired so your stats have dropped to ${user.health} for health!`)
            console.log("It is now morning and you have found an ogre!")
            run = false

        }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B")}
    
}
 prompt("Please press any key to see the ogre")
 require('child_process').exec('start level3.html');
 intro(user,ogre)
 if (runArry.length < 1){
 levelFour(user)
 }
}
//SECOND LEVEL 
function levelTwo(user){
    const zombie = new character("zombie","lightenemy",user.level+1)
    console.log(`You have just hydrated yourself and have found a ${zombie.name} that is level ${zombie.level} with the stats\n Health : ${zombie.health}, Speed ${zombie.speed} and Power ${zombie.power}!`)
    prompt("Please press any key to see how the fights will play out in the game!")
    require('child_process').exec('start fightsystem.html');
    prompt('A picture of the zombie will now appear in the browser! How will you approach this demon! Please click any key to see the Zombie.')
    require('child_process').exec('start level2.html');
    intro(user,zombie)
    if (runArry.length < 1){
    levelThree(user)
    }

}
// FIRST LEVEL
function levelOne(user){
    let run = true
    console.log(`welcome ${user.name} to your first mission! \n You have come across a jungle and you are in need of water.`)
    prompt ("The picture of the jungle will now appear in the browser. Please click any key to see the picture")
    require('child_process').exec('start level1.html');
    console.log("Please select one of the options below by selecting the correct letter")
    console.log("A)Go south towards the river where you will find dangerous species on the way. B) take the safe choice and find a water shelter")
    while (run === true){
    let answer = prompt("Please select your letter.").toUpperCase()
    if (answer === "A"){
        prompt("You have come across the snake on your adventure! We will see how you will deal with this. Please press any key to continue.")
        if (user.fightstyle === "ninja"){
            user.health += 20
            console.log(`Congratulations ${user.name}! As you picked the ninja fightstyle you have avoided the snake! You will recieve +20 health, your new health is ${user.health}`)
            run = false
            levelTwo(user)
        }else{
            user.health -= 20
            console.log(`The snake has noticed you and you have been bitten! Your health has decreased to ${user.health}`)
            run = false
            levelTwo(user)
        }
        }else if (answer === "B"){
            user.health += 5
            console.log(`You have taken the safe choice! Your health has gone up by 5 to ${user.health}!`)
            levelTwo(user)
            run = false

        }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B")}
    }}

function missionstatement(){
prompt("please click any key to see the mission statement for this game!")
require('child_process').exec('start mission.html');
}
//TO START THE NEW GAME!
function newgame(){
    let fightstyle;
    let name;
    let nameCheck = false
    let fightstyleCheck = false
    const fightstyleAvailable = [{num: 1,style : "unit"},{num : 2, style : "ninja"}, {num : 3, style : "soldier"}]
    while (nameCheck === false){
    name = prompt("please enter your name?")
    let happy = prompt(`Are you happy with the name ${name}? If you are happy, please type yes in lowercase`).toLowerCase()
    if (happy === "yes"){
        console.log(`Your name in the game will now be ${name}`)
        nameCheck = true
    }else{
        console.log("That's okay, please pick your name again ")
    }
}   
    console.log("please see fighting styles below!")
    console.log("1) The unit - grants extra health, but lower speed. 2) the ninja - grants high speed, but low health. 3) The soldier, who has slightly more damage, but slightly less speed and health")
    while (fightstyleCheck === false){
    fightstyle = prompt("Select the number of the fighting style you would like to be: 1,2 or 3?")
    fightstyle = parseInt(fightstyle)
    console.log(fightstyle)
        for (let i = 0; i < fightstyleAvailable.length;i++){
            for (key in fightstyleAvailable[i]){
                if (fightstyleAvailable[i].num === fightstyle){        
                    fightstyle = fightstyleAvailable[i][key]
                    let newHappy = prompt(`Are you sure you are happy picking the fightstyle ${fightstyleAvailable[i][key]}? please type yes to proceed.`).toLowerCase()
                    if (newHappy === "yes"){
                    fightstyleCheck = true
                }else{
                    break
                }}}
}
}
const user = new character(name,fightstyle,1)
console.log(`The name of your player is ${user.name}, with the fightstyle ${user.fightstyle}!`)
user.callintroduction()
missionstatement()
levelOne(user)
}  

function playagain(){
    let finish = false
    while (finish === false){
        let again = prompt("Would you like to start a new game? A) yes, B) No: ").toUpperCase()
        if (again === ("A") || again === "YES"){
            newgame()
            finish = true
            break
        }else if (again === "B" || again === "NO"){
            console.log("your game has now finished")
            runArry.push("FINISH")
            finish = true
            break
        }else{
            console.log("Sorry, your input was not valid, please retype your outcome.")
        }
    }

}
playagain()
//const dummy = new character("Dummy","ninja",6)
//dummy.replenish()
//levelNine(dummy)
//dummy.levelup()
//dummy.callintroduction()
