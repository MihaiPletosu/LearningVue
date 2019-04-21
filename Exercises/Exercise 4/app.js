new Vue({
  el: '#exercise',
  data: {
    attached: false,
    alternatedClass: '',
    inputClass: '',
    userDefinedClass: 'square',
    userEnablingClass: false,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    progressBarWidth: 0,
    interval: 0
  },
  methods: {
    startEffect: function() {
      self = this;
      setInterval(function(){
        if(self.attached){
          self.alternatedClass = 'highlight';
          self.attached = false;
        }
        else{
          self.alternatedClass = 'shrink';
          self.attached = true;
        }
      }, 1000);
    },
    startProgressBar: function(){
      self = this;
      self.interval = setInterval(function(){
        self.progressBarWidth += 1;
      }, 100);
    },
    resetProgressBar: function(){
      this.progressBarWidth = 0;
      clearInterval(this.interval);
    }
  },
  computed: {
    userStyle: function(){
      return{
        width: this.width + 'px',
        height: this.height + 'px',
        backgroundColor: this.backgroundColor
      };
    }
  }
});
