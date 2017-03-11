
// $("#subans").keyup(function(event) {
//   if (event.keyCode == 13) {
//     $("#btn").click();
//   }
// });
$("#subans").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#btn").trigger('click');
    }
})
function check()
{
		var qid = $("#home").attr("qid");
	    var points =$("#home").attr("points");
		var subans = $("#subans").val();
		var query = {};
		query.qid = qid;
		query.subans = subans;
		query.points = points;
		console.log(query);
	    $.post("/i/verify", query, function(data) {
	    	if(data=="correct")
	    	{
	    		location.reload();
	    	}
	    	else
	    	{
	    		alert("Incorrect");
	    	}
	    });
	    
}


function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('passwordsignup');
    var pass2 = document.getElementById('passwordsignup_confirm');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}  


