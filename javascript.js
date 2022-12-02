const toggle_btn = document.querySelector('.dropdown-toggle');
const navigator = document.querySelector('header .navigator');
toggle_btn.addEventListener('click',()=>{if(navigator.
    classList.contains('active'))
    {navigator.classList.remove('active')}else {
        navigator.classList.add('active')
    }})

    document.querySelection('.height').innerHTML = window.innerWidth