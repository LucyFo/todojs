// const app = document.getElementById('app')
// app.onclick = function () {
//     console.log('click in js')
// }

// const onClick = function() {
//     console.log(;click in addEventListener)
// }
// app.addEventListener ('click', onclick)

const app = document.getElementById('app')
const list = document.getElementById('list')
const form = document.getElementById('submit')
const input = document.getElementById('input')
const button = document.getElementById('button')

button.onclick = function(event) {
    console.log(this)
    console.log(event.target === this)
    const li = document.createElement('li')
    li.innerText = input.value
    list.appendChild(li)
    input.value = ""
}

