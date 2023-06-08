module.exports = class Monster{
    constructor({monsterName = "unknown",minimumLife = 0,currentLife = 100}) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife;
    };
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

updateLife = (lifeChangeAmout)=> {
    this.currentLife += lifeChangeAmout;
    this.currentLife = this.currentLife <0 ? 0: this.currentLife;
    this.isAlive = this.currentLife <this.minimumLife;
};
randomLifeDrain = (minimumLifeDrian,maximumLifeDrain)=>{
    if (minimumLifeDrian < maximumLifeDrain){
        updateLife(getRandomInt(minimumLifeDrian,maximumLifeDrain+1))
    }
    else console.log("ERROR: min life greater then max life")
};





module.exports = {
    randomLifeDrain,updateLife
}