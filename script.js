NumberGuesser = function(min, max) {

  this.init(min, max);

};

NumberGuesser.prototype = {

  minNumber: 1,

  maxNumber: 100,

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

    if(guess < this.minNumber) {

      $('.answer-text').text("Below min range");

      // return false;

    } else if(guess < this.secretNumber) {

      $('.answer-text').text("Too Low");

    } else if (guess > this.maxNumber) {

      $('.answer-text').text("Above max range");

      // return false;
    } else if (guess > this.secretNumber) {

      $('.answer-text').text("Too High");

    } else {

      $('.answer-text').text("WOOOOOOOO");

      // return true;

    }
  }
};

// $(document).ready(function() {
//
//   startGame();
//
// })

//Overcome locally scoped issue
var game = new NumberGuesser();



var guessResult = false;

$('.guess').prop('disabled', true)
$('.clear').prop('disabled', true)
$('.reset').prop('disabled', true)

$('.number').on('keyup', function() {

  $('.guess').prop('disabled', false)
  $('.clear').prop('disabled', false)

  if ($('.number').val() === '') {

    $('.guess').prop('disabled', true)
    $('.clear').prop('disabled', true)

  }

})

$('.guess').on('click', guessButton)

$('.clear').on('click', clearDisable)

$('.reset').on('click', resetButton)

function guessButton() {

  var guessStr = $(".number").val()

  if(!isNaN(guessStr)) {

    var guessInt = parseInt(guessStr, 10);

    guessResult = game.guess(guessInt);

    $('.number-guessed').text(guessInt);

    $('.reset').prop('disabled', false)


  } else {

    $('.number-guessed').text("NaN");
    $('.answer-text').text("Not a number, dummy");
  }
}

function resetButton() {

  game.generateNumber()
  $('.reset').prop('disabled', true)

  clearDisable();

}

function clearDisable() {

  $('.number').val('');
  $('.guess').prop('disabled', true)
  $('.clear').prop('disabled', true)

}
