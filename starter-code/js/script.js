const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const mobileNav = document.getElementById('mobile_menu')
const modal = document.getElementById('modal')
const accOptions = document.querySelectorAll('[data-options]')
const createPlan = document.querySelector('[data-button]')

// toggles mobile meny
function toggleNav() {
    openNav.classList.toggle('hidden')
    closeNav.classList.toggle('hidden')
    mobileNav.classList.toggle('hidden')
    // window.removeEventListener('scroll', noScroll);
    scroll()
}

// disables/enables scroll for mobile nav and checkout 
function scroll(x) {
    disableScroll()
    enableScroll(x)   
}


// ppens up accordion menu for each
accOptions.forEach(acc =>{
    acc.addEventListener('click', () => {
        const listOptions = acc.parentElement.lastElementChild
        listOptions.classList.toggle('hidden')
        acc.parentElement.firstElementChild.classList.toggle('open')
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
// adds options for end summary at the press of the button
card.forEach(selected => {
    selected.addEventListener('click', () => {
        let choice = selected.firstElementChild.innerText
        console.log(choice)
        if (choice === 'Capsule' || choice === 'Filter' || choice === 'Espresso') {
            choice1 = choice
        }else if (choice === 'Single origin' || choice === 'Decaf' || choice === 'Blended') {
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

        arr = [choice1, choice2, choice3, choice4, choice5]
        if(choice1 === 'Capsule'){
            grindOption.classList.add('disabled')
            capsule()
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
            createPlan.removeAttribute('disabled')
        }
        }

        
        return arr, result
    })
})

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
    if(choice1 !== undefined && choice2 !== undefined && choice4 !== undefined && choice5 !== undefined) {
        createPlan.removeAttribute('disabled')
    }
}

// this inserts the summary into the modal when the button is clicked
let arr
function insertChoices(){
    // let j = 0

    // for(let i=1; i <= 9 ; i = i+2 ){
    //     modalSummary.childNodes[i].innerText = arr[j]
    //     j++
    // }
    modalSummary.innerHTML = result
}