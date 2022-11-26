
Check()
function Check(params) {
    let users=JSON.parse(localStorage.getItem('users'))
    if (users===null) {
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
    
    if (regex.test(psw.value)&&upper.test(usr.value)&&regexemail.test(email.value)) {
        let users=JSON.parse(localStorage.getItem('users'))
        let check=true
        let checkem=false
        let checkun=false
        if (users.length==0) {
            users.push({
                Password:psw.value,
                UserName:usr.value,
                Email:email.value
            })
            localStorage.setItem('users',JSON.stringify(users))
            setTimeout(() => {
                location.reload()
                alert('Account Created')
            }, 100);
        }
        else{
            for(let user of users){
                if((user.UserName===usr.value||user.Email.toUpperCase()===email.value.toUpperCase())){
                    check=false
                }
                if((user.Email.toUpperCase()===email.value.toUpperCase())){
                    checkem=true
                    console.log(checkem);
                   
                }
                if(user.UserName===usr.value){
                    checkun=true
                    console.log(checkun);
                    
                }
            } 
            if (check) {
                users.push({
                    Password:psw.value,
                    UserName:usr.value,
                    Email:email.value
                })
                localStorage.setItem('users',JSON.stringify(users))
                setTimeout(() => {
                    location.reload()
                    alert('Account Created')
                }, 100);
            }
            if (checkun) {
                alert('This UserName already exist')
                usr.style.border='2px solid red'
            }
            if (checkem) {
                alert('This email address is already used')
                email.style.border='2px solid red'
            }
        }
    }
}
