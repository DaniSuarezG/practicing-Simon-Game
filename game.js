function Game() {
  this.points = 0
	this.userSequence = new Sequence()
	this.simonSequence = new Sequence()
  this.simonSequence.addRandomColor()
	this.colorMap = {
		green:  document.querySelector('.btn.verde'),
		yellow: document.querySelector('.btn.amarillo'),
		red:    document.querySelector('.btn.rojo'),
		blue:   document.querySelector('.btn.azul')
	}
	this.pointsHTML = document.getElementById('points')

	for (let colorBtn in this.colorMap) {
		this.colorMap[colorBtn].addEventListener('click', () => {
			this.play(colorBtn)
		})
	}

  this.play = function(color) {
		this.userSequence.addColor(color)

		if (this.simonSequence.equalLengthTo(this.userSequence.seq)
			&& this.simonSequence.equalTo(this.userSequence.seq)) {
				this.nextLevel()
				this.showSequence()
		} else {
			if (!this.simonSequence.equalTo(this.userSequence.seq)) {
				this.fail()
			} else {
				console.log('>> what is next color?')
			}
		}
		return true
  }

	this.nextLevel = function() {
		this.points++
		this.pointsHTML.innerText = this.points
		console.log('awesome!! next level. ' + this.points + ' points')
		this.simonSequence.addRandomColor()
		this.userSequence.clear()
		console.log(this.simonSequence.seq)
	}

	this.fail = function() {
		console.log('fail!! restart game')
		this.userSequence.clear()
		this.simonSequence.clear()
	}

	this.showSequence = function() {
		this.simonSequence.seq.forEach((color,idx) => {
			setTimeout(() => {
				this.colorMap[color].classList.add('active')
				setTimeout(() => {
					this.colorMap[color].classList.remove('active')
				}, 1000*idx + 500)
			}, 1000*idx)
		})
	}
}
