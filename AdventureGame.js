//to create a user prototype which will have three different variations, the unit, the ninja or the soldier
//start with a new game where you will select all of your details
///speed hightens the chance of taking your go again with double goes
// require('child_process').exec('start https://www.google.co.in/'); - USE FOR HYPERLINKING
const prompt = require("prompt-sync")({ sigint: true });
const allchar = []
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

    }
    levelup() {
        this.level += 1;
        this.health += (this.level * 10);
        this.speed += (this.level * 8);
        this.power += (this.level * 5);
    }
    restore() {
        this.health += (this.level * 10);
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
        console.log(`Health ${this.health}, speed ${this.speed},power: ${this.power}!`);
    }
}





function fight(user,enemy){
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
        console.log(`Congratulations! You have won the fight! your stats are now`)
        user.stats()
    }else{
        console.log("You have now lost the game! Thanks for playing and be better next time. ")
    }
}

function intro(user,enemy){
   let opening = true
   while (opening){
   let attack = prompt(`Would you like to use A) speed attack, B) regular attack`).toUpperCase()
   if (attack === "A"){
       if (user.speed > (enemy.speed * 1.5)){
        enemy.health -= user.power *1.5
        console.log(`Your speed is high enough to inflict a speed attack! your enemy is severely injured to ${enemy.health}!`)
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

// build a hut for the night to rest or continue walking,
// if continue walking will result in exhaustion and will have to fight the next battle with half stats
function levelThree(user){
    const ogre = new character("ogre","unit",4)
    ogre.enemy()
    allchar.push(ogre)
    let run = true
    console.log("Well done! You have done well to defeated the zombie!")
    console.log ("You now have two options, A) to build a hut and camp out overnight, however you will risk the chance of being sneak attacked! B) you can carry on walking throught the night, but your health and speed will drop.")
    let answer = prompt("Please select your letter.").toUpperCase()
    while (run === true){
    if (answer === "A"){
        prompt("Risky choice! We will see how you survive through the night, please press any key to continue")
        let rand = Math.floor(Math.random() * 2);
        if (rand === 0){
            user.levelup()
            console.log(`Due to you having a great night sleep you have now levelled up! Please see your new stats below`)
            user.stats()
            run = false
            break
        }else{
            console.log("You have been Sneak attacked!!")
            
        }
        }else if (answer === "B"){
            user.health += 5
            console.log(`You have taken the safe choice! Your health has gone up by 5 to ${user.health}!`)
            levelTwo(user)
            run = false

        }else{
        console.log("Sorry your input was not recognised, please strictly enter A or B")}
    
} }
//SECOND LEVEL 
function levelTwo(user){
    const zombie = new character("zombie","soldier",2)
    zombie.enemy()
    allchar.push(zombie)
    console.log(`You have just hydrated yourself and have found a ${zombie.name} that is level ${zombie.level} with the stats\n Health : ${zombie.health}, Speed ${zombie.speed} and Power ${zombie.power}!`)
    prompt('A picture of the zombie will now appear in the browser! How will you approach this demon! Please click any key to see the Zombie.')
    require('child_process').exec('start level2.html');
    intro(user,zombie)

}
// FIRST LEVEL
function levelOne(user){
    let run = true
    console.log(`welcome ${user.name} to your first mission! \n You have come across a jungle and you are in need of water. Please select one of the options below by selecting the correct letter`)
    prompt ("The picture of the jungle will now appear in the browser. Please click any key to see the picture")
    require('child_process').exec('start level1.html');
    console.log("A)Go south towards the river where you will find dangerous species on the way. B) take the safe choice and find a water shelter")
    let answer = prompt("Please select your letter.").toUpperCase()
    while (run === true){
    if (answer === "A"){
        prompt("You have come across the snake on your adventure! We will see how you will deal with this. Please press any key to continue.")
        if (user.fightstyle === "ninja"){
            user.health += 20
            console.log(`Congratulations ${user.name}! As you picked the ninja fightstyle you have avoided the snake! You will recieve +20 health, new health ${user.health}`)
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
    fightstyle = prompt("Select the number of the fighting style you would like to be: 1,2 or 3? If this has looped the first answer was incorrect")
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
levelOne(user)
}  
//newgame()
const dummy = new character ("dummy","unit",1)
dummy.unit()
for (let i = 0; i < 9;i++){
console.log(Math.floor(Math.random() * 3))
}
// HAVE TO CREATE SEPERATE CLASSES BASED ON NINJA, UNIT AND SOLDIER AND ASSIGN THE CORRECT SCORES TO EACH BASED ON WHAT IS CHOSEN