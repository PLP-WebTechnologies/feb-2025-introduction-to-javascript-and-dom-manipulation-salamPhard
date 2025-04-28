//Data Declaration
var welcome = document.getElementById("welcome");
var colorText = document.getElementById("colorText");
var changeColorBtn = document.getElementById("changeColorBtn");
const username = "Abduslaaam";


//Change text content dynamically
if (welcome.textContent === "")
{
    welcome.textContent = "Guest";
}
else
{
    welcome.textContent += username;
}

//Modify styles via JavaScript
function changeMyColor()
{
    if(colorText.style.color === "red")
    {
        colorText.style.color = "blue";
    }
    else
    {
        colorText.style.color = "red";
    }
}

//Add a textbutton
 function addTextBtn() {
    var form = document.getElementById("myForm");
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "add course";
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);
}

