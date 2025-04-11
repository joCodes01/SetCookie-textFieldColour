
//Programmer: Joanna Wand
//Date: 7th April 2025
//Purpose of program is to set the form text field colour based on user preferences 
//which is stored in the cookie data, store that information in a browser cookie, and 
//recall the colour when the user re-visits the page.




//set a variable for the expiry date in correct format.
let expires;

function getExpiryDate(){
let expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);
expires = expirationDate.toUTCString();
}


//set a varialble for user colour
let userColour;


//On page load (which is set in html body element), set the text field colour based on the cookie data 
//userColour value.

function setUserChoice() {
    userColour = getCookie("userColour");
   
  
//if the cookie "name = userCookie" exists then use the value for the text field BG colour
     if( getCookie("userColour")) {
        document.querySelector("#textField").style.backgroundColor = userColour;
       
//otherwise display the default colour
    }else {
        return;
    }
    }




//SET COOKIES

//when setColour button is clicked set the document.cookie userColour value to users colour choice
//and set the textField background colour to users colour shoice.
    
function setColour() {

    let colourChoice = document.querySelector('#colourChoice');
    let userColour = colourChoice.value;
    console.log(userColour);
    document.querySelector("#textField").style.backgroundColor = userColour;
    getExpiryDate()
    document.cookie = `userColour=${userColour}; expires=${expires}; path="/"`;
}



// set a function to retrieve the name value and return it as a clean string.
function getCookie(name) {
    let cookieArr = document.cookie.split(';');

    for( let i = 0; i < cookieArr.length; i++ ) {
        let cookie = cookieArr[i].trim();
        if(cookie.startsWith( name + '=' )) {
            return cookie.substring(name.length +1);
        }
    }
    return null;
}








