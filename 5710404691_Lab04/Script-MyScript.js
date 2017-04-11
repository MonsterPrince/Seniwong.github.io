function submitFunction(){
	var now = new Date();

	if ($("#firstname").val() == ""){
		alert("Please fill in your Firstname");
		saveSession();
		// return false;
	} else if ($("#lastname").val() == ""){
		alert("Please fill in your Lastname");
		saveSession();
		// return false;
	} else if ((now.getFullYear())-($("#year").val()) <= 3){
		alert("Your Birthday was incorrect!!\nPlease check your Birthday again");
		saveSession();
		// return false;
	} else if ($("#province").val() == ""){
		alert("Please select the Province");
		saveSession();
		// return false;
	} else {
		var fname = $("#firstname").val();
		var lname = $("#lastname").val();
		var bdmonth = $("#month").val();
		var bddate = $("#day").val();
		var bdyear = $("#year").val();
		var age = (now.getFullYear())-($("#year").val());
		var gder = $("#gender").val();
		var prov = $("#province").val();
		sessionStorage.clear();

		if (fname !== "" && lname!=="" && prov !== "") {
			alert("Hello "+ fname + " " + lname + "\n^_^ Welcome to Thailand!");
			localStorage.setItem("first_name", fname);
		    localStorage.setItem("last_name", lname);
		    localStorage.setItem("birth_month", bdmonth);
		    localStorage.setItem("birth_date", bddate);
		    localStorage.setItem("birth_year", bdyear);
		    localStorage.setItem("local_age", age);
		    localStorage.setItem("gender_type", gder);
		    localStorage.setItem("province", prov);

		    if(age < 13){
				$("#Body").css('background-image', 'url(img/PhineasAndFerb.png)');
			} else if (gder == "Male"){
				$("#Body").css('background-image', 'url(img/SunsetForestDeer.jpg)');
			} else if (gder == "Female"){
				$("#Body").css('background-image', 'url(img/TrainToMountain.png)');
			}
			return true;
		}
}}

function saveSession(){
	sessionStorage.setItem("first_name", ($("#firstname").val()));
	sessionStorage.setItem("last_name", ($("#lastname").val()));
	sessionStorage.setItem("birth_month", ($("#month").val()));
	sessionStorage.setItem("birth_date", ($("#day").val()));
	sessionStorage.setItem("birth_year", ($("#year").val()));
	sessionStorage.setItem("local_age", (now.getFullYear())-($("#year").val()));
	sessionStorage.setItem("gender_type", ($("#gender").val()));
	sessionStorage.setItem("province", ($("#province").val()));
	return false;
	window.onload = function(){
		$("#firstname").val() = sessionStorage.getItem("first_name")
		$("#lastname").val() = sessionStorage.getItem("last_name")
		$("#month").val() = sessionStorage.getItem("birth_month")
		$("#day").val() = sessionStorage.getItem("birth_date")
		$("#year").val() = sessionStorage.getItem("birth_year")
		$("#gender").val() = sessionStorage.getItem("gender_type")
		$("#province").val() = sessionStorage.getItem("province")
	}
}
