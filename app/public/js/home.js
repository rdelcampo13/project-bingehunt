$(document).ready(function() {
  var binges = [];

  function createBingeCard(binge, i) {
    var card = $('<div>').addClass('card');
      card.attr('id', 'binge-' + binge.id);

    var cardBody = $('<div>').addClass('card-body');
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
  
  
  $('.binge-nav').on("click", function() {
    var bingeFilterType = $(this).attr('id');
    var bingeList = $("#bingeList");

    bingeList.empty();

    if (bingeFilterType === 'All') {
      binges.forEach(function(binge, i) {
        setTimeout(() => bingeList.append(createBingeCard(binge)), i*1000)
      });
    } else {
      binges.filter(function(binge) {
        return binge.type === bingeFilterType
      }).forEach(function(binge, i) {
        setTimeout(() => bingeList.append(createBingeCard(binge)), i*1000);        
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

    dbBinges.forEach(function(binge, i) {
      binges.push(binge);
      setTimeout(() => bingeList.append(createBingeCard(binge)), i*1000)
    });

  });

});