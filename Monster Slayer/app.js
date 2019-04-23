new Vue({
    el: '#app',
    data: {
        newGame: true,
        playerHealth: 100,
        monsterHealth: 100,
        events: [],
    },
    methods: {
        healthBarStyle: function (healthValue) {
            return {
                width: healthValue + '%',
                'background-color': 'green',
                margin: 0,
                color: 'white'
            }
        },
        startNewGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.newGame = false;
            this.events = [];
        },
        calculateDamage: function () {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var damageToPlayer = getRandomInt(1, 10);
            var damageToMonster = getRandomInt(1, 10);
            this.playerHealth -= damageToPlayer;
            this.monsterHealth -= damageToMonster;
            this.events.push({
                "PlayerDamage": damageToMonster,
                "MonsterDamage": damageToPlayer
            });
            this.events.reverse();
        },
        calculateSpecialDamage: function () {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var self = this;
            var damageToPlayer = getRandomInt(1, 10);
            var damageToMonster = getRandomInt(1, 10);
            this.playerHealth = this.playerHealth - damageToPlayer;
            this.monsterHealth = this.monsterHealth - damageToMonster;
            this.events.push({
                "PlayerDamage": damageToMonster,
                "MonsterDamage": damageToPlayer
            });
            setTimeout(function(){
                var newDamageToMonster = getRandomInt(1, 5);
                self.monsterHealth -= newDamageToMonster;
                self.events.push({
                    "PlayerDamage": newDamageToMonster
                });
                self.events.reverse();
            }, 500);
        },
        healPlayer: function(){
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var healthValue = getRandomInt(1, 5);
            var monsterDamage = getRandomInt(1, 5);
            this.playerHealth += healthValue;
            this.playerHealth -= monsterDamage;
            this.events.push({
                "PlayerHeal": healthValue,
                "MonsterDamage": monsterDamage
            });
            this.events.reverse();
        },
        loseGame: function(){

        }
    },
    watch: {
        win: function(){

        },
        lose: function(){
            
        }
    }
});