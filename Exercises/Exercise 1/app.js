new Vue({
    el: "#exercise",
    data: {
        name: 'Pletosu Mihai',
        age: 27,
        forestImageUrl: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc02ef1cc-f794-11e7-9cfd-f28094b4d5ce.jpg?crop=1500%2C844%2C0%2C78&resize=685'
    },
    methods: {
        rng: function(){
            return Math.random();
        }
    }
});