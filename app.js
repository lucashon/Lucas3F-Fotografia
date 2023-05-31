const abrir = document.querySelector('#abrir')
const fechar = document.querySelector('#fechar')

let modal = document.getElementById('modal')
abrir.addEventListener('click', ()=>{
     modal.style.display = 'block'
})
fechar.addEventListener('click', ()=>{
     modal.style.display = 'none'
})

const like = document.getElementsByClassName('like')
const none = document.getElementById('none')
const amei = document.getElementById('amei')
amei.addEventListener('click', ()=>{
     amei.style.display = 'none'
     none.style.display = 'block'
})



const like2 = document.getElementsByClassName('like2')
const none2 = document.getElementById('none2')
const amei2 = document.getElementById('amei2')
amei2.addEventListener('click', ()=>{
     amei2.style.display = 'none'
     none2.style.display = 'block'
})
const like3 = document.getElementsByClassName('like3')
const none3 = document.getElementById('none3')
const amei3 = document.getElementById('amei3')
amei3.addEventListener('click', ()=>{
     amei3.style.display = 'none'
     none3.style.display = 'block'
})
const like4 = document.getElementsByClassName('like4')
const none4 = document.getElementById('none4')
const amei4 = document.getElementById('amei4')
amei4.addEventListener('click', ()=>{
     amei4.style.display = 'none'
     none4.style.display = 'block'
})

const enviar = document.getElementById('enviar')
const input1 = document.getElementById('input1').value
const input2 = document.getElementById('input2').value
const input3 = document.getElementById('input3').value
const input4 = document.getElementById('input4').value
const logins = []
enviar.addEventListener('click',()=>{
      if( input1 === '' || input2 === '' || input3 === '' || input4 === '  '){
           alert('Campos Obrigatorios, por favor digite algo valido')
     }
})