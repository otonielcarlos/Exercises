var playerOne = {

    name : 'Mario',
    totalCoins: 0,
    status: 'Small',
//    state: 0,
//    console.log(status[state]),
    star: false,
    setName: function(namePicked){
            return namePicked;
    }  ,
    goHit: function(){
        if(this.status === 'Powered Up'){
            this.status = 'Big'
        } else if(this.status === 'Big'){
            this.status= 'Small'
        } else if(this.status==='Small'){
            this.gameActive=false;
            this.status='Dead';
        }
    },
    gameActive: true,
    gotPowerUp: function(){    
        this.star=true; 
    },
    addCoin: function(){    
        this.totalCoins = this.totalCoins + 1 ;
    },
    printFun: function(){
    console.log ('Player is: ' + this.name); 
    console.log('Current status: ' + this.status); 
    console.log('Total coins: '+this.totalCoins); 
    console.log('Star: '+this.star);
    }
}
function getRandomInt() {
    var num = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if (num===0){
        playerOne.goHit();
    } else if (num===1){
      playerOne.gotPowerUp();
    } else if(num===2){
        playerOne.addCoin();
    } 
}

function run() {
    x=setInterval(function(){
        getRandomInt();
        if(playerOne.gameActive===false){
            clearInterval(x)}

    playerOne.printFun();
    },500);
}
var array = [0, 1 ,2, 3, 4, 5, 6];




