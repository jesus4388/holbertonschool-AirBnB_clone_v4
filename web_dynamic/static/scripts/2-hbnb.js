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
  getstatus();
});
