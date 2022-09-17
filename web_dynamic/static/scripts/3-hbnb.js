$(document).ready(function () {
  const dict = {};
  $('input:checkbox').change(function () {
    if (this.checked) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
      $('.amenities h4').empty();
    } else {
      delete dict[$(this).attr('data-id')];
      $('.amenities h4').empty();
    }
    let count = Object.keys(dict).length;
    for (const [key, value] of Object.entries(dict)) {
      if (count > 1) {
        $('.amenities h4').append(value, ", ");
        console.log(dict);
      } else {
        $('.amenities h4').append(value);
      }
      count--;
    }
  });
  const Url='http://0.0.0.0:5001/api/v1/status';
  
  function getstatus() {
    $.get(Url, function(data, textStatus) {
      if (data) {
        $('#api_status').addClass("available");
      } else {
        $('#api_status').addClass("available");
      }
   });
  };
  getstatus()

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
            }
        }
    });

});
