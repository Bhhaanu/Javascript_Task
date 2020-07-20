function login()
	{

		var email= document.getElementById("t1").value;
		var pwd= document.getElementById("t2").value;
		
		if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
        }
        else
		{				                            
               alert('Thank You for Login ');
		}
    }