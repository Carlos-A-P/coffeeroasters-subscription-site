const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const mobileNav = document.getElementById('mobile_menu')
const modal = document.getElementById('modal')
const accOptions = document.querySelectorAll('[data-options]')

function toggleNav() {
    openNav.classList.toggle('hidden')
    closeNav.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    // window.removeEventListener('scroll', noScroll);
    scroll()
}

function scroll(x) {
    disableScroll()
    enableScroll(x)
    console.log(x)     
}



accOptions.forEach(acc =>{
    acc.addEventListener('click', () => {
        const listOptions = acc.parentElement.lastElementChild
        // console.log(listOptions)
        listOptions.classList.toggle('hidden')
        acc.parentElement.firstElementChild.classList.toggle('open')
    })
})

function togglePlan() {
    modal.classList.toggle('hidden')
    scroll('_modal')
}

function disableScroll() {
    
    window.onscroll = () => {
        window.scrollTo(0,0)
    }
}

function enableScroll(y) {
    if(y === '_modal'){
        if (modal.classList.contains('hidden')){
            window.onscroll = function() {}
        }   
    } else {
        if (mobileNav.classList.contains('hidden')){
            window.onscroll = function() {}
        }        
    }
    console.log(y) 
}   


const order_summary = document.getElementById('order_sum')
order_summary.addEventListener('click', ()=> {
    togglePlan()
})

// const option = document.getElementsByClassName('card').firstElementChild
// const cardSelected = document.querySelectorAll('card')
const card = document.querySelectorAll('[data-card]')
const summary = document.getElementById('summary')

card.forEach(selected => {
    selected.addEventListener('click', () => {
        console.log(selected.firstElementChild.innerText)
    })
})

console.log(summary.childNodes[1])