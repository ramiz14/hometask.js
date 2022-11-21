let regex=new RegExp()
regex=/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/
let regexemail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
let upper=/^[A-Z][a-z0-9_-]{5,19}$/
let usr=document.querySelector('#usr')
let psw=document.querySelector('#psw')
let email=document.querySelector('#email')
var btn=document.getElementById('btn')
btn.onclick=function logn() {
    
    if (!regex.test(psw.value)) {
        psw.style.border='2px solid red'
    }
    else{
        psw.style.border=`2px solid #7fff00`
    }
    if (!upper.test(usr.value)) {
        usr.style.border='2px solid red'
    }
    else{
        usr.style.border=`2px solid #7fff00`
    }
    if (!regexemail.test(email.value)) {
        email.style.border='2px solid red'
    }
    else{
        email.style.border=`2px solid #7fff00`
    }
    setTimeout(() => {
        if (regex.test(psw.value)&&upper.test(usr.value)&&regexemail.test(email.value)) {
            location.reload()
            alert('logged in succesfully')
        }
    }, 100);
}