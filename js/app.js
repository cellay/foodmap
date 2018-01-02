$(document).ready(function () {
	splash();

  //	Imprimir restaurantes
 	$.each(data, function() {
	  $('.rest-list').append('<div class="rest col-md-5 col-10" id = '+ this.id +' data-type = '+ this.type +' data-toggle="modal" data-target="#restModal"></div>');

	  $('#'+this.id).css({
      'background': 'url(' + this.image + ')', 'background-size': 'cover', 'background-position': 'center left'});
    });
    
  // Efecto mouseover
  $('.rest').mouseover(function() {
    $(this).css({
    'opacity': '0.7', 'height': '35vh'});
  });   

  $('.rest').mouseout(function() {
    $(this).css({
    'opacity': '1', 'height': '25vh'});
  });

  // Filtrar resultados
  $('#search-input').keyup(function() {
    var filter = $(this).val().toLowerCase();
    $('.rest').hide();
    $('.rest').each(function() {
      console.log(this);
      var search = $(this).data( "type");
      if (search.indexOf(filter) !== -1) {
        $(this).fadeIn();
      }
    });
  });

  //Completar modal
  $('.rest').click(function() {
    for (i = 0; i < data.length; i++) {
      console.log(data.i);
      // if ($(this).data('id') === data[i].id) {
      //   alert('holi');
      // }
    }
  });

});

function splash() {
	setTimeout(function () {
		$('#splash-effect').fadeOut(500);
	}, 1000);
}