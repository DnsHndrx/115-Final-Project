let user = document.getElementById("user")
let email = document.getElementById("email")
let tic_tac = document.getElementById("tic_tac")
let rock = document.getElementById("rock")

window.addEventListener('load', (event) => {
    user.innerHTML = localStorage.username
    email.innerHTML = localStorage.email
    tic_tac.innerHTML = localStorage.tic_tac_counter
    rock.innerHTML = localStorage.rock_counter
})