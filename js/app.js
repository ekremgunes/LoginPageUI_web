const email_input = document.getElementById("email-input")
const email_span = document.getElementById("email-span")
const email_lbl = document.getElementById("email-label")

const password_input = document.getElementById("password-input")
const password_lbl = document.getElementById("password-label")
const password_span = document.getElementById("password-span")

const form = document.forms["login-form"]
const submit_btn = document.querySelector(".submit-btn")

const userSecret_div = document.querySelector(".user-secret-div")
const error_p = document.querySelectorAll(".error-p")

const user_logo = document.querySelector(".user-secret-div")
const user_eye1 = document.querySelector(".secret-eye1")
const user_eye2 = document.querySelector(".secret-eye2")


email_input.addEventListener("keyup", validateEmail)
password_input.addEventListener("keyup", validatePassword)
submit_btn.addEventListener("click", validateForm)

if (email_input.value != "")
    validateEmail()
else
    email_input.focus()

if (password_input.value != "")
    validatePassword()

function validateForm() {

    let email = validateEmail()
    let pwd = validatePassword()
    if (email && pwd) {

        alert("Giriş Başarılı yönlendiriliyorsunuz . . ")

    } else {

        user_eye1.style.animationName = "redEye"
        user_eye2.style.animationName = "redEye"
        if (!pwd && email) {
            password_span.parentElement.style.visibility = "visible"
        } else if (!email && pwd) {
            email_span.parentElement.style.visibility = "visible"

        } else if (!email && !pwd) {
            error_p.forEach(item => {
                item.style.visibility = "visible"
            })
        }

        setTimeout(() => {
            user_eye1.style.animationName = ""
            user_eye2.style.animationName = ""
        }, 3000);

    }
}

function validateEmail() {
    let email = form["email-input"].value

    if (!email.includes("@") || email.length < 5) {
        email_input.style.outline = "1px solid red"
        email_lbl.style.color = " red"
        email_input.focus()
        email_span.parentElement.style.color = "red"
        email_input.title = "ERROR MESSAGE " //your validate message
        return false
    } else {
        email_input.style.outline = "1px solid green"
        email_lbl.style.color = " green"
        email_span.parentElement.style.color = "green"
        setTimeout(() => {
            email_span.parentElement.style.visibility = "hidden"
        }, 1500);

        return true
    }
}

function validatePassword() {
    let pwd = form["password-input"].value
    var numcheck = false

    // pwd must  have  any number
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.includes(i)) {
            numcheck = true
            break
        }

    }
    if (!numcheck || pwd.length < 5) {

        password_input.style.outline = "1px solid red"
        password_lbl.style.color = "red"
        password_input.focus()
        password_span.parentElement.style.color = "red"
        password_input.title = "ERROR MESSAGE " //your validate message
        return false
    } else {
        password_input.style.outline = "1px solid green"
        password_lbl.style.color = "green"
        password_span.parentElement.style.color = "green"
        setTimeout(() => {
            password_span.parentElement.style.visibility = "hidden"
        }, 1500);
        return true
    }
}

function PasswordSeeCheck() {
    if (password_input.type == "text") {
        password_input.type = "password"
        document.getElementById("openPassword").style.visibility = "visible"
        document.getElementById("closePassword").style.visibility = "hidden"

    } else if (password_input.type == "password") {
        password_input.type = "text"
        document.getElementById("openPassword").style.visibility = "hidden"
        document.getElementById("closePassword").style.visibility = "visible"


    }
}