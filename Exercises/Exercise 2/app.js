new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods:{
        showAlert: function(){
            alert('Button has been clicked!');
        },
        showInput: function(event){
            this.value = event.target.value;
        }
    }
});