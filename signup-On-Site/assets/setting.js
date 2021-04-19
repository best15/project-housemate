                   //SETTING PAGE JS CODE

                    //ADD HOUSEMEMBERS NAME                   
var houseProfile = JSON.parse(localStorage.getItem("houseProfile"));
var addhousemembers = document.getElementById("addnamebtn");
var housememberdiv = document.getElementById("housememberdiv");
var saveName = document.getElementById("savenamebtn");

var currentuser = JSON.parse(localStorage.getItem("currentuser"));

var membername = []; //store all housemember name in an array 


if(currentuser.hasOwnProperty('housemembers')){

    for(var i = 1; i <= currentuser.housemembers.length;i++)
    {   
        var memberEl = document.createElement("input");
        memberEl.setAttribute('id' , "housemate_" + i );
        memberEl.setAttribute('class' , "mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-md sm:text-sm border-red-900 rounded-md" );
        memberEl.disabled = true;
        housememberdiv.append(memberEl);
        memberEl.value = currentuser.housemembers[i-1];
    }
    }else{
        for (i=1; i<3; i++)
        {
        var memberEl = document.createElement("input");
        document.createElement("input");
        memberEl.setAttribute('id' , "housemate_" + i );
        memberEl.setAttribute('class' , "mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-md sm:text-sm border-red-900 rounded-md" );  
        housememberdiv.append(memberEl);
        }
    }
    

if(addhousemembers != null){
addhousemembers.addEventListener("click", addnewmemberfield);
}

function addnewmemberfield(event) {
    event.preventDefault();
    var housemate1 = document.getElementById("housemate_1");
    var i = housememberdiv.childElementCount;
    
    var NewMember = housemate1.cloneNode();

    NewMember.setAttribute('id' , "housemate_" + i);
    
    housememberdiv.append(NewMember);
    NewMember.value = '';  
    NewMember.disabled = false;                  

}

if(saveName != null){
    saveName.addEventListener("click", saveHouseMembers);
}

function saveHouseMembers(event) {
    event.preventDefault();
    
    
    houseProfile.forEach(element => {
        
        if (element.Username === currentuser.Username){
            
            for(var i = 1; i<housememberdiv.childElementCount;i++)
            {   
                var members = document.getElementById("housemate_" + i);
                membername.push(members.value);
                members.disabled = true;
            }
            element.housemembers = membername;
            localStorage.setItem("houseProfile", JSON.stringify(houseProfile));
            localStorage.setItem("currentuser", JSON.stringify(houseProfile));
        }
    });
}

                //ADD CHORES
var choreNames = []; //store all chores in an array
var addchores = document.getElementById("add_chore_btn");
var chorediv = document.getElementById("chores");
var savechores = document.getElementById("save_chore_btn");


if(currentuser.hasOwnProperty('chores')){

    for(var i = 1; i <= currentuser.chores.length;i++)
    {   
        var choreEl = document.createElement("input");
        choreEl.setAttribute('id' , "chore_" + i );
        choreEl.setAttribute('class' , "mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-md sm:text-sm border-red-900 rounded-md" );
        choreEl.disabled = true;
        chorediv.append(choreEl);
        choreEl.value = currentuser.chores[i-1];
    }
    }else{
        var i = 1;
        var choreEl = document.createElement("input");
        document.createElement("input");
        choreEl.setAttribute('id' , "chore_" + i );
        choreEl.setAttribute('class' , "mt-3 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-md sm:text-sm border-red-900 rounded-md" );  
        chorediv.append(choreEl);
        }
    
if(addchores != null){
    addchores.addEventListener("click", addNewChore);
    }
    
    function addNewChore(event) {
        event.preventDefault();
        var chore1 = document.getElementById("chore_1");
        var i = chorediv.childElementCount + 1;
        
        var newChore = chore1.cloneNode();
    
        newChore.setAttribute('id' , "chore_" + i);
        
        chorediv.append(newChore);
        newChore.value = ''; 
        newChore.disabled = false;                   
    
    }        

if(savechores != null){
    savechores.addEventListener("click", saveChores);
    }
function saveChores(event) {
    event.preventDefault();
    
    houseProfile.forEach(element => {
        
        if (element.Username === currentuser.Username){
            
            for(var i = 1; i<=chorediv.childElementCount;i++)
            {   
                var chores = document.getElementById("chore_" + i);
                choreNames.push(chores.value);
                chores.disabled = true;
            }
            element.chores = choreNames;
            localStorage.setItem("houseProfile", JSON.stringify(houseProfile));
            localStorage.setItem("currentuser", JSON.stringify(houseProfile));
        }
    });
}