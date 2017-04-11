function ValidateForm()
{
    var fname = document.myForm.firstname;
    var lname = document.myForm.lastname;
    var hnum = document.myForm.housenumber;
    var strt = document.myForm.street;
    var cty = document.myForm.city;
    var pvince = document.myForm.province;
    var zcode = document.myForm.zipcode;

    var phnum0 = document.myForm.phone0;
    var phnum1 = document.myForm.phone1;
    var phnum2 = document.myForm.phone2;

    var cphnum0 = document.myForm.cphone0;
    var cphnum1 = document.myForm.cphone1;
    var cphnum2 = document.myForm.cphone2;

    var bday = document.myForm.birthday;

    var czsnum1 = document.myForm.cznum1;
    var czsnum2 = document.myForm.cznum2;
    var czsnum3 = document.myForm.cznum3;
    var czsnum4 = document.myForm.cznum4;
    var czsnum4 = document.myForm.cznum5;
    var czsnum6 = document.myForm.cznum6;
    var czsnum7 = document.myForm.cznum7;
    var czsnum8 = document.myForm.cznum8;
    var czsnum9 = document.myForm.cznum9;
    var czsnum10 = document.myForm.cznum10;
    var czsnum11 = document.myForm.cznum11;
    var czsnum12 = document.myForm.cznum12;
    var czsnum13 = document.myForm.cznum13;

    var zosign = document.myForm.zodiacsign;
    var zoyear = document.myForm.zodiacyear;
    var bdow = document.myForm.birthweek;

    if (fname.value == "")
    {
        window.alert("Please filled in the FIRST NAME field.");
        fname.focus();
        return false;
    }
    if (lname.value == "")
    {
        window.alert("Please filled in the LAST NAME field.");
        lname.focus();
        return false;
    }
    if (hnum.value == "")
    {
        window.alert("Please filled in the HOUSE NUMBER field.");
        hnum.focus();
        return false;
    }
    if (street.value == "")
    {
        window.alert("Please filled in the STREET field.");
        strt.focus();
        return false;
    }
    if (cty.value == "")
    {
        window.alert("Please filled in the CITY field.");
        cty.focus();
        return false;
    }
    if (pvince.value == "")
    {
        window.alert("Please filled in the PROVINCE field.");
        pvince.focus();
        return false;
    }
    if (zcode.value == "")
    {
        window.alert("Please filled in the ZIPCODE field.");
        zcode.focus();
        return false;
    }
	if (phnum0.value == "" || phnum1.value == "" || phnum2.value == "")
    {
        window.alert("Please filled in the PHONE NUMBER field.");
        return false;
    }
    if (cphnum0.value == "" || cphnum1.value == "" || cphnum2.value == "")
    {
        window.alert("Please filled in the CELL PHONE NUMBER field.");
        return false;
    }
	if (bday.value == "")
    {
        window.alert("Please selected your BIRTHDAY.");
        zcode.focus();
        return false;
    }
    if (czsnum1.value == "" || czsnum2.value == "" || czsnum3.value == "" 
    	|| czsnum4.value == "" || czsnum5.value == "" || czsnum6.value == ""
    	|| czsnum7.value == "" || czsnum8.value == "" || czsnum9.value == ""
    	|| czsnum10.value == "" || czsnum11.value == "" || czsnum12.value == "" || czsnum13.value == "" )
    {
        window.alert("Please filled in the CITIZENSHIP NUMBER field.");
        return false;
    }

    if (zosign.selectedIndex < 1)
    {
        window.alert("Please selected your ZODIAC SIGN.");
        zcode.focus();
        return false;
    }

    if (zoyear.selectedIndex < 1)
    {
        window.alert("Please selected your ZODIAC YEAR.");
        zcode.focus();
        return false;
    }

    if (bdow.selectedIndex < 1)
    {
        window.alert("Please selected your BIRTH DAY OF WEEK.");
        zcode.focus();
        return false;
    }
    return true;
}

var isNN = (navigator.appName.indexOf("Netscape")!=-1);
function autoTab(input,len, e) {
	var keyCode = (isNN) ? e.which : e.keyCode; 
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
	if(input.value.length >= len && !containsElement(filter,keyCode)) {
		input.value = input.value.slice(0, len);
		if(arguments[3]){
			input.form[(getIndex(input)+arguments[3]) % input.form.length].focus();
		}else{
			input.form[(getIndex(input)+1) % input.form.length].focus();
		}
	}

	function containsElement(arr, ele) {
		var found = false, index = 0;
		while(!found && index < arr.length)
			if(arr[index] == ele)
				found = true;
			else
				index++;
		return found;
	}
	function getIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
			if (input.form[i] == input)
				index = i;
			else 
				i++;
		return index;
	}
return true;
}