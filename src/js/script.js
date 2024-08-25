const alarme = document.querySelector('audio')
const inputAlarme = document.querySelector('.alarme')

let campoAlarme = document.querySelector('.campoAlarme p')
let sec = 0
let min = 0
let hora = 0
let interval
let botaoIniciou = document.querySelector('.iniciou')

function digitos(digit){
  if(digit < 10){
    return('0'+digit)
  }else{
    return(digit)
  }
}

function iniciou(){
  contagem()
  interval = setInterval(contagem, 1000);
}

function parou(){
  clearInterval(interval) 
}

function zerou(){
  clearInterval(interval)
  sec = 0
  min = 0
  hora = 0
  document.getElementById('time').innerText="00:00:00"
}

function contagem(){
  sec++
  if(sec == 60){
    min++
    sec = 0
  }else if(min == 60){
    hora++
    min = 0
  }
  document.getElementById('time').innerText=digitos(hora)+':'+digitos(min)+':'+digitos(sec)

}

document.querySelector('.botaoAlarme').addEventListener('click', () => {
  
  let regex = /^(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/

  if(regex.test(inputAlarme.value)){
    campoAlarme.innerText = inputAlarme.value
  }else{
    alert(`${inputAlarme.value} é um valor invalido`)
  }

  setInterval(() => {
      if(time.innerText == campoAlarme.innerText){
        parou()
        document.body.style.color='red'
        alarme.play()
      }else{
        document.body.style.color='black'
        alarme.currentTime = 0
        alarme.pause()
      }
  }, 100)

  inputAlarme.value = ''
})

document.querySelector('.campoAlarme'). addEventListener('dblclick', () => {
  campoAlarme.innerText = ''
})
