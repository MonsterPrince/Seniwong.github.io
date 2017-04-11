
$(document).ready(function(){
  if(typeof(Storage) == "undefined") {   
    alert("Not storage support");
  }

  $("#btnSave").click(function(){
    localStorage.setItem("sFName", $("#firstname").val());
    localStorage.setItem("sLName", $("#lastname").val());
    localStorage.setItem("sHNum", $("#housenumber").val());
    localStorage.setItem("sStreet", $("#street").val());
    localStorage.setItem("sCity", $("#city").val());
    localStorage.setItem("sPvince", $("#province").val());
    localStorage.setItem("sZip", $("#zipcode").val());

    localStorage.setItem("sPhone0", $("#phone0").val());
    localStorage.setItem("sPhone1", $("#phone1").val());
    localStorage.setItem("sPhone2", $("#phone2").val());

    localStorage.setItem("sCPhone0", $("#cphone0").val());
    localStorage.setItem("sCPhone1", $("#cphone1").val());
    localStorage.setItem("sCPhone2", $("#cphone2").val());

    localStorage.setItem("sBDate", $("#date").val());
    
    localStorage.setItem("sCity", $("#city").val());
    localStorage.setItem("sPvince", $("#province").val());
    localStorage.setItem("sZip", $("#zipcode").val());


    window.location=this;
  });
});

function setCookie(cname,cvalue,expdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

