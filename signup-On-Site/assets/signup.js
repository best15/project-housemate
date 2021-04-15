
//Open create account page on click sign up button
var signupbtn = document.getElementById("signup");

if (signupbtn != null){
signupbtn.addEventListener("click", onclicksignupbtn);

function onclicksignupbtn() {
    
    window.location.replace('./createaccount.html');
}
}

// Create account on click of create account button
var userFirstname = document.getElementById('first_name');
var userLastname = document.getElementById('last_name');
var userEmail = document.getElementById('email_address');
var userPassword = document.getElementById('password');
var userConfirmPassword = document.getElementById('c_password');
var createBtn = document.getElementById('CreateAccbtn');

var UserProfile = [];
var user_F_name;
var user_L_name;
var user_Email;
var user_Password;



createBtn.addEventListener('click' , createuseraccount);

function createuseraccount(event) {

    event.preventDefault();
    //validation for password and confirm password

    user_F_name = userFirstname.value;
    user_L_name = userLastname.value;
    user_Email = userEmail.value;
    user_Password = userPassword.value;
    
    storeUserProfile();

}


function storeUserProfile() {

var userdetails = {

    firstname: user_F_name,
    lastname: user_L_name,
    email:user_Email,
    password: user_Password

};
UserProfile.push(userdetails);

    localStorage.setItem("UserProfile", JSON.stringify(UserProfile));
   

   console.log(JSON.parse(localStorage.getItem("UserProfile")));
}