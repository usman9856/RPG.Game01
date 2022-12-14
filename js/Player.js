let player;

function Player(classType,health,mana,strength,agility,speed)  {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;

}
let PlayerMoves = { 
    //who attacks first
    calcAttack: function () {
    // who attacks first ?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed =enemy.speed;

    //player attacks
    let playerAttack= function(){
        let calcBaseDamage;
        if (player.mana >0){
            calcBaseDamage= player.strength * player.mana/1000; //calculates the base attack damage for mana user
        }else{
            calcBaseDamage= player.strength * player.agility/1000;//calculates the base attack damage for non-mana user
        }
    
        let offsetDamage = Math.floor(Math.random()*Math.floor(10));//offsets the damage to ensure random damage amount
        let calcOutputDamage = calcBaseDamage + offsetDamage;
    
        // number of hits
        let numberOfHits =Math.floor(Math.random()*Math.floor(player.agility/10)/2)+1;
        let attackValues = [calcOutputDamage,numberOfHits];
    
        return attackValues;
        }       

        //enemy attacks
    let enemyAttack = function(){
        let calcBaseDamage;
        if (enemy.mana >0){
            calcBaseDamage= enemy.strength * enemy.mana/1000; //calculates the base attack damage for mana user
        }
        else{
            calcBaseDamage= enemy.strength * enemy.agility/1000;//calculates the base attack damage for non-mana user
        }
        let offsetDamage = Math.floor(Math.random()*Math.floor(10));//offsets the damage to ensure random damage amount
        let calcOutputDamage = calcBaseDamage+offsetDamage;
        // number of hits
        let numberOfHits =Math.floor(Math.random()*Math.floor(enemy.agility/10)/2)+1;
        let attackValues = [calcOutputDamage,numberOfHits];
        return attackValues;
        }
        
        //get player / enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        if (getPlayerHealth == 0 || getEnemyHealth ==0 ){
           alert("Refresh Browser to Continue");
        }
        //initiate attacks
        if(getPlayerSpeed>=getEnemySpeed)
        {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0]*playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit "+playerAttackValues[0] + " damage "+ playerAttackValues[1]+ " times. ");
            if (enemy.health <=0)
            {
                alert("You win! referesh browser to play again.");
                getPlayerHealth.innerHTML= 'Health: '+player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            }
            else{
                // alert("You lose! referesh browser to play again.");
                // getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: '+enemy.health
                //enemy attacks
                let enemyAttackValues= enemyAttack();
                let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit "+enemyAttackValues[0] + " damage "+ enemyAttackValues[1]+ " times. ");
                if (player.health <=0)
                {
                 alert("You Lose! referesh browser to play again.");
                 getPlayerHealth.innerHTML= 'Health: 0';
                 getEnemyHealth.innerHTML = 'Health: '+enemy.health;
                 }
                 else {
                    getPlayerHealth.innerHTML= 'Health: '+player.health;
                 }
            }
        }  
        else if (getEnemySpeed>=getPlayerSpeed)
        {
          enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit "+enemyAttackValues[0] + " damage "+ enemyAttackValues[1]+ " times. ");
            if (player.health <=0)
            {
                alert("You lose! referesh browser to play again.");
                getEnemyHealth.innerHTML= 'Health: '+enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }
            else{
                // alert("You lose! referesh browser to play again.");
                // getPlayerHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: '+player.health
                //player attacks
                let playerAttackValues= playerAttack();
                let totalDamage = playerAttackValues[0]*playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit "+playerAttackValues[0] + " damage "+ playerAttackValues[1]+ " times. ");
                if (enemy.health <=0)
                {
                 alert("You win! referesh browser to play again.");
                 getPlayerHealth.innerHTML= 'Health: '+player.health;
                 getEnemyHealth.innerHTML = 'Health: 0';
                 }
                 else {
                    getPlayerHealth.innerHTML= 'Health: '+player.health;
                 }
            }
        }  

    }

   
} 