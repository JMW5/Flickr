$(document).ready(function() {
  //Make a request to the Flickr app to grab the public feed
  //Then view data in the html file

  $('button').click(function() {




    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var topic = $(this).text();
    var flickrData = {

      tags : topic,
      format : "json"

    };
    function displayFlickrPhotos(data){
      var flickrHTML = '<ul class="list-inline">';
      //Loop through the array
      $.each(data.items, function(i, item){
        flickrHTML += '<li>';
        flickrHTML += '<img src="' + item.media.m + ' " width="150px"></li>';
      });
      flickrHTML += '</ul>';
      $('#flickr_feed').html(flickrHTML);
    };




    $.getJSON(flickrAPI, flickrData, displayFlickrPhotos);
  });







});
