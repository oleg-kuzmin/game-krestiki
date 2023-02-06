const gameAreaField = document.querySelector('.game-area');
const turnZero = document.querySelector('#turnZero');
const turnDagger = document.querySelector('#turnDagger');
const gameAreaFieldAll = document.querySelectorAll('.game-area__field');
const gameReset = document.querySelector('.info-area__button_type_reset');
let isDagger = true;
let arrayDagger = [];

gameAreaField.addEventListener('click', function (evt) {
  if ((evt.target.classList.contains('game-area__field_krest')) && (evt.target.classList.contains('game-area__field_nolik'))) {
 
  }

  if ((!evt.target.classList.contains('game-area__field_krest')) && (!evt.target.classList.contains('game-area__field_nolik'))) {
    if (isDagger) {
      evt.target.classList.add('game-area__field_krest');
      arrayDagger[evt.target.id - 1] = isDagger;   
      isDagger = !isDagger;
      console.log(checkVictory(arrayDagger));
    } else {
      evt.target.classList.add('game-area__field_nolik');
      arrayDagger[evt.target.id - 1] = isDagger;
      isDagger = !isDagger;
      console.log(checkVictory(arrayDagger));
    }
  }
})

gameReset.addEventListener('click', function () {
  gameAreaFieldAll.forEach(element => {
    element.classList.remove('game-area__field_nolik');
    element.classList.remove('game-area__field_krest');    
  });
  isDagger = true;
  arrayDagger = [];
})

function checkVictory (array) {
  if ((array[0] === true) && (array[1] === true) && (array[2] === true)) {
    return 'Victory Dugger';    
  }   

  if ((array[0] === false) && (array[1] === false) && (array[2]) === false) {
    return 'Victory Zero';
  }

  if ((array[3] === true) && (array[4] === true) && (array[5] === true)) {
    return 'Victory Dugger';  
  }  

  if ((array[3] === false) && (array[4] === false) && (array[5]) === false) {
    return 'Victory Zero';
  }

  if ((array[6] === true) && (array[7] === true) && (array[8] === true)) {
    return 'Victory Dugger'; 
  } 

  if ((array[6] === false) && (array[7] === false) && (array[8]) === false) {
    return 'Victory Zero';
  }

  if ((array[0] === true) && (array[3] === true) && (array[6] === true)) {
    return 'Victory Dugger';     
  } 

  if ((array[0] === false) && (array[3] === false) && (array[6]) === false) {
    return 'Victory Zero';
  }

  if ((array[1] === true) && (array[4] === true) && (array[7] === true)) {
    return 'Victory Dugger';     
  }

  if ((array[1] === false) && (array[4] === false) && (array[7]) === false) {
    return 'Victory Zero';
  }
  
  if ((array[2] === true) && (array[5] === true) && (array[8] === true)) {
    return 'Victory Dugger';     
  } 

  if ((array[2] === false) && (array[5] === false) && (array[8]) === false) {
    return 'Victory Zero';
  }

  if ((array[0] === true) && (array[4] === true) && (array[8] === true)) {
    return 'Victory Dugger';     
  } 

  if ((array[0] === false) && (array[4] === false) && (array[8]) === false) {
    return 'Victory Zero';
  }

  if ((array[2] === true) && (array[4] === true) && (array[6] === true)) {
    return 'Victory Dugger';     
  } 

  if ((array[2] === false) && (array[4] === false) && (array[6]) === false) {
    return 'Victory Zero';
  }

  if ((!array.includes(undefined)) && array.length === 9) {
    return 'DRAW'
  }

}





