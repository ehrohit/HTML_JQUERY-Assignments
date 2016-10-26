window.onload = function (){
    
    if(document.getElementById("signupid").addEventListener)  // Handling signup and login click . It will go to respective pages when clicked.
        {
            document.getElementById("signupid").addEventListener("click",function(){
            window.location.href = "assignment8_2_1.html"; })
        }
    if(document.getElementById("loginid").addEventListener)
        {
            document.getElementById("loginid").addEventListener("click",function(){
            window.location.href="assignment8_2_2.html";})
        }
    

};