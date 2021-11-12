let profile = document.getElementsByClassName('ions')[0]
let logout = document.getElementsByClassName('llog')[0]
let signup = document.getElementById("sign_up")

window.addEventListener('load', (event) => {
    if(localStorage.length < 3){
        profile.style.display = 'none'
        signup.style.display = 'block'
        logout.style.display = 'none'
    } else if(localStorage.length > 3){
        profile.style.display = 'block'
        signup.style.display = 'none'
        logout.style.display = 'block'
    }
});

logout.addEventListener("click", function(){
    localStorage.clear()
})