const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE= 11;
const STRONG_ATTACK_VALUE=20;
const HEAL_VALUE = 10;

let chosenMaxLife = parseInt(prompt("enter a value typically 100",'100'));
let currentMonsterHealth = chosenMaxLife;
let currenPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound(){
    let playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currenPlayerHealth = currenPlayerHealth - playerDamage;
    if(currentMonsterHealth <= 0 && currenPlayerHealth > 0){
        alert("you win");
    }
    else if(currenPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('monster won');
    }
    else if(currenPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('you have a draw');
    }
}

function attackMode(mode){
    let maxDamage;
    if(mode == "ATTACK"){
        maxDamage = ATTACK_VALUE;
    }
    else if(mode == "STRONG"){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    let monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth = currentMonsterHealth - monsterDamage;
    endRound();
}

function strongAttackHandler(){
    attackMode('STRONG');
}

function attackHandler(){
    attackMode('ATTACK');
}

function healing(){
    increasePlayerHealth(HEAL_VALUE);
    currenPlayerHealth += HEAL_VALUE;
    endRound();
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler)
healBtn.addEventListener('click',healing);