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
    })
})

function togglePlan() {
    modal.classList.toggle('hidden')
    
}

function disableScroll() {
    // window.addEventListener('scroll', noscroll)
    
    window.onscroll = () => {
        window.scrollTo(0,0)
    }
}

function enableScroll(y) {
    if(y === checkout){
        if (mobileNav.classList.contains('hidden')){
            window.onscroll = function() {}
        }   
    } else {
        if (mobileNav.classList.contains('hidden')){
            window.onscroll = function() {}
        }        
    }
    console.log(y) 


}   

