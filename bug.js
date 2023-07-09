const prompt = require("prompt-sync")({ sigint: true });

const fightstyleAvailable = [{num: 1,style : "unit"},{num : 2, style : "ninja"}, {num : 3, style : "soldier"}]
   let fightstyleCheck = false
    while (fightstyleCheck === false){
    let fightstyle = prompt("Select the number of the fighting style you would like to be: 1) The unit - grants extra health, but lower speed. 2) the ninja - grants high speed, but low health. 3) The soldier, who has slightly more damage, but slightly less speed and health")
    fightstyle = parseInt(fightstyle)
        for (let i = 0; i < fightstyleAvailable.length;i++){
            for (key in i){
                console.log(i[key])
                if (i === fightstyle){
                    fightstyle = i[key]
                    fightstyleCheck = true
                }
            }
        }
        console.log("Sorry this is not a valid number, please try again")
}