
                         //JS FOR MAINPAGE

var currentuser = JSON.parse(localStorage.getItem("currentuser"));

var housename = document.getElementById('housename');
housename.textContent = currentuser.houseName;


if (currentuser.hasOwnProperty('chores')){

    currentuser.chores.forEach(chores => {
        
        var choresName = document.createElement("div");
        choresName.setAttribute('class' , "px-4 py-6 my-2 bg-green-50 text-center font-bold italic sm:px-6" );  
        choreslist.append(choresName);
        choresName.innerHTML = chores;
        
    });

} 
else{
    var choresName = document.createElement("div");
    choresName.setAttribute('class' , "px-4 py-6 my-2 bg-green-50 text-center font-bold italic sm:px-6" );  
    choreslist.append(choresName);
    choresName.innerHTML = "Add New Chores from settings tab!";
}