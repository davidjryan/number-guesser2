NumberGuesser = function(min, max) {

    this.init(min, max);

};

NumberGuesser.prototype = {

    minNumber: 1,

	  maxNumber: 10,

	  secretNumber: null,

    totalGuesses: 0,

	init: function(min, max) {

		this.generateNumber();

  },

	generateNumber: function() {

		this.secretNumber = Math.floor(this.minNumber + (Math.random() * this.maxNumber));

  },

	guess: function(guess) {

        this.totalGuesses++;

		if(guess < this.secretNumber) {

      //DOM message too low

			return false;

    } else if (guess > this.secretNumber) {

      //DOM Message too high

			return false;

    } else {

		//DOM message YOU WIN!

			return true;

    }
	}
};

var game = new NumberGuesser();

var guessResult = false;

do {//needs to be do while loop

	var guessStr = $(".number").val()

	if(guessStr && !isNaN(guessStr)) {

		var guessInt = parseInt(guessStr, 10);

		guessResult = game.guess(guessInt);

	}
} while (guessResult === false;);
