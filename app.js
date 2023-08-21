const main = document.getElementById('main')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')

button1.addEventListener('click', ()=> {
    main.style.backgroundColor = 'red'
})
button2.addEventListener('click', ()=> {
    main.style.backgroundColor = 'green'
})
button3.addEventListener('click', ()=> {
    main.style.backgroundColor = 'blue'
})
button4.addEventListener('click', ()=> {
    main.style.backgroundColor = 'purple'
})
button5.addEventListener('click', ()=> {
    main.style.backgroundColor = 'brown'
})
button6.addEventListener('click', ()=> {
    main.style.backgroundColor = 'orange'
})
button7.addEventListener('click', ()=> {
    main.style.backgroundColor = '#212121'
})