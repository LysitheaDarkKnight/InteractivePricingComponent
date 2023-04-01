const slider = document.querySelector('.slider');
const switchToggle = document.querySelector('.switch');

// Slider Number Change

slider.addEventListener('input', (e) => {
    const value = +e.target.value
    const monthLabel = e.target.nextElementSibling.firstElementChild.firstElementChild
    const yearLabel = e.target.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild
    const pageViewsValue = e.target.previousElementSibling.firstElementChild

    monthLabel.innerHTML = value.toFixed(2)
    yearLabel.innerHTML = (value * 9).toFixed(2)
    pageViewsValue.innerHTML = Math.trunc(value * 6.25)
})

// Toggle Switch for monthly and yearly billing

switchToggle.addEventListener('click', () =>{
    const dot = document.querySelector('.dot');
    const month = document.querySelector('.month')
    const year = document.querySelector('.year')

    if(month.style.display === 'block'){
        month.style.display = 'none'
        year.style.display = 'block'
    } else {
        month.style.display = 'block'
        year.style.display = 'none'
    }

    dot.classList.toggle('active')
})