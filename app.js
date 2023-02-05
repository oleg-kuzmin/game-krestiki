const gameAreaField = document.querySelector('.game-area');
const turnZero = document.querySelector('#turnZero');
const turnDagger = document.querySelector('#turnDagger');
const gameAreaFieldAll = document.querySelectorAll('.game-area__field');
const gameReset = document.querySelector('.info-area__button_type_reset');
let isDagger = true;

gameAreaField.addEventListener('click', function (evt) {
  if ((evt.target.classList.contains('game-area__field_krest')) && (evt.target.classList.contains('game-area__field_nolik'))) {
    console.log('Ничего не нужно делать');   
  }

  if ((!evt.target.classList.contains('game-area__field_krest')) && (!evt.target.classList.contains('game-area__field_nolik'))) {
    console.log('Да нужно добавлять крестик или нолик');
    if (isDagger) {
      console.log('Да, я играю за крестики');
      evt.target.classList.add('game-area__field_krest');   
      isDagger = !isDagger;
      checkTurn();
    } else {
      console.log('Нет, я играю за нолики');
      evt.target.classList.add('game-area__field_nolik');
      isDagger = !isDagger;
      checkTurn();
    }
  }
})

console.log(gameAreaFieldAll);

gameReset.addEventListener('click', function () {
  gameAreaFieldAll.forEach(element => {
    element.classList.remove('game-area__field_nolik');
    element.classList.remove('game-area__field_krest');    
  });
  isDagger = true;
  turnDagger.classList.add('info-area__turn_off');
  turnZero.classList.remove('info-area__turn_off');
})

function checkTurn () {
  if (isDagger) {
    turnDagger.classList.toggle('info-area__turn_off');
    turnZero.classList.toggle('info-area__turn_off');
  } else {
    turnDagger.classList.toggle('info-area__turn_off');
    turnZero.classList.toggle('info-area__turn_off');
  }
}


