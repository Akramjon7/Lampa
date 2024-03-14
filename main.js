const btn = document.querySelector('.btn')
const img = document.querySelector('.image')

btn.addEventListener('click',action)

let value = true

function action() {
      if (value) {
            img.src = `./photo2.jpg`
            btn.textContent = 'turn off'
            value = false
      }else{
            img.src = `./photo1.jpg`
            btn.textContent = 'turn on'
            value = true
      }
}