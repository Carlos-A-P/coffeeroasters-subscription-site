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
        let acc1, acc2, acc3, acc4, acc5, sum1, sum2, sum3, sum4, sum5, choice1, choice2, choice3, choice4, choice5 
        sum1 = summary.childNodes[1]
        sum2 = summary.childNodes[3]
        sum3 = summary.childNodes[5]
        sum4 = summary.childNodes[7]
        sum5 = summary.childNodes[9]
        let choice = selected.firstElementChild.innerText
        if (choice === 'Capsule' || choice === 'Filter' || choice === 'Expresso') {
            choice1 = choice
        }
        if (choice === 'Single Origin' || choice === 'Decaf' || choice === 'Blended') {
            choice2 = choice
        }
        if (choice === '250g' || choice === '500g' || choice === '1000g') {
            choice3 = choice
        }
        if (choice === 'Wholebean' || choice === 'Filter' || choice === 'Cafetiére') {
            choice4 = choice
        }
        if (choice === 'Every week' || choice === 'Every 2 weeks' || choice === 'Every month') {
            choice5 = choice
        }
        
        switch(choice1) {
            case 'Capsule':
                acc1 = choice1
                sum1.classList.add('full')
                sum1.innerText = acc1
            case 'Filter':
                acc1 = choice1
                sum1.classList.add('full')
                sum1.innerText = acc1
            case 'Espresso':
                acc1 = choice1
                sum1.classList.add('full')
                sum1.innerText = acc1
        }
        switch (choice2){
            case 'Single Origin':
                acc2 = choice2
                sum2.classList.add('full')
                sum2.innerText = acc2
            case 'Decaf':
                acc2 = choice2
                sum2.classList.add('full')
                sum2.innerText = acc2
            case 'Blended':
                acc2 = choice2
                sum2.classList.add('full')
                sum2.innerText = acc2
            default: ''
        }
        switch (choice3){
            case '250g':
                acc3 = choice3
                sum3.classList.add('full')
                sum3.innerText = acc3
            case '500g':
                acc3 = choice3
                sum3.classList.add('full')
                sum3.innerText = acc3
            case '1000g':
                acc3 = choice3
                sum3.classList.add('full')
                sum3.innerText = acc3
            default: ''
        }
        switch (choice4){
            case 'Wholebean':
                acc4 = choice4
                sum4.classList.add('full')
                sum4.innerText = acc4
            case 'Filter':
                acc4 = choice4
                sum4.classList.add('full')
                sum4.innerText = acc4
            case 'Cafetiére':
                acc4 = choice4
                sum4.classList.add('full')
                sum4.innerText = acc4
            default: ''
        }
        switch (choice5){
            case 'Every week':
                acc5 = choice5
                sum5.classList.add('full')
                sum5.innerText = acc5
            case 'Every 2 weeks':
                acc5 = choice5
                sum5.classList.add('full')
                sum5.innerText = acc5
            case 'Every month':
                acc5 = choice5
                sum5.classList.add('full')
                sum5.innerText = acc5
            default: ''
        }
    })
})

// console.log(summary.childNodes[1].innerText)
console.log(summary.childNodes[3])

// summary.childNodes[1].innerText = 'cheese'