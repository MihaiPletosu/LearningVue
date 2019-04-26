new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            this.playerAttacks(3, 10);
            this.monsterAttacks();
        },
        specialAttack: function(){
            this.playerAttacks(10, 20);
            this.monsterAttacks();
        },
        heal: function(){

        },
        giveUp: function(){

        },
        monsterAttacks: function(){
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        playerAttacks: function(min, max){
            this.monsterHealth -= this.calculateDamage(min, max);
            if(this.checkWin()){
                return;
            }
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You Won! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm('You Lost! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});