let month = document.getElementById('months')
let day = document.getElementById('days')
let year = document.getElementById('years')
let months = document.getElementById('month')
let days = document.getElementById('day')
let years = document.getElementById('year')
let set = document.getElementById('set')
let ul = document.querySelectorAll('ul li')
let date = new Date
set.addEventListener('click',()=>{
    set.style.background = '#854dff'
    if (years.value == '' && days.value == '' && months.value == '') {
        years.style.borderColor = 'red'
        months.style.borderColor = 'red'
        days.style.borderColor = 'red'
        ul.forEach(uls=>{
            uls.style.color = 'red'
        })
    } else {
            month.textContent = date.getMonth()
            if (days.value < date.getDate()) {
                let calcc =date.getDate() -  days.value
                day.textContent = 30-calcc
            } else {
                let calcc =days.value - date.getDate() 
                day.textContent = 30-calcc
            }
    
    if (months.value > date.getMonth()) {
    year.textContent = date.getFullYear()- 1 - years.value
    }else{
        year.textContent = date.getFullYear() - years.value
    }
    years.style.borderColor = 'black'
    months.style.borderColor = 'black'
    days.style.borderColor = 'black'
    ul.forEach(uls=>{
        uls.style.color = 'black'
    })
    }
})