$(document).ready(function() {

  function createBingeCard(binge) {
    var card = $('<div>').addClass('card');

    var cardBody = $('<div>').addClass('card-body');
    var cardTitle = $('<h4>').addClass('card-title');
      cardTitle.text(binge.title);
    var cardText = $('<p>').addClass('card-title');
      cardText.text(binge.short_desc); 

    cardBody.append(cardTitle);
    cardBody.append(cardText);
        
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