let GameManager = {
    setGameStart: function (classType)
    {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    
    resetPlayer: function (classType)
    {
        switch (classType) {
            case "Warrior":
                player = new Player(classType,200,0,200,100,50);
                break; 
            case "Berserk":
                player = new Player(classType,100,0,100,130,200);
                break; 
            case "Mage":
                player = new Player(classType,80,200,50,110,50);
                break; 
            case "Hunter":
                player = new Player(classType,200,0,200,120,100);
                break; 
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src ="Avatar-Player/'+ classType.toLowerCase() +
        '.png"class = "img-Avatar"><div><h3>'+classType+'</h3><p class="health-player">Health: '+player.health+'</p>'+
        '<p>Mana: '+player.mana+'</p>'+'<p>Strength: '+player.strength+'</p>'+ '<p>Agility: '+player.agility+'</p>'+'<p>Speed: '+player.speed+'</p></div>';
    },
    setPreFight: function () // commons issue always use '.(full stop)' when calling classs and '#' when calling id
    {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class= "btn-prefight" onclick = "GameManager.setFight()">Search for Enemy</a>';
        getArena.style.visibility  = "visible";
        
    },
    setFight: function() //common error ensure ':' is used wen assigning annoymous function and not the assignment operator
    {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // create enemy // enemyType,health,mana,strength,agility,speed(attributes)
        let enemy00 = new Enemy ("Goblin",100,0,50,150,100);
        let enemy01 = new Enemy ("Troll",200,0,150,130,80);
        let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            
        }
        
        getHeader.innerHTML = '<p>Task: Choose your move</p>' ;
        getActions.innerHTML = '<a href="#" class= "btn-prefight" onclick = "PlayerMoves.calcAttack()">Attack</a>';
        getEnemy.innerHTML = '<img src ="Avatar-Enemy/'+ enemy.enemyType.toLowerCase() +
        '.png" class = "img-Avatar"><div><h3>'+enemy.enemyType+'</h3><p class ="health-enemy">Health: '+enemy.health+'</p>'+
        '<p>Mana: '+enemy.mana+'</p>'+'<p>Strength: '+enemy.strength+'</p>' + '<p>Agility: '+enemy.agility+'</p>'+'<p>Speed: '+enemy.speed+'</p></div>';

        
    }
}