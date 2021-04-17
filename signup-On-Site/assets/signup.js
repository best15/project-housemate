
                    //LOGIN PAGE JS CODE

//Open create account page on click sign up button in login page
var signupbtn = document.getElementById("signup");

if (signupbtn != null){

signupbtn.addEventListener("click", onclicksignupbtn);

function onclicksignupbtn() {
    
    window.location.assign('./createaccount.html');
}
}

//User Email and password validation for login
var userEmailaddress = document.getElementById('email-address');
var userPswd = document.getElementById('password');

var signinBtn = document.getElementById('signinbtn');


//addeventlistner on click of sign in button
if (signinBtn != null){
    signinBtn.addEventListener("click" , userloginvalidation);
}


function userloginvalidation(event) {

    event.preventDefault();

    UserProfile.forEach(finduser);

    function finduser(user) {

        if (userEmailaddress.value === user.email && userPswd.value === user.password){
            //window.location.replace('./.html');
            console.log("Login credentials correct");
        }

    }
        
     alert("Incorrect EmailAddress or Password");

}

                    //CREATE ACCOUNT PAGE JS CODE

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
var user_C_Password;

//Check for null value from localstorage variable UserProfile
if (JSON.parse(localStorage.getItem("UserProfile") != null)){

    UserProfile = JSON.parse(localStorage.getItem("UserProfile"));
}

userPassword.onblur = (password_length_validate);

function password_length_validate() {

}

if (createBtn != null){
    createBtn.addEventListener('click' , createuseraccount);
}

function createuseraccount(event) {

    event.preventDefault();

    user_F_name = userFirstname.value;
    user_L_name = userLastname.value;
    user_Email = userEmail.value;
    user_Password = userPassword.value;
    user_C_Password = userConfirmPassword.value;
    
    if(user_F_name == null || user_F_name == "" || user_L_name == null || user_L_name == "" || user_Email == null || user_Email == "" || user_Password == null || user_Password == "" || user_C_Password == null || user_C_Password == ""){
        alert("Please Fill All Required Field");
    }
    else if(user_Password != user_C_Password){
        alert("Your Password didn't match");
    }
    else if (userPassword.value.length < 8){
        alert("Your password must contains atleat 8 characters")
    }
    else{
        storeUserProfile();
    }
    

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