// wait for DOM to load before running JS
$(document).ready( function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here
  $('.butt').submit(function(){
    $.ajax({
      method: 'GET',
      url: "https://api.spotify.com/v1/search",
      data: {
        q: $('#qName').val(),
        type: $('#qType').val()
      },
      headers: {
        "authorization": "Bearer BQCt71ojl381dFiRTKz98bY-jilJLacij_5rGMf0XWfQzX2EZIc8vZ7hcenDlx89bVM9nRTKpdaAywy8M3MZ-Q"
      }
    });
  });
});
