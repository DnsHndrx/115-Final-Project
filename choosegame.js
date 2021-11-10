let profile = document.getElementsByClassName('ions')[0]
let head = document.getElementsByClassName('head')[0]
let logout = document.getElementsByClassName('llog')[0]

window.addEventListener('load', (event) => {
    if(localStorage.length == 0){
        head.style.overflow = 'hidden'
        profile.style.display = 'none'
    } else if(localStorage.length > 0){
        profile.style.display = 'block'
    }
});

logout.addEventListener("click", function(){
    localStorage.clear()
})