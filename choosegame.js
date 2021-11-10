let profile = document.getElementsByClassName('ions')[0]

window.addEventListener('load', (event) => {
    if(localStorage.length == 0){
        profile.style.visibility = 'hidden'
    } else if(localStorage.length > 0){
        profile.style.visibility == 'visible'
    }
});