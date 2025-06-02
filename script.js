let a1 = document.querySelector ('.a1')
let a2 = document.querySelector ('.a2')
let body = document.querySelector ('body')
let find = document.querySelector ('.find')
let input = document.querySelector ('.input')
let favourite3 = document.querySelector ('.favourite3')
let wrapper = document.querySelector ('.wrapper')
let n = document.querySelector ('.n')
let u = document.querySelector ('.u')
let modalBtnR = document.querySelector ('.modal-btn.r')
let modalBtnL = document.querySelector ('.modal-btn.l')

a2.addEventListener ('click', function () {
    
} )


find.addEventListener ('click', function () {
    location.href = 'https://www.google.com/search?q=' + input.value
})

u.addEventListener ('keyup', function () {
    if (u.value.length >  0) {
        modalBtnR.style.background = '#855305'
    }
    if (u.value.length == 0 ) {
        modalBtnR.style.background = '#70707052'
    }
})

modalBtnR.addEventListener ('click', function () {
    wrapper.style.display = 'none'
})

modalBtnL.addEventListener ('click', function () {
    wrapper.style.display = 'none'
})

favourite3.addEventListener ('click', function () {
    wrapper.style.display = 'flex'
})

wrapper.addEventListener ('click', function (e) {
    if (e.target.classList.contains('wrapper')) {
        wrapper.style.display = 'none'
        e.stopPropagation()
        e.preventDefault()
    }
})





setTimeout(
    function dad () {
        input.placeholder = 'щось довго ви не пишете'
    },5000
)

