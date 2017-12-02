$(document).ready(function() {
  var binges = [];

  function createBingeCard(binge) {
    var card = $('<div>').addClass('card animated animatedFadeInUp fadeInUp');
      card.attr('id', 'binge-' + binge.id);

    var cardBody = $('<div>').addClass('card-body');
    var cardTitle = $('<h4>').addClass('card-title card-content');
      cardTitle.text(binge.title);
    var cardText = $('<p>').addClass('card-title card-content');
      cardText.text(binge.short_desc); 

    var cardImg = $('<img>').addClass('float-left card-img');

      switch (binge.platform) {
        case "Film":
          cardImg.attr('src', '/img/cards/movie.png');
          cardImg.addClass('movie-img');
          break;
        case "Television":
          cardImg.attr('src', '/img/cards/tv.png');
          cardImg.addClass('tv-img');
          break;
        case "Netflix":
          cardImg.attr('src', '/img/cards/netflix.png');
          break;
        case "Hulu":
          cardImg.attr('src', '/img/cards/hulu.jpg');
          break;
        case "Amazon Prime":
          cardImg.attr('src', '/img/cards/amazon.jpg');
          break;
        case "HBO Go":
          cardImg.attr('src', '/img/cards/hbo.jpg');
          break;
        case "YouTube":
          cardImg.attr('src', '/img/cards/youtube.png');
          break;
        case "Twitch":
          cardImg.attr('src', '/img/cards/twitch.png');
          break;
        default:
          cardImg.attr('src', '/img/cards/netflix.png');  
      }

    var cardBtnGroup = $('<a>').addClass('card-btn-group card-content');        

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

    cardBtnGroup.append(cardBtnUpvote);
    cardBtnGroup.append(cardBtnSave);

    cardBody.append(cardImg);
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardBtnGroup);
        
    card.append(cardBody);

    return card
  };
  
  function getFavorites() {
    $.ajax({
      method: 'GET',
      url: '/api/favorites/',
      dataType: 'JSON'
    })
    .done(function(favorites) {
      if (favorites.isLoggedIn === false) {
        return
      }
      
      favorites.forEach(function(favorite) {
        $('#fav-binge-' + favorite.bingeId).text("Saved")
        $('#fav-icon-binge-' + favorite.bingeId).removeClass("fa-plus-circle")              
        $('#fav-icon-binge-' + favorite.bingeId).addClass("fa-check")              
      });          
    });    
  }
  
  
  $('.binge-nav').on("click", function() {
    var bingeFilterType = $(this).attr('id');
    var bingeList = $("#bingeList");

    bingeList.empty();

    if (bingeFilterType === 'All') {
      binges.forEach(function(binge, i) {
        bingeList.append(createBingeCard(binge))
      });
      getFavorites();
    } else {
      binges.filter(function(binge) {
        return binge.type === bingeFilterType
      }).forEach(function(binge, i) {
        bingeList.append(createBingeCard(binge))
      });
      getFavorites();
    };
  });

  // GET all binges
  $.ajax({
    method: 'GET',
    url: '/api/binges/',
    dataType: 'JSON'
  })
  .done(function(dbBinges) {

    var bingeList = $("#bingeList");

    console.log(dbBinges);
    dbBinges.forEach(function(binge, i) {
      binges.push(binge);
      bingeList.append(createBingeCard(binge))
    });

    getFavorites();
  });

});