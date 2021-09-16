const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const mobileNav = document.getElementById('mobile_menu')
const navToggle = document.getElementById('nav_toggle')
const modal = document.getElementById('modal')
const accOptions = document.querySelectorAll('[data-options]')
const createPlan = document.querySelector('[data-button]')

// toggles mobile meny
function toggleNav() {
    console.log(navToggle)
    
    // openNav.classList.toggle('visible')
    // closeNav.classList.toggle('visible')
    // mobileNav.classList.toggle('visible')

    openNav.classList.toggle('hidden')
    closeNav.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    
    if(mobileNav.classList.contains('hidden')){
        navToggle.setAttribute('aria-expanded', 'false')
    } else {
        navToggle.setAttribute('aria-expanded', 'true')
    }
    // window.removeEventListener('scroll', noScroll);
    scroll()
}

// disables/enables scroll for mobile nav and checkout 
function scroll(x) {
    disableScroll()
    enableScroll(x)   
}

// accOptions.setAttribute('aria-expanded', 'false')
// opens up accordion menu for each
accOptions.forEach(acc =>{
    acc.setAttribute('aria-expanded', 'false')
    acc.addEventListener('click', () => {
        
        const listOptions = acc.parentElement.lastElementChild
        
        listOptions.classList.toggle('hidden')
        acc.parentElement.firstElementChild.classList.toggle('open')

        if(listOptions.classList.contains('hidden')){
            acc.setAttribute('aria-expanded', 'false')
        } else {
            acc.setAttribute('aria-expanded', 'true')
        }
        
    })
})

// shows modal
function togglePlan() {
    modal.classList.toggle('hidden')
    scroll('_modal')
    insertChoices()
}

// disables scroll
function disableScroll() {
    
    window.onscroll = () => {
        window.scrollTo(0,0)
    }
}

// enables scroll
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
}   

// adds a function so that user can return back from checkout
const order_summary = document.getElementById('order_sum')
order_summary.addEventListener('click', ()=> {
    togglePlan()
    
})

const card = document.querySelectorAll('[data-card]')
const summary = document.getElementById('summary')
const grindOption = document.getElementById('grindOption')
let modalSummary = document.getElementById('modalSummary')
let choice1, choice2, choice3, choice4, choice5
let result
createPlan.innerHTML = `<a>Create my plan!</a>`

// adds options for end summary at the press of the button
card.forEach(selected => {
    selected.addEventListener('click', () => {
        let choice = selected.firstElementChild.innerHTML
        console.log()
        if (choice === 'Capsule' || choice === 'Espresso') {
            choice1 = choice
            createPlan.classList.add('disabled')
        }else if (choice === 'Single origin' || choice === 'Decaf' || choice === 'Blended') {
            choice2 = choice
        }
        if (choice === '250g' || choice === '500g' || choice === '1000g') {
            choice3 = choice
        }
        if (choice === 'Wholebean' || choice === 'Cafetiére') {
            choice4 = choice
        }
        if (choice === 'Every week' || choice === 'Every 2 weeks' || choice === 'Every month') {
            choice5 = choice
        }

        const acc1 = selected.parentElement.parentElement.firstElementChild.innerHTML
        if (choice === 'Filter' && acc1 === 'How do you drink your coffee?') {
            choice1 = choice
            createPlan.classList.add('disabled')
            createPlan.innerHTML = `<a>Create my plan!</a>`
        } else if (choice === 'Filter' && acc1 !== 'How do you drink your coffee?') {
            choice4 = choice
        }

        arr = [choice1, choice2, choice3, choice4, choice5]
        if(choice1 === 'Capsule'){
            grindOption.classList.add('disabled')
            createPlan.innerHTML = `<a>Create my plan!</a>`
            capsule()

            if(choice1 !== undefined && choice2 !== undefined && choice3 !== undefined && choice5 !== undefined) {
                createPlan.classList.remove('disabled')
                createPlan.innerHTML = `<a href="#modal" onclick="togglePlan()">Create my plan!</a>`
                priceTotal()
            }            
        }else{
            for(let i=0; i < arr.length; i++){
                if(arr[i] === undefined){
                    arr[i] = `<span></span>`
                } else{
                    arr[i] = `<span class="full">${arr[i]}</span>`
                }
            } 
            grindOption.classList.remove('disabled')
            
            summary.innerHTML = `“I drink my coffee as ${arr[0]}, with a ${arr[1]} type of bean. ${arr[2]} ground ala ${arr[3]}, sent to me ${arr[4]}.”`
            result = summary.innerHTML

            if(choice1 !== undefined && choice2 !== undefined && choice3 !== undefined && choice4 !== undefined && choice5 !== undefined) {
                createPlan.classList.remove('disabled')
                createPlan.innerHTML = `<a href="#modal" onclick="togglePlan()">Create my plan!</a>`
                priceTotal()
            }
        }

        setSelected(selected)
        
        
        return arr, result
    })
})

// adds class to selected card
function setSelected(x){
    let cardOptions = x.parentElement
    // console.log(cardOptions.children.length)
    // console.log(cardOptions.children[1])
    for (let i = 0; i < cardOptions.children.length; i++) {
        if (cardOptions.children[i].classList.contains('card-selected')){
            cardOptions.children[i].classList.remove('card-selected')

        }
    }
    x.classList.add('card-selected')
}

// settings for if capsule was chosen to change summary sentence
function capsule() {
    for(let i=1; i < arr.length; i++){
        if(arr[i] === undefined){
            arr[i] = `<span></span>`
        } else{
            arr[i] = `<span class="full">${arr[i]}</span>`
        }
    }
    summary.innerHTML = `“I drink my coffee using <span class="full">${choice1}</span>, with a ${arr[1]} type of bean. ${arr[2]}, sent to me ${arr[4]}.”`
    result = summary.innerHTML
}

// this inserts the summary into the modal when the button is clicked
let arr
function insertChoices(){
    modalSummary.innerHTML = result
}

// adding the price total at the end
function priceTotal(){
    let weeklyPrice, twoWeekPrice, monthlyPrice, finalPrice
    const checkout = document.querySelector('[data-checkout]')
    const priceSpan = document.getElementById('price')
    if (choice3 === '250g'){
        weeklyPrice = 7.20
        twoWeekPrice = 9.60 
        monthlyPrice = 12.00
    } else if(choice3 === '500g'){
        weeklyPrice = 13.00
        twoWeekPrice = 17.50
        monthlyPrice = 22.00      
    } else if(choice3 === '1000g'){
        weeklyPrice = 22.00
        twoWeekPrice = 32.00
        monthlyPrice = 42.00
    }

    // choice === 'Every week' || choice choice === 'Every week' || choice === 'Every 2 weeks' || choice === 'Every month'

    if (choice5 === 'Every week'){
        finalPrice = weeklyPrice*4
    }else if(choice5 === 'Every 2 weeks'){
        finalPrice = twoWeekPrice*2
    }else if(choice5 === 'Every month'){
        finalPrice = monthlyPrice
    }

        priceSpan.innerHTML = `$${finalPrice.toFixed(2)} / mo` 
        checkout.innerHTML = `Checkout - $${finalPrice.toFixed(2)} / mo`        
}

const leftNav = document.querySelectorAll('[data-l-nav]')

leftNav.forEach (lNav => {
    lNav.addEventListener('click', () => {
        let x = lNav.parentElement
    for (let i = 0; i < x.children.length; i++) {
        if (x.children[i].classList.contains('clicked')){
            x.children[i].classList.remove('clicked')
        }
    }
    lNav.classList.add('clicked')
    })
})