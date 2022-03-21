const computerChoiceDisplay=document.getElementById('computer-choice')
const usserChoiceDisplay=document.getElementById('usser-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices= document.querySelectorAll('button')
let usserChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  usserChoice=e.target.id
  usserChoiceDisplay.innerHTML= usserChoice 
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  const randomNumber= Math.floor(Math.random()*possibleChoices.length)+1
  if(randomNumber===1){computerChoice='Piedra'}
  if(randomNumber===2){computerChoice='Tijera'}
  if(randomNumber===3){computerChoice='Papel'}
  computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
  if(computerChoice===usserChoice){
    result='Empate!'
  }
  if(computerChoice==='Piedra' && usserChoice==='Papel'){
    result='Ganaste!'
  }
  if(computerChoice==='Piedra' && usserChoice==='Tijera'){
    result='Perdiste!'
  }

  if(computerChoice==='Papel' && usserChoice==='Tijera'){
    result='Perdiste!'
  }

  if(computerChoice==='Papel' && usserChoice==='Piedra'){
    result='Perdiste!'
  }

  if(computerChoice==='Tijera' && usserChoice==='Piedra'){
    result='Ganaste!'
  }

  if(computerChoice==='Tijera' && usserChoice==='Papel'){
    result='Perdiste!'
  }
  resultDisplay.innerHTML=result;


}





