// переменная в которой лежит все красные блоки
let list = document.getElementsByClassName('palka')
// добавление имени игрока
let button = document.getElementById('button')
button.addEventListener('click', function () {
  let blockName = document.getElementById('name')
  let input = document.getElementById('form')
  let nameChel = input.value
  blockName.innerText += nameChel
})
document.body.addEventListener('keydown',(event) => {
  if (event.key === "x") {
    for(let i = 0; i < list.length; i++) {
      if(list[i].hasChildNodes() === true && i < 5){
        let block = document.getElementById('block')
        list[i+1].appendChild(block)
        break
      }
    }
  }
  if (event.key === "z") {
    for(let i = 0; i < list.length; i++) {
      if(list[i].hasChildNodes() === true && i > 0){
        let block = document.getElementById('block')
        list[i-1].appendChild(block)
        break
      }
    }
  }
  // добавление флага
  let mestoFlaga = document.getElementById('mestoflaga')
  if(list[5].hasChildNodes() === true && mestoFlaga.hasChildNodes() === false) {
    let mestoFlaga = document.getElementById('mestoflaga')
    let flag = document.createElement('img')
    flag.src = 'img/win.gif'
    flag.id = 'flag'
    flag.className = 'a'
    mestoFlaga.appendChild(flag)
    // добавление победной надписи
    let vin = document.getElementById('vin')
    let a = document.createElement('h1')
    a.innerText = 'Вы победили!'
    vin.appendChild(a)
  }
})

