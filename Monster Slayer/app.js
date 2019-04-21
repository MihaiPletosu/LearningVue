new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
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
        },
        calculateDamage: function () {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var self = this;
            var damageToPlayer = getRandomInt(1, 10);
            var damageToMonster = getRandomInt(1, 10);
            this.playerHealth -= damageToPlayer;
            this.monsterHealth -= damageToMonster;
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
            // double damage to monster health needs implementation
            setTimeout(function(){
                self.monsterHealth = self.monsterHealth - 5;    
            }, 500);
        },
        healPlayer: function(){
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var healthValue = getRandomInt(1, 5);
            this.playerHealth += healthValue;
        }
    },
    watch: {
        win: function(){

        },
        lose: function(){
            
        }
    }
});