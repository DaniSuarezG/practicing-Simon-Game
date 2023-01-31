function Colors() {
  this.colors = ['red','yellow','blue','green'];
  this.generateNumber = function() {
    return Math.floor(Math.random()*(this.colors.length))
  }
  this.generateRandom = function() {
    return this.colors[this.generateNumber()]
  }
}
