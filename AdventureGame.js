//to create a user prototype which will have three different variations, the unit, the ninja or the soldier
//start with a new game where you will select all of your details
///speed hightens the chance of taking your go again with double goes
//import { connect } from "http2";
// require('child_process').exec('start https://www.google.co.in/'); - USE FOR HYPERLINKING
const prompt = require("prompt-sync")({ sigint: true });
const allchar = []
const allenemies = []
class character {
    constructor(name, fightstyle, level) {
        this.name = name;
        this.fightstyle = fightstyle;
        this.level = level;
        allchar.push(this);
    }
    callintroduction() {
        console.log(`Your character is ${this.name}, who has the fighting style ${this.fightstyle} with stats: Health ${this.health}, speed ${this.speed},power: ${this.power}!`);
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
        this.health = 50 + (this.level * 10);
        this.speed = 40 + (this.level * 8);
        this.power = 25 + (this.level * 5);
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
    restore() {
        this.health += ((this.level-1) * 10);
    }
    replenish() {
        if (this.fightstyle === "ninja") {
            this.health = 85;
        } else if (this.fightstyle === "unit") {
            this.health = 120;
        } else if (this.fightstyle === "soldier") {
            this.health = 95;
        }
        for (let i = 0; i < this.level; i++) {
            this.restore();
        }

    }
    stats() {
        console.log(`${this.name}'s current level is level ${this.level} and your stats are the following: Health ${this.health}, speed ${this.speed},power: ${this.power}!`);
    }
    miniupgrade(){
        this.health += 50
    }
    mindowngrade(){
        this.health -= 20
    }
    healthpotion(){
        this.health = this.health * 1.5
    }
}

function fight(user,enemy){
    console.log("WATCH THE FIGHT COMMENCE!!")
    let run = true
    while (run){
        enemy.health -= user.power
        prompt(`You have inflicted ${user.power} damage to bring the openent down to ${enemy.health}, press any key to proceed`)
        if (enemy.health < 0){
            run = false
            break
        }
        user.health -= enemy.power
        prompt(`You have taken a hit which has dealt ${enemy.power} damage! This has decreased your health to ${user.health}! press any key to proceed.`)
        if (user.health < 0){
            run = false
        }
    }
    if (user.health > enemy.health){
        user.replenish()
        user.levelup()
        prompt(`Congratulations! You have won the fight! Please press any key to see your new stats after levelling up!`)
        user.stats()
    }else{
        console.log("You have now lost the game! Thanks for playing and be better next time. ")
        playagain(user)
    }
}

function intro(user,enemy){
   user.stats()
   enemy.stats()
   let opening = true
   while (opening){
   let attack = prompt(`Would you like to use A) speed attack, B) regular attack`).toUpperCase()
   if (attack === "A"){
       if (user.speed > (enemy.speed * 1.5)){
        enemy.health -= user.power *1.5
        console.log(`Your speed is high enough to inflict a speed attack which grants you 1.5x damage! your enemy is severely injured to ${enemy.health}!`)
        return fight(user,enemy)
       }else{
        user.health -= enemy.power * 1.5
        console.log(`You were too slow! Your health has dropped to ${user.health}`)
        return fight(user,enemy)
       }
   }else if (attack === "B"){
        return fight(user,enemy)
   }
    attack = prompt ("This input is invalid, please strictly type A or B!!")
   }
}

function bonusLevel(user){
    prompt ("The bonus level is to kill a chicken and calf its meat for the potion, press any key to proceed!")
    let run = true
    const chicken = new character("Chicken", "unit", 0.5)
    chicken.enemy()
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
            user.powerup = 0
            run = false
        }else if (answer === "B"){
                console.log(`Not the smartest idea to use brute force, The heart has split!`)
                user.powerup = 0
                run = false
        }else if (answer === "C"){
            console.log("Good choice! This seems to have worked, lets take it back to the Witch.")
            user.powerup = 1
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
        console.log(user.powerup)
        require('child_process').exec('start witchcorrect.html');
        prompt("Congratulations, please press any key to see your stats below going into the next battle!")
        user.stats()
    }else{
        require('child_process').exec('start witchincorrect.html');
        prompt("Better luck next time, please press any button to see your stats that will remain!")
        user.stats()
    }
}

