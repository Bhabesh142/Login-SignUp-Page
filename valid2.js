document.querySelector("#submit").addEventListener("click",function validate(event)
{   
	event.preventDefault();
    var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
    
	if (username === "") 
    {
		document.getElementById("errorMsg").innerHTML = "Please enter the username.";
	}

	if (username === "" && password === "" && password2 === "") 
    {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields.";
	}

	 if (password.length < 8) 
    {
		document.getElementById("errorMsg1").innerHTML = "Your password must include atleast 8 characters.";
	}

     if (password2.length < 8) 
    {
		document.getElementById("errorMsg2").innerHTML = "Your re-entered password must include atleast 8 characters.";
	}
	
	if(password===password2 && username!=="" && password!=="")
	{   
		
		alert("Successfully SignedUp.");
		location.reload();
	}
	
})