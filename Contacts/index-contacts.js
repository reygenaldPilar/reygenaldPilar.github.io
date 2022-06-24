function checkEmail() {
    
    let email = document.getElementsByClassName("text2").value;
    //var filterer = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == "rey"){
        document.getElementById("demo").innerHTML = "invalid";
    }else if (email == "pop"){
        document.getElementById("demo").innerHTML = "valid";
    }
}
    
