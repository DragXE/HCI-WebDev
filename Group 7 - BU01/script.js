window.onload = () =>{
    let form = document.getElementById("myform")
    let fullname = document.getElementById("fullname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let phone = document.getElementById("phone")
    let preferences = document.getElementsByName("preferences")
    let agreement = document.getElementById("agree")
    let errorMessages = document.getElementById("errorMessages")

    let error = []
    form.addEventListener("submit",(e)=>{

        error = []

        errorMessages.innerText = ''
        validateFullname()
        validateEmail()
        validatePassword()
        validatePhone()
        validatePreferences()
        validateAgreement()

        if(error.length > 0){
            for(err of error){
            errorMessages.innerText += err + '\n'
            }
            e.preventDefault()
        }else{
            alert('Form is submitted')
        }
    })

    function isEmpty(value){
        if(value === ''){
            return true
        }
        return false
    }

    function validateFullname(){
        let value = fullname.value.trim()

        if(isEmpty(value)){
            error.push("Name must be filled")
            return
        }

        if(value.length < 5){
            error.push("Full name must be at least 5 character long")
        }
    }

    function validateEmail(){
        let value = email.value.trim()
        if(isEmpty(value)){
            error.push("Email must be filled")
            return
        }

        let a = 0
        let count = 0
        while(a < value.length){
            if(value[a] == '@'){
                count ++
            }
            a++
        }

        if(count != 1){
            error.push("Wrong email format")
        }
    }

    function validatePassword(){
        let value = password.value.trim()

        if(isEmpty(value)){
            error.push("Password must be filled")
            return
        }

        if(value.length < 5){
            error.push("Password must be at least 5 character long")
        }
    }

    function validatePhone(){
        let value = phone.value.trim()

        if(isEmpty(value)){
            error.push("Phone must be filled")
            return
        }

        if (isNaN(value)){
            error.push("Please input numeric character")
            return
        }

        if(value.length < 10){
            error.push("Phone must be at least 10 numbers")
        }
    }

    function validatePreferences(){
        for(a of preferences){
            if(a.checked){
                return
            }
        }
        error.push("Preferences must be chosen")
    }

    function validateAgreement(){
        if(agreement.checked){
            return
        }
        error.push("You must agree this agreement")
    }
}