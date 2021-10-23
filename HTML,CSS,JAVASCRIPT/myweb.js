//for login page
function Loginpage()
{
    var Uname= document.getElementById('uname');
    var password1= document.getElementById('pass1');
    var password2= document.getElementById('pass2');
    if((Uname.value.length==0))
    {
        alert("please enter valid USER name");
    }
    else if ((password1.value.length==0) || (password2.value.length==0))
    {
        alert("enter password");
    }
    else if ((password1.value.length<8) || (password2.value.length<8))
    {
        alert("enter min 8 digit/char password");
    }
    else if(password1.value != password2.value)
    {
        alert("The passwords entered don't match");
    }
    else{
        alert("You entered USER name: " + Uname.value + "\n Password1: " + password1.value+ "\n Password2: " + password2.value);
    }

}

//for registration
function mybutton()
{
    var myFname= document.getElementById('fname');
    var myLname = document.getElementById('lname');

    if((myFname.value.length==0) || (myLname.value.length==0))
    {
        alert("please enter valid first/last name");
    }
    else{
        alert("You entered FIRST name: " + myFname.value + "\nlast name: " + myLname.value);
    }
}
///for form
function formsubmit()
{
    var myFname= document.getElementById('fname');
    var myLname = document.getElementById('lname');
    var myAge = document.getElementById('age');
    var myEmail = document.getElementById('email');
    var mycntry = document.getElementById('country');

    if((myFname.value.length==0) || (myLname.value.length==0))
    {
        alert("plz enter valid name");
    }
    else if(myAge.value <=0)
    {
        alert("plz enter valid age");
    }
    else if(myEmail.value.length ==0)
    {
        alert("plz enter valid email");
    }
    else if(mycntry.value.length ==0)
    {
        alert("plz enter valid country");
    }
    else
    {
        alert("You entered FIRST name:" + myFname.value + "\n last name:  " + myLname.value + "\nsubmitted");
    }

}
