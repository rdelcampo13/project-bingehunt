$(document).ready(function() {
    
  $(document).on("click", ".save-btn", function() {
    var bingeId = $(this).children("span").data("data-bingeId");

    var data = {
      bingeId: bingeId
    }
    
    // Send POST request for new favorite.
    $.ajax("/api/favorites", {
      type: "POST",
      data: data
    }).then(function(newFavorite) {
      if (newFavorite.isLoggedIn === false) {
        $('#loginModalType').text('save');        
        $('#loginModal').modal('show');
      } 

      if (newFavorite.created) {
        $('#fav-binge-' + bingeId).text("Saved")
        $('#fav-icon-binge-' + bingeId).removeClass("fa-plus-circle")              
        $('#fav-icon-binge-' + bingeId).addClass("fa-check")              
      }
      
      else {
        $('#fav-binge-' + bingeId).text("Save")
        $('#fav-icon-binge-' + bingeId).removeClass("fa-check")                    
        $('#fav-icon-binge-' + bingeId).addClass("fa-plus-circle")                      
      }    
    });
  });
  
});