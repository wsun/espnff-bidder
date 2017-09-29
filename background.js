$('.rosterfix-yourbid-label > :input').on('blur', function() {
  var newValue = $(this).val();
  if (!isNaN(parseInt(newValue, 10))) {
    $('#bidAmount').val(newValue);
  }
});