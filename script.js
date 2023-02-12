//your code here
function guess(){
	var userNumber = document.getElementById('guess').value;
	var rand = Math.random();

	if(userNumber == rand){
		document.getElementById('respond').innerHTML = "Hot";
	}else{
		document.getElementById('respond').innerHTML = "Cold";
	}
}
