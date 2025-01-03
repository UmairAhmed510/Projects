const signupForm = document.getElementById('signup-form') 
const loginForm = document.getElementById('login-form')
const switchSignup = document.getElementById('switchSignUp')
const switchLogin = document.getElementById('switchLogin')
const signupEmail = document.getElementById('SignUp Email')
const SignUpPassword = document.getElementById('SignUp Password')
const signupBtn = document.getElementById('signup-btn')
// console.log(signupForm)

// function switchSignUp(){
//     switchSignUp.classList.add('hidden')
//     signupForm.classList.remove('hidden')
// }

switchSignup.addEventListener('click', ()=>{
    loginForm.classList.add('hidden')
    signupForm.classList.remove('hidden')
   
})
switchLogin.addEventListener('click', ()=>{
    loginForm.classList.remove('hidden')
    signupForm.classList.add('hidden')
   
   
})
signupBtn.addEventListener('click',()=>{
    
})
function signUp(){
    console.log(signupEmail.value);
    console.log(SignUpPassword.value);
}
function login(){
    console.log();
}





// signupBtn.addEventListener('click', async ()=> {
//     console.log('run')
//     const email = signupEmail.value
//     const password = signupPass.value
//     console.log(email,password)
//     const { data, error } = await supabaseClient.auth.signUp({email, password})
//     if(error){
//         console.log(error)
//     }else{
//         alert('signup Successfully')
//         console.log(data)
//     }
      

// })