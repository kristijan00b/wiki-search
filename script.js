function getLucky() {
  var luck = "https://en.wikipedia.org/wiki/Special:Random"
  window.open(luck, '_blank');
}

$(document).ready(function(){
 
  $("#search").click(function(){
   
    var searchBar = $("#searchBar").val();
    
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBar + "&format=json&callback=?";
    $.ajax ({
      type: "GET",
      url:api,
      async: false,
      dataType: "json",
      success: function(data) {
        
        $("#output").html(' ');
          
        for(var i = 0; i < data[1].length; i++ ){
          $("#output").prepend("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
        } 
          
        $("#searchBar").val(' ');
          
        },
      error: function(erorrMessage){
        alert("Error");
      }
      
    });
  });

  $("#searchBar").keypress(function(e){
    if (e.which == 13) {
        $("#search").click();
    }
    });
});