$(document).ready(function() {
  var binges = [];


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

  $('.binge-nav').on("click", function() {
    var bingeFilterType = $(this).attr('id');
    var bingeList = $("#bingeList");

    bingeList.empty();

    if (bingeFilterType === 'All') {
      binges.forEach(function(binge) {
        bingeList.append(createBingeCard(binge))
      });
    } else {
      binges.forEach(function(binge) {
        if (binge.type === bingeFilterType) {
          bingeList.append(createBingeCard(binge));
        };
      });
    };
  });

  // GET all binges
  $.ajax({
    method: 'GET',
    url: '/api/binges',
    dataType: 'JSON'
  })
  .done(function(dbBinges) {

    var bingeList = $("#bingeList");

    dbBinges.forEach(function(binge) {
      binges.push(binge);
      bingeList.append(createBingeCard(binge));
    });

  });

});