//FOURTH LEVEL
function levelFour (user){
    let run = true
    console.log(`You have now escaped the forest and defeated the ogre! You have now reached a tunnel that leads to the underground for food!`)
    console.log(`However, there are many many mutant rats in the undergrounds!!`)
    prompt("The rats are too dangerous to face! If faced you will be instantly killed! Please press any key to see the rat.")
    require('child_process').exec('start level4.html');
    prompt("please press any key to see the underground!")
    require('child_process').exec('start underground.html');
    console.log("You will have to hide! You see three spots avaiable to hide, please pick your choice! A) under the stairs, B) lying down beside the pipes, C) in the elevator shaft")
    while (run === true){
    let answer = prompt("Please select your letter.").toUpperCase()
    if (answer === "A"){
        console.log('Good choice! the rats have walked past but they have not noticed you!')
        user.miniupgrade()
        console.log(`You have also found some stale bread which has boosted your health temporarily by 50 points to ${user.health}!`)
        run = false
        levelFive(user)
    }else if (answer === "B"){
            user.mindowngrade()
            console.log(`Not a bad choice! You have avoided the rats, but you still have no food and are very hungry! Your health has dropped by 20 points temporarily to ${user.health}!`)
            run = false
            levelFive(user)
    }else if (answer === "C"){
        let minirun = true
        while (minirun === true){
        let action = prompt("THE RATS HAVE SPOTTED YOU! DO YOU A) RUN OR B) STAY COMPLETELY STILL AND HOPE THEY DON'T GET YOU!").toUpperCase()
        if (action === "A"){
            console.log("YOUR SPEED WAS NO MATCH FOR THE RATS THEY HAVE EATEN YOU ALIVE!!")
            minirun = false
            console.log("GAME OVER!")
            playagain(user)
        }else if (action === "B"){
            console.log("They have not deemed you as a threat and passed you by with no caution! Well done!!")
            levelFive(user)
            minirun = false
        }else{
            console.log("Sorry your input was not recognised, please strictly enter A or B")
        }  }
        run = false
    }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B or C")}
    
}}


//THIRD LEVEL
function levelThree(user){
    const ogre = new character("ogre","unit",4)
    ogre.enemy()
    let run = true
    console.log("Well done! You have done well to have defeated the zombie! But you are very tired and need to rest as it was a difficult battle!")
    console.log ("You now have two options, A) to build a hut and camp out overnight, however you will risk the chance of being sneak attacked! B) you can carry on walking throught the night, but your health and speed will drop.")
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
            user.speed -= user.speed *(0.2)
            console.log(`You have been Sneak attacked by an ogre! your health is now ${user.health} and your speed is now ${user.speed}!`)
            run = false
        
            
        }
        }else if (answer === "B"){
            user.stats()
            user.health -= (user.health * 0.1)
            user.speed -= (user.speed *0.1)
            console.log(`You are very tired so your stats have dropped to ${user.health} for health and ${user.speed} for speed !`)
            console.log("It is now morning and you have found an ogre!")
            run = false

        }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B")}
    
}
 prompt("Please press any key to see the ogre")
 require('child_process').exec('start level3.html');
 intro(user,ogre)
 levelFour(user)
}
//SECOND LEVEL 
function levelTwo(user){
    const zombie = new character("zombie","soldier",2)
    zombie.enemy()
    console.log(`You have just hydrated yourself and have found a ${zombie.name} that is level ${zombie.level} with the stats\n Health : ${zombie.health}, Speed ${zombie.speed} and Power ${zombie.power}!`)
    prompt('A picture of the zombie will now appear in the browser! How will you approach this demon! Please click any key to see the Zombie.')
    require('child_process').exec('start level2.html');
    intro(user,zombie)
    levelThree(user)

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
if (user.fightstyle === "ninja"){
    user.ninja()
}else if (user.fightstyle === "unit"){
    user.unit()
}else if (user.fightstyle === "soldier"){
    user.soldier()
}
user.callintroduction()
missionstatement()
levelOne(user)
}  

function playagain(user){
    let run = true
    console.log(`Your runtime has finished, your character ${user.name} reached Rank ${user.level} as the class ${user.fightstyle}.`)
    while (run === true){
        let again = prompt("Would you like to play again? A) yes, B) No: ").toUpperCase()
        if (again === ("A") || again === "YES"){
            newgame()
            run = false
            break
        }else if (again === "B" || again === "NO"){
            console.log("your game has now finished!")
            run = false
            break
        }else{
            console.log("Sorry, your input was not valid, please retype your outcome.")
        }
    }

}
newgame()
