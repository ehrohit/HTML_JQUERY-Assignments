window.onload = function (){  // JS to handle the signup click handler and adding the password and login in the local storage
    
    if(document.getElementById("signup").addEventListener){
    
                  document.getElementById("signup").addEventListener("click",function() {
                  console.log("Entering local storage");
                  var name = document.getElementById("name").value;
                  localStorage.setItem("name",name);
                  var email = document.getElementById("email_id").value;
                  localStorage.setItem("email",email);
                  var password = document.getElementById("pass").value;
                  localStorage.setItem("pass",password);
                  document.getElementById("resultSignup").innerHTML="Signup Successfull";})}
    
    if(document.getElementById("backid").addEventListener) { // Handling the back button 
        
        document.getElementById("backid").addEventListener("click",function(){
        window.location.href= "assignment8_2.html";})

                                                   
}};

