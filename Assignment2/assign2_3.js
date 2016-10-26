window.onload = function (){
    if(document.getElementById("signinid").addEventListener)
    {
                                 document.getElementById("signinid").addEventListener("click",function() { // Handling the signin id
                                                        
                                                         console.log(" I am here 1");
                                                         var email = document.getElementById("emailid").value;
                                                          var pass = document.getElementById("pass").value;
                                                        console.log(" I am here 2");
                                                           if(email==localStorage.getItem("email")&& pass==localStorage.getItem("pass"))
                                                          {
                                                            window.location.href = "assignment8_2_3.html";
                                                           }
                                                       else{
                                                             document.getElementById("errmsg").innerHTML=" Sorry Wrong Credentials";
                                                            }

    })}
    if(document.getElementById("logoutid").addEventListener){
              document.getElementById("logoutid").addEventListener("click",function() { // Logout is moved to the front page.
                  window.location.href= "assignment8_2.html";})}
};
    