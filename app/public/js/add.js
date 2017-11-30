$(document).ready(function() {

  function createBingeCard(binge) {
    var card = $('<div>').addClass('card');
      card.attr('id', 'binge-' + binge.id);

    var cardBody = $('<div>').addClass('card-body fadeInRight');
    var cardTitle = $('<h4>').addClass('card-title');
      cardTitle.text(binge.title);
    var cardText = $('<p>').addClass('card-title');
      cardText.text(binge.short_desc); 

    var cardBtnUpvote = $('<a>').addClass('btn btn-warning card-btn upvote-btn');        
    var cardUpvoteIcon = $('<i>').addClass('fa fa-caret-up card-icon');
    var cardUpvoteCount = $('<span>').addClass('upvote-count');
      cardUpvoteCount.data("data-upvotes", binge.upvotes); 
      cardUpvoteCount.data("data-bingeId", binge.id);
      cardUpvoteCount.attr('id', 'upvote-binge-' + binge.id);
      cardUpvoteCount.text(binge.upvotes); 

    var cardBtnSave = $('<a>').addClass('btn btn-warning card-btn save-btn');        
    var cardSaveIcon = $('<i>').attr('id', 'fav-icon-binge-' + binge.id);
      cardSaveIcon.addClass('fa fa-plus-circle card-icon');
    var cardSaveText = $('<span>').addClass('save-text');
      cardSaveText.data("data-bingeId", binge.id);
      cardSaveText.attr('id', 'fav-binge-' + binge.id);
      cardSaveText.text('Save'); 
    
    cardBtnUpvote.append(cardUpvoteIcon);
    cardBtnUpvote.append(cardUpvoteCount);

    cardBtnSave.append(cardSaveIcon);
    cardBtnSave.append(cardSaveText);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardBtnUpvote);
    cardBody.append(cardBtnSave);
        
    card.append(cardBody);

    return card
  };

  //Input that determine what fields to show
  $("#type").change(function() {
    if ($("#type").val() === "Streaming") {
      $("#streamPlatformDiv").removeClass("d-none");
    } else {
      $("#streamPlatformDiv").addClass("d-none");
    };

    if ($("#type").val() === "Web") {
      $("#webPlatformDiv").removeClass("d-none");
    } else {
      $("#webPlatformDiv").addClass("d-none");
    };
  })

  // Post
  $("#add").on("submit", function(event) {
    event.preventDefault();

    var titleInput = $("#title").val();
    var typeInput = $("#type").val();
    var shortDescInput = $("#shortDesc").val();

    var platformInput;

    switch (typeInput) {
      case "Streaming":
        var platformInput = $("#streamPlatform").val();
        break;
      case "Web":
        var platformInput = $("#webPlatform").val();
        break;

      default:
        var platformInput = typeInput;
    };

    // Wont submit the post if we are missing a body, title, or author
    if (titleInput === '' || typeInput === null || platformInput === null || shortDescInput === '') {
      $("#formMessage").append("<div class='alert alert-danger'>Please fill in all required fields</div>")
      return;
    };

    var data = {
      title: titleInput.trim(),
      type: typeInput.trim(),
      platform: platformInput.trim(),
      short_desc: shortDescInput.trim(),
    };

    // Send the POST request.
    $.ajax("/api/binges", {
      type: "POST",
      data: data
    }).then(function(newBinge) {

      $("#addDiv").addClass("d-none");
      $("#successDiv").removeClass("d-none");

      var newBingeDiv = $("#newBinge");
      newBingeDiv.append(createBingeCard(newBinge))

    });

  })

}); // close ready function