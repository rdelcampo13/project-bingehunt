$(document).ready(function() {
  
  function updateBingeUpvotes(bingeId) {
    $.ajax({
      method: 'GET',
      url: '/api/binges/' + bingeId,
      dataType: 'JSON'
    })
    .done(function(binge) {      
      $('#upvote-binge-' + binge.id).text(binge.upvotes)
    });
  };
  
  $(document).on("click", ".upvote-btn", function() {
    var bingeId = $(this).children("span").data("data-bingeId");

    var data = {
      bingeId: bingeId
    }
    
    // Send POST request for new upvote.
    $.ajax("/api/upvotes", {
      type: "POST",
      data: data
    }).then(function(newUpvote) {
      if (newUpvote.isLoggedIn === false) {
        $('#loginModal').modal('show');
      } 
      
      updateBingeUpvotes(bingeId);      
    });
  });

  
});