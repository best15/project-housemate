var houseProfile = [];


//Check for null value from localstorage variable UserProfile
if (JSON.parse(localStorage.getItem("houseProfile") != null)){

    houseProfile = JSON.parse(localStorage.getItem("houseProfile"));
}

                    //LOGIN PAGE JS CODE

//Open create account page on click sign up button in login page
var signupbtn = document.getElementById("signup");

if (signupbtn != null){

signupbtn.addEventListener("click", onclicksignupbtn);

function onclicksignupbtn() {
    
    window.location.assign('./createaccount.html');
}
}


var UserName = document.getElementById('UserName');
var userPswd = document.getElementById('password');

var signinBtn = document.getElementById('signinbtn');


//addeventlistner on click of sign in button
if (signinBtn != null){
    signinBtn.addEventListener("click" , userloginvalidation);
}


function userloginvalidation(event) {

    event.preventDefault();

    houseProfile.forEach(finduser);

    function finduser(houseprofile) {

        if (UserName.value === houseprofile.Username && userPswd.value === houseprofile.password){
            //set current user
            //window.location.replace('./.html');
            console.log("Login credentials correct");
        }

    }
        
    //  alert("Incorrect UserName or Password");

}

                    //CREATE ACCOUNT PAGE JS CODE

// Create account on click of create account button
var housename = document.getElementById('house_name');
var address = document.getElementById('address');
var username = document.getElementById('username');
var userPassword = document.getElementById('password');
var userConfirmPassword = document.getElementById('c_password');
var createBtn = document.getElementById('CreateAccbtn');



var house_name;
var H_address;
var user_name;
var user_Password;
var user_C_Password;


if (createBtn != null){
    createBtn.addEventListener('click' , createaccount);
}

function createaccount(event) {

    event.preventDefault();

    house_name = housename.value;
    H_address = address.value;
    user_name = username.value;
    user_Password = userPassword.value;
    user_C_Password = userConfirmPassword.value;
    
    if(house_name == null || house_name == "" || H_address == null || H_address == "" || user_name == null || user_name == "" || user_Password == null || user_Password == "" || user_C_Password == null || user_C_Password == ""){
        alert("Please Fill All Required Field");
    }
    else if(user_Password != user_C_Password){
        alert("Your Password didn't match");
    }
    else if (userPassword.value.length < 8){
        alert("Your password must contains atleat 8 characters")
    }
    else{
        storeHouseProfile();
    }
    

}


function storeHouseProfile() {

    var housedetail = {

        houseName: house_name,
        Address: H_address,
        Username:user_name,
        password: user_Password

    };

    houseProfile.push(housedetail);

    localStorage.setItem("houseProfile", JSON.stringify(houseProfile));
      
    window.location.replace("./signUp.html");
    
}



  