jQuery.noConflict();
(function( $ ) {
  $(function() {

    $('.card').hover(function(){
          $(this).toggleClass('flipped');
        });



    function ajaxpost(){
    $.ajax({
        url: "process.php",
        type: 'POST',
        data: $('#signupForm').serialize(),
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        },
        success: function(data){
            alert('hi ');
        }
    });
}
   

    // More code using $ as alias to jQuery
  });
})(jQuery);