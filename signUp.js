let user_name = document.getElementById('username')
let user_email = document.getElementById('email')
let btn = document.getElementsByTagName('button')[0]

btn.addEventListener("click", function(){
    localStorage.clear()
    localStorage.username = user_name.value
    localStorage.email = user_email.value
    //counters
    localStorage.rock_counter = 0
    localStorage.tic_tac_counter = 0
})