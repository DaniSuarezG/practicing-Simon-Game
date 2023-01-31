function Sequence() {
  this.seq = []
  this.addRandomColor = function() {
    let color = new Colors()
    let newColor = color.generateRandom();
    this.addColor(newColor)
    console.log(newColor)
    return this.seq
  }

	this.addColor = function(color) {
		this.seq.push(color)
	}

  this.clear = function() {
    this.seq = []
  }
  this.equalTo = function(seq2) {
    let i=0;
		while (i<seq2.length) {
			if (seq2[i] !== this.seq[i]) {
				return false
			}
			i++
		}
		return true
  }
	this.equalLengthTo = function(seq2) {
		return this.seq.length === seq2.length
	}
}
