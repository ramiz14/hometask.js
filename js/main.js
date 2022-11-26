Check()
function Check(params) {
    let users=JSON.parse(localStorage.getItem('users'))
    if (users===null) {
        console.log('salam');
        localStorage.setItem('users',JSON.stringify([]))
    }
}

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
    let countun=0
    if (regex.test(psw.value)&&upper.test(usr.value)&&regexemail.test(email.value)) {
        let users=JSON.parse(localStorage.getItem('users'))
        for(let user of users){
            if((user.UserName===usr.value&&user.Email.toUpperCase()===email.value.toUpperCase()&&user.Password===psw.value)){
                setTimeout(() => {
                    location.reload()
                    alert('Logged in Successfully')
                }, 100);
                break
            }
            if(!(user.UserName===usr.value)){
                countun++
            }
            else{
                if (!(user.Password===psw.value)) {
                    alert('Sifre duzgun deyildir')
                    psw.style.border='2px solid red' 
                }
                else{
                    alert('Email duzgun deyildir')
                    email.style.border='2px solid red'
                }
            }
        }
        if (countun===users.length) {
            alert('Bele istifadeci movcud deyildir')
            usr.style.border='2px solid red'
        }
    }
}