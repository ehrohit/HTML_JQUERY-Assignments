$(document).ready(function() {
   
                  $("#change").on("click",function(){   // Logic to se the text of the Anchor tag
    $("#acadgild").text("JQery Set Get Tutorial");
});

  
                  $("#change_link").on("click",function(){
    $("#acadgild").attr("href","www.acadgild.com/jQuery");   //Logic to change the link of href
});
                  
                  
                  });